// 1. On sélectionne le bouton et le contenu du menu
const dropBtn = document.querySelector(".dropdown-btn");
const dropContent = document.querySelector(".dropdown-content");

// 2. On écoute le clic sur le bouton pour afficher/masquer le menu
dropBtn.addEventListener("click", () => {
    dropContent.classList.toggle("visible");
});
