
 function saludar(){
    console.log("saludar");
    document.getElementById("escondido").innerHTML = "<br>hola....";
}

function sumarLocal(){
    let n1= parseInt(document.getElementById("txtN1").value);
    let n2= parseInt(document.getElementById("txtN2").value);
    const data = calcularLocal(n1,n2);
    document.getElementById("escondido").innerHTML = "<br>Suma Local => "+data;
}

function calcularLocal(n1,n2){
return (n1+n2);
}

async function sumarRemoto(){
    let n1= document.getElementById("txtN1").value;
    let n2= document.getElementById("txtN2").value;
    const response = await fetch(`/calcular/${n1}/${n2}`);
    const data = await response.text();
    document.getElementById("escondido").innerHTML = "<br>Suma Remota => "+data;
}