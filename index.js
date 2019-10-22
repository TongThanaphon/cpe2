const express = require('express')
const app = express()
const port = 5781

app.get('/', (req, res) =>
  res.send('Greetings from somewhere...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
