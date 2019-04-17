const express = require('express')
const router = express.Router()
const employees = require('../controllers/employees.controller')

router.use('/employees', employees)
module.exports = router
