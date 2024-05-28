import express from "express";

//
const app = express();

//
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views','./views');

///
app.get("/", (req, res)=>{
    //res.send("Hola soy la ruta /");
    const datos={
        titulo:'Sistema de cálculo de cuadrado...'

    }
    res.render('inicio', datos)
})

///

app.get("/cuadrado/:n", (req, res)=>{
    const num = parseInt(req.params.n);
    const cua= num**2;
    res.send(cua.toString());
})

//listen
app.listen(3000);
console.log("Server ok.");