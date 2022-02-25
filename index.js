const express = require('express')
const app = express()
const morgan = require('morgan')
//const config = require('./utils/config')
//const logger = require('./utils/logger')
const cors = require('cors')

app.use(cors())
app.use(express.json())

let persons = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]


morgan.token('person', (req) => {
  if (req.method === 'POST') return JSON.stringify(req.body)
  return null
})

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :person',
  ),
)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  let currentdate = new Date();
  let reply = '<p>Phonebook has info for ' + String(persons.length) + ' people.</p>' + '<p>' + String(currentdate) + '</p>'
  console.log(reply)
  response.send(reply)
})


app.get('/number', (request, response) => {
  let currentdate = Math.round(Math.random() * 100000, 0)
  let reply = '<p>' + String(currentdate) + '</p>'
  response.send(reply)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const person = request.body
  console.log(person)
  person.id = Math.round(Math.random() * 100000, 0)
  if(!person.number) {
    response.json({ error: 'number is missing' })
  }
  else if(persons.filter(p => p.name == person.name).length > 0) {
    response.json({error: 'name must be unique'})
  }
  else {
    persons = persons.concat(person)
    response.json(person)
  }
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
