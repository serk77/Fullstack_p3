const mongoose = require('mongoose')

//if (process.argv.length < 3) {
//  console.log('Please provide the password as an argument: node mongo.js <password>')
//  process.exit(1)
//}

//const password = process.argv[2]

const mongoUrl = 'mongodb+srv://testuser:1234567890@cluster0.bditi.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(mongoUrl)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const newName = process.argv[2]
const newNumber = process.argv[3]
//console.log(newName, newNumber)

const person = new Person({
  name: newName,
  number: newNumber
})


person.save().then(result => {
  console.log(`added ${person.name} number ${person.number} to phonebook`)
  //mongoose.connection.close()
})

console.log("phonebook:")
Person.find({}).then(result => {
  result.forEach(person => {
    console.log(`${person.name} ${person.number}`)
  })
  mongoose.connection.close()
})
