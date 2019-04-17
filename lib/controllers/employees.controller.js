const express = require('express')
const employeesController = express.Router()
const Employee = require('../models/employee')

employeesController.get('/', async (req, res) => {
  const employees = await Employee.find()
    .select('name')
    .sort({ _id: -1 })
  res.set('Access-Control-Allow-Origin', '*')
  res.json(employees)
})
// Not required for this app
employeesController.get('/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id)
  res.set('Access-Control-Allow-Origin', '*')
  res.json(employee)
})

employeesController.post('/', async (req, res) => {
  if (!req.body) {
    return res.status(403).end()
  }
  const employee = await Employee.create(req.body)
  res.set('Access-Control-Allow-Origin', '*')
  res.json(employee)
})

employeesController.put('/:id', async (req, res) => {
  if (!req.body) {
    return res.status(403).end()
  }
  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    {
      $upsert: true,
      new: true
    }
  )
  res.set('Access-Control-Allow-Origin', '*')
  res.json(employee)
})

employeesController.delete('/:id', async (req, res) => {
  const employee = await Employee.deleteOne({
    _id: req.params.id
  })
  res.set('Access-Control-Allow-Origin', '*')
  res.json(employee)
})

module.exports = employeesController
