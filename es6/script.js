/* function addEndereco(endereco){
    const novoEndereco = {
        cidade:endereco.cidade,
        estado:endereco.estado,
        pais:'Brasil'
    }
    console.log(novoEndereco.cidade+", "+novoEndereco.estado+", "+novoEndereco.pais);
}
addEndereco({cidade:"Campina Grande", estado:"Paraiba"}); */

/* function addEnderecoRef(endereco){
    const {cidade, estado} = endereco;
    const novoEndereco = {cidade, estado, pais:"Brasil"};

    const {cidade:ncidade, estado:nestado, pais:npais} = novoEndereco;

    console.log(`${ncidade}, ${nestado}, ${npais}`);
}
addEnderecoRef({cidade:"Campina Grande", estado:"Paraiba"});

//funcao spread
let info = {
    nome:"Rodrigo",
    sobreNome:"Martins",
    idade: 35
}
let maisInfo = {
    ...info,
    cidade:"Sorocaba",
    estado:"Sao Paulo",
    pais:"Brasil"
}
console.log(maisInfo);

function setInfos(info){
    let maisInfos = {
        ...info,
        status:0
    }
    return maisInfos;
}
console.log(setInfos({nome:'Rodrigo', sobreNome:'Fonseca'}));

//funcao rest
function numerosRest(...numeros){
    console.log(numeros);
}
numerosRest(1,2,3,4,5,6,5);

//Funcao Anonima
function numeros(...numeros){
    let total = numeros.reduce((atual,x) => atual + x);
    console.log(total);
}
numeros(1,2,3,4,5,6,1);

//Valor padrao para parametro
function setInfo(nome = '', sobrenome = '', status = false){
    console.log({nome, sobrenome, status});
}
setInfo("Rodrigo", "Fonseca"); */

//Fetch
/* let cep = '18022252';
fetch(`https://viacep.com.br/ws/${cep}/json/`,{method:'GET'})
    .then((resposta)=>resposta.json())
    .then((json)=>{console.log(json);}); */

async function consultaCEP(pCep){
    const url = `https://viacep.com.br/ws/${pCep}/json/`;
    let resposta = await fetch(url);
    let json     = await resposta.json();

    let { bairro, cep, complemento, gia, ibge, localidade, logradouro, uf, unidade } = json;
    
    
    document.getElementById('bairro').value      = bairro;
    document.getElementById('cep').value         = cep;
    document.getElementById('cep2').value        = cep;
    document.getElementById('complemento').value = complemento;
    document.getElementById('gia').value         = gia;
    document.getElementById('ibge').value        = ibge;
    document.getElementById('localidade').value  = localidade;
    document.getElementById('logradouro').value  = logradouro;
    document.getElementById('uf').value          = uf;
    document.getElementById('unidade').value     = unidade;
    console.log(logradouro);

}    

/*bairro: "Vila Zacarias"
​
cep: "18022-252"
​
complemento: ""
​
gia: "6695"
​
ibge: "3552205"
​
localidade: "Sorocaba"
​
logradouro: "Rua José Ciandrini"
​
uf: "SP"
​
unidade: ""*/