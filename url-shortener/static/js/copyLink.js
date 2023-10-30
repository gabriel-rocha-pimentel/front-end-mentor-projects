document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".btnCopy");

    copyButtons.forEach((button) => {
        button.addEventListener("click", async (event) => {
            const linkId = event.target.getAttribute("data-id");
            const urlToCopy = event.target.previousElementSibling.innerText;

            // Copie o link para a área de transferência
            navigator.clipboard.writeText(urlToCopy).then(() => {
                console.log("Link copiado para a área de transferência: " + urlToCopy);
            });

            // Faça uma solicitação AJAX para remover o link do banco de dados
            const response = await fetch(`/delete-link/${linkId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                // Adicione a classe "clicked" ao botão
                event.target.classList.add("clicked");
                // Altere o texto do botão para "Copiado"
                event.target.textContent = "Copied!";

                // Remova o elemento da página após 5 segundos
                setTimeout(() => {
                    event.target.parentElement.parentElement.remove();
                }, 5000);
            } else {
                // Lidar com erros, por exemplo, exibindo uma mensagem de erro ao usuário
                console.error("Erro ao excluir o link do banco de dados.");
            }
        });
    });
});
