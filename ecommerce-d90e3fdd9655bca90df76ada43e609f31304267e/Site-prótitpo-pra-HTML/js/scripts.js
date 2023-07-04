
// Definindo um objeto Carrinho de Compras
var carrinhoDeCompras = {
    itens: [],
  
    // Função para adicionar um item ao carrinho
    adicionarItem: function (item) {
      this.itens.push(item);
    },
  
    // Função para remover um item do carrinho
    removerItem: function (index) {
      this.itens.splice(index, 1);
    },
  
    // Função para calcular o total do carrinho
    calcularTotal: function () {
      var total = 0;
      for (var i = 0; i < this.itens.length; i++) {
        total += this.itens[i].preco;
      }
      return total;
    }
  };
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
  
