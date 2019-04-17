const mongoose = require('mongoose')
const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  job_title: String,
  company: String,
  department: String,
  location: String,
  image: String,
  bio: String
})

module.exports = mongoose.model('Employee', EmployeeSchema)
