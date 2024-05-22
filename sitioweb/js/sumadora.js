function calcular() {
  let n1 = document.getElementById("txtN1").value;
  let n2 = document.getElementById("txtN2").value;

  if (n1.length == 0 || n2.length == 0) {
    alert("Faltan Datos");
  } else {
    let num1 = parseInt(n1);
    let num2 = parseInt(n2);
    let suma = num1 + num2;

    document.getElementById("escondido").innerHTML = "La suma es " + suma;
  }
}
