const express=require('express');
const axios=require('axios');
const { default: Axios } = require('axios');
const app=express();
const port = 5000

const url1 ='https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=1a11eac5ec0302ffacb46b2cd5ecdb7e'
const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=Marseille&appid=1a11eac5ec0302ffacb46b2cd5ecdb7e'
const url3 ='https://api.openweathermap.org/data/2.5/weather?q=Nice&appid=1a11eac5ec0302ffacb46b2cd5ecdb7e'


app.get('/Paris',(req,res)=>{
    axios.get(url1)
    .then(response=>res.send(response.data))
    .catch(error=>res.send(error))
})

app.get('/Marseille',(req,res)=>{
    axios.get(url2)
    .then(response=>res.json(response.data))
    .catch(error=>res.send(error))
})

app.get('/Nice',(req,res)=>{
    axios.get(url3)
    .then(response=>res.json(response.data))
    .catch(error=>res.send(error))
})


app.listen(port,error=>{
    if(error)console.log(er) 
    else console.log(`server is connected on port ${port}`)
}) ;
