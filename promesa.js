module.exports.contador=function(){
    return new Promise(function (resolve,reject){
      var saludo="Hola promesa sin retorno";
      return resolve(saludo);
  });
}//
