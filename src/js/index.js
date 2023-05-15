// Pegar no JS  o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // Verificar se a classe do modo-escuro está ativa
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
       
        // Trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {

        // Trocar a imagem do botão de alterar tema para lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }
});

