const newCat = document.createElement("img");
newCat.src = "https://placecats.com/300/201";
newCat.alt = "Un chat tigré";

const secondCard = document.querySelector(".second-card");
secondCard.appendChild(newCat);   // le chat apparaît, sous « Deuxième chat »

// secondCard.appendChild(newCat);   // dernier enfant de la carte
// secondCard.prepend(newCat);       // premier enfant, avant le titre

const card = document.createElement("div");
const title = document.createElement("h2");
title.textContent = "Troisième chat";
card.appendChild(title);             // le titre dans la carte
document.body.appendChild(card);     // la carte dans la page : tout apparaît