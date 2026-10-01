// challenge.js
const title = document.querySelector(".shop-title");
title.textContent = "La boutique de Camille";
const firstName = prompt("Ton prénom ?");
const welcome = document.querySelector("#welcome");
welcome.textContent = `Bienvenue, ${firstName} !`;
const price = document.querySelector(".price");
price.textContent = "12 €";
const images = document.querySelectorAll(".product-img");
for (let i = 0; i <= images.length; i++) {
    images[i].src = "https://placecats.com/300/201";
}