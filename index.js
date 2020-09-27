const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send(`Hello World from ${port}`)
})

app.get('/app1',(req,res)=>{
    res.send(`Hello World from ${port}`)
})

app.get('/app2',(req,res)=>{
    res.send(`Hello World from ${port}`)
})

app.listen(port, ()=>console.log(`Started on ${port}`))