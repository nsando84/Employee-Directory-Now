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
    employeeInput = {
        firstname: req.body.firstname.charAt(0).toLowerCase() + req.body.firstname.slice(1),
        lastname: req.body.lastname.charAt(0).toLowerCase() +  req.body.lastname.slice(1),
        salary: req.body.salary,
        title: req.body.title,
        manager: req.body.manager
    }

    Employee.findByIdAndUpdate(req.params.id, employeeInput)
        .then(response => { res.send(response) })
        .catch(err => res.json('Error: ' + err))
})



router.post( '/add', (req, res) => {
    employeeInput = {
        firstname: req.body.firstname.charAt(0).toLowerCase() + req.body.firstname.slice(1),
        lastname: req.body.lastname.charAt(0).toLowerCase() +  req.body.lastname.slice(1),
        salary: req.body.salary,
        title: req.body.title,
        manager: req.body.manager
    }

    console.log(employeeInput)
})


module.exports = router