const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())

const port = process.env.PORT || 5000

const reviewsRoutes = require('./routes/reviews')

app.use("/api/reviews", reviewsRoutes)

app.listen(port, () => console.log(`Server is listening on port ${5000}`))