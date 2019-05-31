var inter;
function hora(){
  inter = setInterval(cambiar,1000);
}

function cambiar() {
  var f = new Date();
  seg=f.getSeconds();
  elp=document.getElementById("elp");
  elp2=document.getElementById("elp2");
  elp.innerHTML=seg;
  var d0 = document.getElementsByTagName("div")[0];
  var d1 = document.getElementsByTagName("div")[1];
if(seg % 2==0){
  d0.setAttribute("class","azul");
  d1.setAttribute("class","rojo");
}else{
  d0.setAttribute("class","rojo");
  d1.setAttribute("class","azul");
}

if (seg>40) {
    elp2.innerHTML="mayor que 40";
    stop();
}

}//cambiar

function stop() {
  clearInterval(inter);

}
