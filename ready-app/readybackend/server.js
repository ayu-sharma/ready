const connectToMongo = require('./db');
const express = require('express')
const userRoutes = require('./routes/user')

connectToMongo();
const app = express()
const port = 4000

// app.get('/api/products', (req, res) => {
//   res.send(data.products)
// })

app.use(express.json())

app.use('/api/user', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
