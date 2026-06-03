const dadosUsuarioJSON = `{
    "nome": "Alice",
    "idade": 23,
    "cidade": "Nova Velha"
}`;

console.log("Tipo antes do parse:", typeof dadosUsuarioJSON);//Saida string

/*JSON.parse(): STring JSON para objeto Javascript */
const usuarioObjeto = JSON.parse(dadosUsuarioJSON);

console.log("Tipo depois do parse:", typeof usuarioObjeto);//Saida objeto
console.log("Nome do usuario:", usuarioObjeto.nome);


//ex3

//Modificando o objeto javascript
usuarioObjeto.idade = 31
usuarioObjeto.profissao = "Desenvolvedora";


//JSON.stringify(): OBjeto javascript para string Json
const novoDadosUsuariosJSON = JSON.stringify(usuarioObjeto, null, 2)//Null,2" para formatar bonito.

console.log("\nNovo JSON gerado:");
console.log(novoDadosUsuariosJSON);

console.log("Tipo do novo JSON:", typeof novoDadosUsuariosJSON);//Saida string



