function saludar() {
  // alert("conectado");
  document.getElementById("prueba").innerHTML = "<br>hola";
  let num;
  alert(num);

  let num2 = null;
  alert(num2);

  let num3 = "jorge";
  let num4 = 5;
  alert(num3 + num4);
  alert(num3 * num4);

  let nom = prompt("Dime tu  nombre");
  document.getElementById("prueba").innerHTML = `<br>hola ${nom}`;
}
function saludarDos() {
  let num1 = 23;
  let num2 = "23";

  alert(num1 === num2);
}

function saludarNombre() {
  let n = document.getElementById("txtNombre").value;
  //alert(n);

  const cuadrado = (n) => {
    return n ** 2;
  };

  alert(cuadrado(3));
}

function arreglos() {
 /* asignaturas = ["math", "spanish", "science", 34, 35.4];
  alert(asignaturas);

  persona = {
    nombre: "jorge",
    apellido: "Giraldo",
    edad: 25,
  };

  alert(persona["nombre"]);
*/
  ///
  let numAlumnos= 2;
  let alumnos=[];

  for (let i = 0; i < numAlumnos; i++) {
    alumnos[i]=[prompt("nombre"),0]    
  }

  const asistencia = (nombre,pos)=>{
    let presencia = prompt(`Asistió ${nombre}?? -- Digite S`);
    if(presencia == 's' || presencia == "S"){
      alumnos[pos][1]++;
    }
  }

  for (const al in alumnos) {
    asistencia(alumnos[al][0],al);
  }
  let res=""
 for (const alu in alumnos) {
  res += `${alumnos[alu][0]}: A= ${alumnos[alu][1]} <br>`;
 }
 document.getElementById("prueba").innerHTML ="<br/>"+res;

  
}

function losFor(){
  let prueba=document.getElementById("prueba");
  cursos = {
    "0":{"nombre":"math"},
    "1":{"nombre":"spanish"}
  }

  for (c in cursos){
    alert(c); //cursos[c]["nombre"]
  }

  cursos=["math", "spanish","science"]

  for (c of cursos){
    alert(c);
  }


}
