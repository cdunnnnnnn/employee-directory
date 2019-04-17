const mongoose = require('mongoose')
const EmployeeSchema = new mongoose.Schema({
  name: String,
  image: String,
  job_title: String,
  department: String
})

module.exports = mongoose.model('Employee', EmployeeSchema)
