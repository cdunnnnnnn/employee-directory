const mongoose = require('mongoose')
const EmployeeSchema = new mongoose.Schema({
  name: String,
  job_title: String,
  department: String,
  image: String
})

module.exports = mongoose.model('Employee', EmployeeSchema)
