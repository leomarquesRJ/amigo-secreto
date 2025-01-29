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

   if (nomeAdicionado == ""){
    alert("Insira um nome válido!");
    limparInput();
   } 
   else 
   {
    listAmigos.push(nomeAdicionado);
    let listaComQuebraLinha = listAmigos.join('<br>');
    exibirLista('listaAmigos', listaComQuebraLinha);
    limparInput();
   };

   console.log(listAmigos);
};



function limparInput () {
    document.querySelector('input').value = '';
};



function exibirLista (tag, texto) {
    document.getElementById(tag).innerHTML = texto;   
};
    