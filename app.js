/* 
 Desafio: Amigo Secreto
 Versão 0.1
 Desenvolvedor: Leonardo Marques 
*/


//Variavel
let listAmigos = [];




// Funcão para adicionar nome a lista de amigos "listAmigos"
function addAmigo () {
   let nomeAdicionado = document.querySelector('input').value;

   if (nomeAdicionado == ""){ // Caso o campo input esteja vazio retorna um popup de alerta
    alert("Insira um nome válido!");
    limparInput();
   } 
   else {// Adiciona o nome digitado a lista de amigo e exibe o nome no navegador
    listAmigos.push(nomeAdicionado);
    
    let listaComQuebraLinha = listAmigos.join('<br>');
    
    exibirTexto('listaAmigos', listaComQuebraLinha);
    limparInput();
   };

};


// Função para limpar campo do input
function limparInput () {
    document.querySelector('input').value = '';
};


// Função para exibir os nomes digitados no navegador
function exibirTexto (tag, texto) {
    document.getElementById(tag).innerHTML = texto;   
};



// Sorteia um nome da lista de amigos e caso a lista esteja vazia mostra um alerta
function sortearAmigo() {
    if (listAmigos == '') {
        alert('Nenhum amigo para sortear :(');
    }
    else {
    amigoSorteado =  listAmigos[Math.floor(Math.random() * listAmigos.length)];
    exibirTexto('listaAmigos', '');
    exibirTexto(`resultado`, `O nome sorteado é:  ${amigoSorteado}`);
    };
};



// Função restart limpa os campos para um novo sorteio
function restart() {
    listAmigos = [];
    limparInput();
    exibirTexto('resultado', '');
};


    