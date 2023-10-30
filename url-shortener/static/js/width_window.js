function detectarTamanhoDaTela() {
    var tamanhoTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Enviar o tamanho da tela para o Flask usando Ajax
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ tamanhoTela: tamanhoTela }));
}

// Chame a função quando a página carregar e redimensionar
window.addEventListener('load', detectarTamanhoDaTela);
window.addEventListener('resize', detectarTamanhoDaTela);
