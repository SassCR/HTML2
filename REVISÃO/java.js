const verificar = () => {
    let nome = document.getElementById("Nome").value
    let email = document.getElementById("Email").value
    let idade = Number(document.getElementById("idade").value)
    let senha = document.getElementById("Senha").value


    const verificarVazio = () => {
        if (!nome || !email || !senha) {
            return alert("Preencha todos os campos!")
        } else if (!idade) {
            if (isNaN(idade)) {
                return alert("Digite apenas números!")
            }
            return alert("Preencha todos os campos!")
        }

    }
    const validandoNome = () => {
        nome = nome.trim()
        let verificarNome = nome.search(/[0-9+]/g)
        if (verificarNome != -1) {
            return alert(`Digite apenas letras no nome!${nome}`)
        }
    }
    const validandoEmail = () => {
        email = email.trim()
        let verificarEmail = email.search("@")
        if (verificarEmail === -1) {
            return alert("Não existe @ no email!")
        } else if (verificarEmail === 0) {
            return alert("É necessário ter algo escrito antes do @")
        } else if (email.length - 1 === verificarEmail) {
            return alert("É necessário escrever algo no email!")
        }

    }
    const validandoidade = () => {
        idade = String(idade)



        let dia = idade.slice(0, 2)
        let mes = idade.slice(2, 4)
        let ano = idade.slice(4)

        let dataReal = new Date(ano, mes - 1, dia)

        if (dataReal.getDate() != dia || dataReal.getMonth() != mes - 1 || dataReal.getFullYear() != ano) {
            return alert("Data invalida!")
        }
        idade = `${dia}/${mes}/${ano}`
    }

    const validarSenha = () => {
        senha = senha.trim()
        if (senha.length < 6) {
            return alert("Sua senha precisa ter no minimo 6 digitos!")
        }
        let temN = senha.search(/[0-9]/g)
        if (temN === -1) {
            return alert("a senha precisa ter pelo menos 1 número!")
        }
        let especial = senha.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)
        if (especial === -1) {
            return alert("a senha precisa ter pelo menos 1 digito especial!")
        }
    }
    validarSenha()
    verificarVazio()
    verificarNome()
    verificarEmail()
    validandoidade()

    document.getElementById("Resultado").innerHTML = `Nome:${nome}<br>Email:${email}<br>Data de Nascimento:${idade}`
}




const alterarfonte = () => {
    const elemento = document.getElementById("alt")
    //mudando o tamanho da fonte
    const tamanho = document.getElementById("tamanho").value
    elemento.style.fontSize = tamanho + "px";
    tamanho.addEventListener("change", alterarfonte)
    //mudando a cor
    const cor = document.getElementById("cor").value
    elemento.style.color = cor

}



const modoEscuro = () => {
    let botao = document.getElementById("tema")
    if (botao.checked) {
        document.body.style.backgroundColor = "white"
    } else {
        document.body.style.backgroundColor = "black"
    }
}
