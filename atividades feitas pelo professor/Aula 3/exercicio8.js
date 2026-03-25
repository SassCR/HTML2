const pessoa = {
  nome: "Ana",
  saudacao: function() {
    return "Olá, meu nome é " + this.nome;
  }
};

console.log(pessoa.saudacao());