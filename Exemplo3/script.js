function addBola(){
    
    p1Left = Math.floor(Math.random() * 1300);
    p2Top  = Math.floor(Math.random() * 500);
    console.log(p2Top);
    bola = document.createElement("div");
    bola.id = "bola";
    bola.style.left = `${p1Left}px`;
    bola.style.top = `${p2Top}px`;
    bola.setAttribute("onClick", "removerBola(this)");
    document.body.appendChild(bola);
    
}
function removerBola(elemento){
    document.body.removeChild(elemento);
}
function iniciar(){
    setInterval("addBola()", 1000);
}