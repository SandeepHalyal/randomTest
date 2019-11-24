const router = require('express').Router();
const mongoose = require('mongoose')
const allletter = require('../models/allLetter')
const allDesg = require('../models/all-Designations')

router.post("/appletter", (req, res) => {
  newAppointee = allletter(req.body);
  newDesg = allDesg({
    desg: req.body.desg
  })
  allDesg.findOne({
    desg: req.body.desg
  }).then(response => {
    if (!response && req.body.desg)
      newDesg.save().then(result => {
        console.log(result)
      })
  })
  newAppointee.save().then(result => {
    console.log(result)
  }).catch(err => {
    if (err) throw err;
  })

  res.status(201).json({
    message: "Data Saved"
  })
})

router.post("/sendLettersData", (req, res)=>{
  console.log(req.body.lettertype)
  allletter.find({lettertype: req.body.lettertype}).then(result=>{
    console.log(result);
    res.status(201).json(result)
  })
})

router.get("/sendDesg", (req, res) => {
  allDesg.find({}).then(result => {
    console.log(result)
    res.status(201).json(result)
  })
})

router.post("/sendperson", (req,res)=>{
  console.log(req.body.id)
  allletter.findById(req.body.id).then(result=>{
    console.log(result);
    res.status(201).json(result)
  })
})


module.exports = router;