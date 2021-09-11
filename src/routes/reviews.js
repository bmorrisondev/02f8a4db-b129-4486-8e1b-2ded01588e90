const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

const data = {}

router.get('/', (req, res) => {
  res.send(data)
})

router.get('/:id', (req, res) => {
  if(data[req.params.id]) {
    res.send(data[req.params.id])
  } else {
    res.status(404).send()
  }
})

router.post('/', (req, res) => {
  let review = req.body
  let id = uuid()
  review.id = id
  data[id] = review
  res.send(review)
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  if(!data[id]) {
    res.status(404).send()
  } else {
    let review = req.body
    review.id = id
    data[id] = review
    res.send(review)
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  if(!data[id]) {
    res.status(404).send()
  } else {
    delete data[req.params.id]
    res.status(200).send()
  }
})

module.exports = router