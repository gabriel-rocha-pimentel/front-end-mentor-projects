let mobileMenuOpen = false; // Variável para rastrear se o menu móvel está aberto

// Função para abrir ou fechar o menu móvel
function toggleMobileMenu() {
    if (mobileMenuOpen) {
        // Se o menu estiver aberto, remova o elemento
        const menuDiv = document.querySelector('.menu_mobile');
        if (menuDiv) {
            menuDiv.remove();
        }
    } else {
        // Se o menu estiver fechado, crie o elemento
        const menuDiv = document.createElement("div");
        menuDiv.innerHTML = "<a href='#'>Features</a>";
        menuDiv.innerHTML += "<a href='#'>Pricing</a>";
        menuDiv.innerHTML += "<a href='#'>Resources</a>";
        menuDiv.innerHTML += "<hr>";
        menuDiv.innerHTML += "<button class='btnMobile btnMobile-login'>Login</button>";
        menuDiv.innerHTML += "<button class='btnMobile btnMobile-signup'>Sign Up</button>";
        menuDiv.classList.add("menu_mobile");
        document.body.appendChild(menuDiv);
    }

    // Alterne o estado do menu móvel
    mobileMenuOpen = !mobileMenuOpen;
}

// Fechar o menu quando clicar fora dele
document.addEventListener('click', function (event) {
    const menuDiv = document.querySelector('.menu_mobile');
    if (menuDiv && !menuDiv.contains(event.target) && event.target !== document.querySelector('.img_menu')) {
        menuDiv.remove();
        mobileMenuOpen = false;
    }
});
