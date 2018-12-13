function adicionarIngrediente(){
    ingre = document.getElementById("ingrediente").value;
    lista = document.getElementById("lista").innerHTML;

    lista = lista + "<li>"+ingre+"</li>";

    document.getElementById("lista").innerHTML = lista;

}
function addBola(){
    bola = document.createElement("div");
    bola.setAttribute("id","bola");

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    p1 = Math.floor(Math.random() * 1300);
    p2 = Math.floor(Math.random() * 600);

    bola.setAttribute("Style","background-color:rgb("+r+", "+g+", "+b+");left:"+p1+"px;top:"+p2+"px");
    bola.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(bola);
}
function estourar(elemento){
    document.body.removeChild(elemento);
}
function iniciar(){
    setInterval(addBola, 1000)
}
function criaTexto(){
    texto = document.createElement("input");
    texto.setAttribute("Type", "text");
    document.body.appendChild(texto);
}