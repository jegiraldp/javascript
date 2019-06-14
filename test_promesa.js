const lis = require('./promesa.js');
console.log("vamos bien");
var promesa = lis.contador();
promesa.then(function(resultado) {
  console.log(resultado);
});
