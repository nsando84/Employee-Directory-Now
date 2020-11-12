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



router.post( '/update/:id', (req, res) => {
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
    const employeeInput = new Employee({
        firstname: req.body.firstname.toLowerCase().trim(),
        lastname: req.body.lastname.toLowerCase().trim(),
        salary: Math.floor(req.body.salary),
        title: req.body.title.toLowerCase().trim(),
        manager: req.body.manager.toLowerCase().trim(),
    })
    
    employeeInput.save()
    .then(() => res.json('New employee added'))
    .catch(err => err.status(400).json('Error: ' + err))
    
})

router.delete('/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})




module.exports = router