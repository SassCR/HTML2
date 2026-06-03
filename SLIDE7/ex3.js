const meuCarroJSON = `{
 "marca": "Ford",
 "modelo": "Fusion",
 "ano": 2018,
 "cor": "Preto"
}`;

/*JSON.parse(): Converte uma string JSON em um objeto JavaScript.
 • JSON.stringify(): Converte um objeto JavaScript em uma string JSON. */
console.log("Antes de mudar pra JS" + meuCarroJSON); //mudei pra javascript

 const meuCarroJS = JSON.parse(meuCarroJSON)

 meuCarroJS.cor = "Prata"//adicionei esse
 meuCarroJS.quilometragem = 500000//E esse também usando js
 
 console.log("Adicionando coisas no JS" + meuCarroJS);

 const meuCarrOJSON2 = JSON.stringify(meuCarroJS, null, 2)//aqui estou mudando ele de novo para JSON e deixando a formatação 
 // bonita

 console.log("Minha lista atualizada" + meuCarrOJSON2);//aqui mostrei o resultado :D
 
 

 
