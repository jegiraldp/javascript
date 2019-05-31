const os = require('os');
const fs = require('fs');
const sa = require('./saludo.js');

console.log(sa.nombre);
sa.saludoF;
sa.otro();


let cpu=os.cpus();
console.log(cpu[1]['model']);
console.log(cpu[1]['times']['user']);
console.log("------------------------------------------");
console.log("------------------------------------------");
/*fs.appendFile("test.txt","\n"+cpu[1]['times']['user'],function (error) {
  if(error){console.log("error");}
});*/
