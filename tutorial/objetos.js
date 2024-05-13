class persona{
    constructor(doc, nombre){
        this.doc=doc;
        this.nombre=nombre;
    }

    saludar(){
       // console.log()
       document.getElementById("prueba").innerHTML = `Hola soy ${this.nombre}`
    }

    static hello(){
        document.getElementById("prueba").innerHTML = "saludando normal";
    }

}

function inicioObjetos(){
  let personaUno = new persona(123,"jorge");
    personaUno.saludar();
    persona.hello();

}