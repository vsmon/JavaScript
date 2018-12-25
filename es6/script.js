/* function addEndereco(endereco){
    const novoEndereco = {
        cidade:endereco.cidade,
        estado:endereco.estado,
        pais:'Brasil'
    }
    console.log(novoEndereco.cidade+", "+novoEndereco.estado+", "+novoEndereco.pais);
}
addEndereco({cidade:"Campina Grande", estado:"Paraiba"}); */

function addEnderecoRef(endereco){
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
function numeros(...numeros){
    console.log(numeros);
}
numeros(1,2,3,4,5,6);