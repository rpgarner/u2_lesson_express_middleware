const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001
// Your Code Here
// Middleware

//using the cors middleware
app.use(cors())
//using json middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))




// Route logic
app.get(
  '/middleware',
  (request, response, next) => {
    console.log('this is middlware using get method')
    next()
  },
  (req, res) => {
    res.send('the HTTP type of get request is complete')
  }
)

app.post(
  '/middleware',
  (request, response, next) => {
    console.log('this is middlware using post method')
    next()
  },
  (req, res) => {
    res.send({ msg : 'the HTTP type of post request is complete'})
  }
)

app.put(
  '/middleware/:put',
  (request, response, next) => {
    console.log('this is middleware using put method')
    next()
  },
  (req, res) => {
    res.send(`The type of ${req.params.put} request is complete`)
  }
)

app.delete(
  '/middleware',
  (request, response, next) => {
    console.log('this is middlware using delete method')
    next()
  },
  (req, res) => {
    res.send(`The HTTP type of ${req.query.name} request is complete`)
  }
)

// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
