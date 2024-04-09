const express = require('express');
const path = require('path');
const phone = require('./data');

const app = express();

app.get('/',(req,res)=>{
                res.send('<h1>Home Page</h1>');
})

app.get('/contact',(req,res)=>{
                res.send('<h1>Contact</h1>');
})

app.get('/files',(req,res)=>{
               res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/jsonex',(req,res)=>{
    res.json([
        {"id":1,
        "name":"Aryan"
        },
        {"id":2,
        "name":"Pnkaj"
         },
        {"id":3,
        "name":"Rajan"
         },
    ])
})

//data.js data
app.get('/data',(req,res)=>{
    //import phone from ./data.js
    res.json(phone)
})

app.listen(3000,()=>{
    console.log("Server is running");
})
