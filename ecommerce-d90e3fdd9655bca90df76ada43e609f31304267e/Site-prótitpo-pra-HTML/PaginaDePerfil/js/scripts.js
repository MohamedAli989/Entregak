/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
// Função para verificar se o usuário está autenticado
function verificarAutenticacao() {
    // Lógica para verificar se o usuário está autenticado (usando cookies, tokens, etc.)
    // Retornar true se o usuário estiver autenticado, caso contrário, retornar false
  
    // Exemplo básico: verificar se há um token de autenticação armazenado em localStorage
    var token = localStorage.getItem('token');
    if (token) {
      // O usuário está autenticado
      return true;
    } else {
      // O usuário não está autenticado
      return false;
    }
  }
// Função para realizar o login
function fazerLogin(usuario, senha) {
    // Lógica de autenticação (pode ser uma chamada a uma API, por exemplo)
    if (usuario === "usuario" && senha === "senha") {
      // Login bem-sucedido
      return true;
    } else {
      // Login falhou
      return false;
    }
  }
  
  // Função para verificar se o usuário está autenticado
  function verificarAutenticacao() {
    // Lógica para verificar se o usuário está autenticado (usando cookies, tokens, etc.)
    // Retornar true se o usuário estiver autenticado, caso contrário, retornar false
  
    // Exemplo básico: verificar se há um token de autenticação armazenado em localStorage
    var token = localStorage.getItem('token');
    if (token) {
      // O usuário está autenticado
      return true;
    } else {
      // O usuário não está autenticado
      return false;
    }
  }
    // Array de produtos
var produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.99 },
    { id: 2, nome: 'Produto 2', preco: 19.99 },
    { id: 3, nome: 'Produto 3', preco: 5.99 },
    { id: 4, nome: 'Produto 4', preco: 7.99 },
    { id: 5, nome: 'Produto 5', preco: 12.99 }
  ];
  
  // Função para apresentar os produtos
  function apresentarProdutos() {
    // Obtém a referência do elemento HTML onde os produtos serão exibidos
    var listaProdutos = document.getElementById('listaProdutos');
  
    // Limpa o conteúdo anterior
    listaProdutos.innerHTML = '';
  
    // Percorre o array de produtos e cria os elementos HTML correspondentes
    produtos.forEach(function (produto) {
      // Cria o elemento de item de lista (li)
      var li = document.createElement('li');
      li.textContent = produto.nome + ' - R$ ' + produto.preco.toFixed(2);
  
      // Adiciona o item de lista à lista de produtos
      listaProdutos.appendChild(li);
    });
  }
  
