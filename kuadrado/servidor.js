import express from "express";
import {calcular} from "./src/suma.js"
//
const app = express();
//

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views','./views');

//rutas
app.get("/", (req, res) => {
  res.send("Hola soy el servidor web...");
});

app.get("/sumar/:a/:b",(req,res)=>{
    let num1=parseInt(req.params.a);
    let num2=parseInt(req.params.b);
    const suma=calcular(num1,num2)

    const cositas={
        titulo:"Soy el titulo",
        nombre:"Jorge Giraldo",
        suma:suma
    }
   res.render('contacto', cositas);
})

app.get("/about",(req,res)=>{
    res.send("Hola About.....");
})

//listen
app.listen(3000);
console.log("Server ok.");
