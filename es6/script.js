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