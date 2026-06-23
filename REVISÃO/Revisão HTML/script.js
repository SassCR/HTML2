const botaovalidar = () => {
    const nome = document.getElementById("Nome").value
    const snome = document.getElementById("Sobrenome").value
    const email = document.getElementById("Email").value
    const fone = document.getElementById("Fone").value
    const cpf = document.getElementById("CPF").value

    const nome2 = nome.charAt(0).toUpperCase() + nome.slice(1)
    const snome2 = snome.charAt(0).toUpperCase() + snome.slice(1)
    const completo = nome2 + " " + snome2

    const vEmail = email.includes("@") + email.includes(".com")
    if(!vEmail){
        return alert("Digite um email valido!")
    }
    const fone1 = fone.slice(0,2)
    const fone2 = fone.slice(2,7)
    const fone3 = fone.slice(7,11)
    const fonecompleto = "(" + fone1 + ")" + fone2 + "-" + fone3
    
    document.getElementById("mostrar").innerHTML= `${completo} ${email} ${fonecompleto}`

}