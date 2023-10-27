// Dans header.js
document.addEventListener("DOMContentLoaded", function() {
    var headerElement = document.getElementById("header");
    var headerContent = `
        <header class="site-header">
        <nav>
        <a href="#" class="nav-icon" aria-label="visit homepage" aria-current="page"> <img src="./images/logo_vivide.png"
                alt="vivide icon"></a>

        <div class="main-navlinks">

            <div class="navlinks-container">
                <a href="Projetaccueil.html" aria-current="page">Home</a>
                <a href="boutique.html"> Shop </a>
                <a href="panier.html"> Panier </a>
                <a href="#"> About </a>
                <div class="search">
                    <input type="search" placeholder="Search" style="color: white">
                    <a href="#"></a>
                </div>
            </div>
        </div>
        <button class="hamburger" type="button" aria-label="Toggle navigation" aria-expanded=false>
                <span></span>
                <span></span>
                <span></span>
        </button>
        <div class="menu-items right">
            <div class="cart">
                <a href="./panier.html"><img src="./images/path-to-cart-icon.png" alt="Cart" class="cart-img"></a>
                <span class="cart-items-count">2</span>
            </div>
            <a href="" class="login" sytle="text-decoration: none;">Login</a>
        </div>
        </nav>
    </header>

    `;
    headerElement.innerHTML = headerContent;
});

document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    var navLinks = document.querySelector(".navlinks-container");

    // Ceci est une fonction de basculement pour montrer/cacher le menu
    function toggleMenu() {
        navLinks.classList.toggle("open");
        // Vous pouvez également vouloir changer l'attribut 'aria-expanded' ici pour la convivialité d'accessibilité.
        var expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
    }

    // Ceci ajoute un écouteur d'événements pour le clic sur le bouton hamburger.
    hamburger.addEventListener("click", toggleMenu);
});

