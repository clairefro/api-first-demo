// basic express server
const express = require('express')
const app = express()
const port = 3000

// code your routes 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})