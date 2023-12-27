const express  = require('express')
require('dotenv').config()
const connection = require('./db/connection')


const app= express()

const port = process.env.PORT || 4500

app.get('/',(req,res)=>{
   
    res.send('hello world')
})

app.listen(port, ()=>{
    console.log('school management system is live');
})