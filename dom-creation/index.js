const newCat = document.createElement("img");
newCat.src = "https://placecats.com/300/201";
newCat.alt = "Un chat tigré";

const secondCard = document.querySelector(".second-card"); 
secondCard.appendChild(newCat);


const card = document.createElement("div");
const title = document.createElement("h2");
title.textContent = "Troisième chat";
card.appendChild(title);             // le titre dans la carte
document.body.appendChild(card);   

const newCat1 = document.createElement("img");
newCat1.src = "https://placecats.com/300/202";
newCat1.alt="Deux chats";


/*const secondCard1 = document.querySelector(".second-card")*/
newCat1.appendChild(title);
document.body.appendChild(card);