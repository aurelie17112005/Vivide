const hamburgerToggler = document.querySelector(".hamburger")
const navlinksContainer = document.querySelector
(".navlinks-container"); 

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute ("aria-expanded") === "true" ? "false" : "true"; // si tu cliques sur l'écran ça va expand quelque chose sinon ça ne va rien expand du tout.
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)
    navlinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)

