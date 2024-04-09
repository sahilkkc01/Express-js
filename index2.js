//importing express module
const express=require('express');   
const app =express();

const phone=require('./data');

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})

app.get('/',(req,res)=>{
    res.send('<h1>Home</h1> <a href="api/phone">phone</a>')
})

app.get('/api/phone',(req,res)=>{
    const items=phone.map((products)=>{
        const{id,name,image}=products;
        return{id,name,image};
    })
    res.json(items);
})

//params recieved in req.params as object 
app.get('/api/phone/:phoneId',(req,res)=>{
    console.log(req.params);
    const {phoneId}=req.params;

    const singleProduct=phone.find((product)=>product.id === Number(phoneId));
     
    if(!singleProduct){
        res.status(404).send("Product Not Found..")
    }
    res.json(singleProduct);
})


//query string to recive short data on server 
app.get('/api/query',(req,res)=>{

    //spread operator ... to store data in sortedPhone
    let sortedPhone =[...phone];

    const{search,limit}=req.query;
//if search is true
    if(search){
        sortedPhone=sortedPhone.filter((product)=>{
            return product.name.toLocaleLowerCase().startsWith(search)
        })
    }
    res.send(sortedPhone);
    
})