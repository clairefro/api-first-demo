const express = require('express')
const app = express()
const port = 3000

const beers = [
  {
    "name": "Kirin",
    "id": "abc",
    "abv": 5
  },
  {
    "name": "Sapporo",
    "id": "efg",
    "abv": 3
  },
  {
    "name": "Asahi",
    "id": "hgj",
    "abv": 7
  },
  {
    "name": "Budlight",
    "id": "xyz",
    "abv": 15
  }
]

// code your routes 
app.get('/beers', (req, res) => {
  // TODO: fetch logic for getting beers from database goes here
  res.send({ beers: beers })
})

// start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
