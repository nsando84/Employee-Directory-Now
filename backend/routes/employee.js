const express = require('express');
const router = express.Router()
let Employee = require('../models/employee.model')

router.get('/' , (req, res) => {
    Employee.find()
        .then(users => res.json(users))
        .catch(err => res.json('Error: ' + err))
})


router.get('/:employee' , (req, res) => {
    const employeeTemp = req.params.employee.split("-")
    Employee.findOne({ firstname: employeeTemp[0], lastname: employeeTemp[1]})
        .then(users => res.json(users))
        .catch(err => res.json('Error: ' + err))
})



router.post( '/:id', (req, res) => {
    console.log(req.params)
    console.log(req.body)

    employeeInput = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        salary: req.body.salary,
        title: req.body.title,
        manager: req.body.manager
    }

    // const newEmployee = new Employee(employeeInput)

    // newEmployee.save()
    //     .then(() => res.json('User added!'))
    //     .catch(err => res.json('Error: ' + err))
})

module.exports = router