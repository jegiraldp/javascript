import express from 'express';
const app = express();


//rutas

app.get('/',(req,res)=>{
    res.send("Hi, i am a server on express.. :)")
});

//servidor
app.listen(3000)
console.log("Server ok")