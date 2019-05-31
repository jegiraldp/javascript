console.log("saludos externo");
let nombre =  "Jorge Giraldo";
module.exports.nombre=nombre;
module.exports.saludoF=saludoF();

module.exports.otro=function() {
  console.log("\nsaludo externo desde otro");
};

function saludoF(){
console.log("\nsaludo externo desde la función");

}
