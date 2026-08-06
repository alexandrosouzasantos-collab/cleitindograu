const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {

    mensagem.innerHTML =
        "🏍️ As motos unem velocidade, liberdade e aventura!";

    mensagem.style.color = "#d60000";
    mensagem.style.fontWeight = "bold";

});