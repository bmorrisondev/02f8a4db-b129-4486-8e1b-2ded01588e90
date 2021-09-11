const FaunaService = require('@brianmmdev/faunaservice')
const express = require('express')
const router = express.Router()

const db = new FaunaService(process.env.FAUNA_SECRET)
const collectionName = "reviews"

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

router.post('/', async (req, res) => {
  try {
    let review = req.body
    let saved = await db.createRecord(collectionName, review)
    res.send(saved)
  } catch(err) {
    console.error(err)
    res.status(500).send()
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    let review = req.body
    let saved = await db.updateRecord(collectionName, id, review)
    res.send(saved)
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