import express from "express";

const app = express();


//rutas
app.get('/',(req,res)=>{
    res.send("Hola soy el servidor")
});

app.get('/saludo',(req,res)=>{
    res.send("Hola soy el servidor en la ruta /saludo")
});

//servidor
app.listen(3000);
console.log("Server ok");