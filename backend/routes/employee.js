const express = require('express');
const router = express.Router()
let Employee = require('../models/employee.model')

router.get('/' , (req, res) => {
    Employee.find()
        .then(users => res.json(users))
        .catch(err => res.json('Error: ' + err))
})

router.post( '/add', (req, res) => {
    employeeInput = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        salary: req.body.salary,
        title: req.body.title,
        manager: req.body.manager
    }

    const newEmployee = new Employee(employeeInput)

    newEmployee.save()
        .then(() => res.json('User added!'))
        .catch(err => res.json('Error: ' + err))
})

module.exports = router