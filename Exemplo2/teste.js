function calcular(){
    operacao = document.getElementById("operacao").value;
    valor1   = parseFloat(document.getElementById("num1").value);
    valor2   = parseFloat(document.getElementById("num2").value);
    resultado = 0.
    if (operacao == "soma"){
        resultado = valor1 + valor2;
    }
    else if(operacao == "subtracao"){
        resultado = valor1 - valor2;
    }
    else if(operacao == "multiplicacao"){
        resultado = valor1 * valor2;    
    }
    else if(operacao == "divisao"){
        resultado = valor1 / valor2;
    }
    alert(resultado);
}
function teste(){
    
}