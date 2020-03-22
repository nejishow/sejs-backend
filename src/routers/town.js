const express = require("express")
const router = new express.Router()
const firebase = require('firebase-admin')
const Town = require("../models/town")
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'images');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname,)
    },
})
const upload = multer({storage:storage})

router.post('/town',upload.array('upload'),(req, res)=>{
    const town = new Town(req.body)
    town.cityImage ="http://localhost:3000/images/"+req.files[0].originalname
    town.map = "http://localhost:3000/images/"+req.files[1].originalname
    town.save().then((data)=>{
    return res.status(200).send(data)
    }).catch((e)=>{
        res.status(404).send(e)

    }) 
    
})

router.post('/upload',upload.array('upload'), (req, res)=>{
    const town = new Town({

    })
    console.log(req.files);
    
    res.send("http://localhost:3000/images/")
})
router.get('/towns', async (req, res)=> {
   try {
    const towns = await Town.find({})
    res.status(201).send(towns)
   } catch (error) {
    res.status(404).send(error)

   }
})

module.exports = router