const express = require('express')
const app = express()
const port = 3000

// code your routes 
app.get('/students', (req, res) => {
  // TODO: database fetch logic here
  res.send({ "data": ["Tomoko", "Phillip"] })
})

app.post('/students', (req, res) => {
  res.status(204).send({ "message": "ok" })
})

// start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})