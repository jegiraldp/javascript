const enlace = document.querySelector('a');
const centro = document.getElementById('centro');

enlace.onclick = async (event)=>{
    event.preventDefault();
    const url = enlace.getAttribute('href');
    const response = await fetch (url);
    if(response.ok){
        const data = await response.text();
        centro.innerHTML = data;
    }
}