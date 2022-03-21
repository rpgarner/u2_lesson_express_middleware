const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001
// Your Code Here
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get(
  '/middleware',
  (req, res, next) => {
    console.log('this is the middleware')
    next()
  },
  (req, res, next) => {
    console.log('anotha one')
    next()
  },
  (req, res) => {
    res.send('response completed')
  }
)

app.get('/taco', (req, res, next) => {
  console.log('HTTP Request: GET')
  next()
}, (req, res) => {
  res.send('the HTTP type of GET request is complete')
})

app.put('/taco', (req, res, next) => {
  console.log('HTTP Request: PUT')
  next()
}, (req, res) => {
  res.send('the HTTP type of PUT request is complete')
})

app.post('/taco', (req, res, next) => {
  console.log('HTTP Request: POST')
  next()
}, (req, res) => {
  res.send('the HTTP type of POST request is complete')
})

app.delete('/taco', (req, res, next) => {
  console.log('HTTP Request: DELETE')
  next()
}, (req, res) => {
  res.send('the HTTP type of DELETE request is complete')
})
// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
