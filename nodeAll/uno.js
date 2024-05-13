//ES6
//import fs from 'fs';
import { getSaludo, suma } from "./funciones.js";

//const fs = require('fs');
//const {getSaludo, suma} = require("./funciones");

//************************* */

/*const persona={nombre:"jorge",edad:25};
console.log(persona.nombre);*/
/*
fs.readFile('archivo.txt', 'utf-8', (err,data) => {
   console.log("kontenido archivo "+data);
});*/

console.log(getSaludo());
console.log(suma(44,4));
//console.log(process.env.PORT ?? 8080)

