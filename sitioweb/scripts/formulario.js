function validar(){
    const codigo = document.getElementById("txtCode");
    const hiddenCode=document.getElementById("escodidoCode")

    if(codigo.value.length==0){
        alert("Code required")
        hiddenCode.innerHTML="Code required"
    }
}