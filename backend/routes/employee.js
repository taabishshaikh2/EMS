const express = require("express");
const router = express.Router();
const Employee = require("../models/Employees");

// Fetch all employees
router.get('/fetchallemployees', async (req,res) => {
    try {
        const employee = await Employee.find(req.params.id);
        res.json(employee);
      }  catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})

// Add an employee
router.post('/addEmployee', async (req,res) => {
    try {
        const {name, age, email, phone,gender} = req.body;
        const employee = new Employee({
           name,age,email, phone, gender
        })
        const savedEmp = await employee.save()
        res.json(savedEmp);
      }  catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})

// delete an eployee
router.delete('/deleteEmployee/:id', async(req,res)=> {
    try{
        let emp = await Employee.findById(req.params.id)
        if(!emp){
            return res.status(404).send("Not Found");
        }
        emp = await Employee.findByIdAndDelete(req.params.id)
        res.json({"Success": "Employee Has been deleted", emp:emp})
    }   
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})

// update an employee
router.put('/updateEmployee/:id', async(req,res) => {
 
    try{
        const {name, age, email, phone,gender} = req.body;
        const newEmp = {};
        if(name){
            newEmp.name = name
        }  if(age){
            newEmp.age = age
        }if(email){
            newEmp.email = email
        }if(phone){
            newEmp.phone = phone
        }if(gender){
            newEmp.gender = gender
        }
        let emp = await Employee.findById(req.params.id)
        if(!emp){
            return res.status(404).send("Not Found");
        }
        emp = await Employee.findByIdAndUpdate(req.params.id,
            {$set: newEmp},
            {new: true})
            res.json({"Success": "Employee Has been Update", emp:emp})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})

module.exports = router;