const imgCat = document.createElement("img");
imgCat.src="https://placecats.com/300/202";
imgCat.alt="un chat noir";

const secondCard = document.querySelector(".second-card");

secondCard.appendChild(imgCat);

const card = document.createElement("div");
card.className = "third-card";
const title = document.createElement("h2");
title.className = "card-title";
title.textContent = "troisiéme chats"
card.appendChild(title);
document.body.appendChild(card)

const imgCat1 = document.createElement("img");
imgCat1.src="https://placecats.com/300/201";
imgCat1.alt="chat";

const baliseCat1 = document.querySelector(".third-card");
baliseCat1.appendChild(imgCat1);