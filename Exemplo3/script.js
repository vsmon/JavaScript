function addBola(){
    
    left = Math.floor(Math.random() * 500);
    top  = Math.floor(Math.random() * 500);
    console.log(left);
    bola = document.createElement("div");
    bola.id = "bola";
    bola.style.left = left+"px";
    bola.style.top = top+"px";
    bola.setAttribute("onClick", "removerBola(this)");
    document.body.appendChild(bola);
    
}
function removerBola(elemento){
    document.body.removeChild(elemento);
}