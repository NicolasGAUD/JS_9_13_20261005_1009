const newCat = document.createElement("img");
newCat.src = "https://placecats.com/300/202";
newCat.alt = "Un chat roux";
newCat.className = "card-img";

const secondCard = document.querySelector(".second-card");
secondCard.appendChild(newCat);   // le chat apparaît, sous « Deuxième chat »

const card = document.createElement("div");
const title = document.createElement("h2");
title.textContent = "Troisième chat";
card.className = "third-card";
const newCat3 = document.createElement("img");
newCat3.src = "https://placecats.com/300/203";
newCat3.alt = "Un chat roux";
card.appendChild(title);             // le titre dans la carte
card.appendChild(newCat3);             // le titre dans la carte
document.body.appendChild(card);     // la carte dans la page : tout apparaît

// prepend vs appendChild
