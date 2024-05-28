async function calcular(){
    let num = document.getElementById("txtNumero").value;
     if(num.length==0){
        alert("Falta número");
    }else{
        const rta = await fetch(`/cuadrado/${num}`)
       const respuestaTexto = await rta.text();
         
        document.getElementById("respuesta").innerHTML="El cuadrado es "+respuestaTexto;
    }  
}