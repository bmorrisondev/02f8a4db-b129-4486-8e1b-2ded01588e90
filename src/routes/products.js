const FaunaService = require('@brianmmdev/faunaservice')
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');

const db = new FaunaService(process.env.FAUNA_SECRET)
const collectionName = "products"

const validations = [
  check('name').isString()
]

router.get('/', async (req, res) => {
  try {
    let data = await db.listRecords(collectionName)
    res.send(data)
  } catch (err) {
    console.error(err)
    res.status(500).send()
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    let record = await db.getRecordById(collectionName, id)
    if(record) {
      res.send(record)
    } else {
      res.status(404).send()
    }
  } catch (err) {
    console.error(err)
    res.status(500).send()
  }
})

router.post('/', validations, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array()
      })
    } else {
      let { name } = req.body
      let saved = await db.createRecord(collectionName, { name })
      res.send(saved)
    }
  } catch(err) {
    console.error(err)
    res.status(500).send()
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array()
      })
    } else {
      let { name } = req.body
      let saved = await db.updateRecord(collectionName, id, { name })
      res.send(saved)
    }
  } catch (err) {
    console.error(err)
    res.status(500).send()
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deleteRecord(collectionName, id)
    res.status(200).send()
  } catch (err) {
    console.error(err)
    res.status(500).send()
  }
})

module.exports = router