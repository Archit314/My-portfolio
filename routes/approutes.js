const express = require('express')
const path = require('path')
const router = express.Router()

// creating routers for my first app 
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})
router.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, '../templates/home.html'))
})

module.exports = router