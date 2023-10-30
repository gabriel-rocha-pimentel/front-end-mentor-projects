document.addEventListener("DOMContentLoaded", function () {
    var myForm = document.getElementById("myForm");
    var shortLinkInput = document.getElementById("short_link");
    var errorMessage = document.getElementById("error-message");
    var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    myForm.addEventListener("submit", function (event) {
        if (!shortLinkInput.value.trim()) {
            errorMessage.textContent = "Please add a link.";
            errorMessage.style.display = "block";
            shortLinkInput.style.outline = "1px solid red";
            event.preventDefault(); // Impede o envio do formulário
        } else if (!shortLinkInput.value.match(urlPattern)) {
            errorMessage.textContent = "Por favor, insira uma URL válida.";
            errorMessage.style.display = "block";
            shortLinkInput.style.outline = "1px solid red";
            event.preventDefault(); // Impede o envio do formulário
        } else {
            errorMessage.textContent = ""; // Limpa a mensagem de erro
            errorMessage.style.display = "none"; // Oculta a mensagem de erro
            shortLinkInput.style.outline = ""; // Remove o contorno vermelho
        }
    });
});
