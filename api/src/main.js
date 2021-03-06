require('dotenv').config()
const express = require('express')
const app = express()

if(!process.env.FAUNA_SECRET) {
  throw "FAUNA_SECRET missing from environment variables."
}

app.use(express.static('public'))
app.use(express.json())

const port = process.env.PORT || 5000

const reviewsRoutes = require('./routes/reviews')
const productsRoutes = require('./routes/products')

app.use("/api/reviews", reviewsRoutes)
app.use("/api/products", productsRoutes)

app.listen(port, () => console.log(`Server is listening on port ${port}`))