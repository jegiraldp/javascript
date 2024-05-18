import express from "express";
import { sumar } from "./src/suma.js";

//init
const app = express();
// middleware
app.use(express.static("public"))
//rutas
app.get("/", (req, res) => {
  res.send("Hi, i am a server on express.. :) ");

});
app.get("/about", (req, res) => {
  res.send("About this project");
});

app.get("/calcular/:a/:b",  (req, res) => {
  const num1 = parseInt(req.params.a);
  const num2 = parseInt(req.params.b);
    let resul= sumar(num1,num2);
    console.log(resul)
    res.send(resul.toString());
  });

  app.post("/calcular", (req, res) => {
    const num1 = parseInt(req.body.a);
    const num2 = parseInt(req.body.b);
    const resul = sumar(num1, num2);
    res.send(resul.toString());
  });


  
app.use((req, res) => {
    res.send("No found , sorry :(")
});

//servidor
app.listen(3000);
console.log("Server ok");
