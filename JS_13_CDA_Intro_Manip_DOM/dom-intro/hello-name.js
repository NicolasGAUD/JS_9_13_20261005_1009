const firstName = prompt("Ton prénom ?");
const title = document.querySelector("title");
// faille potentielle
// title.innerHTML = `Hello, ${firstName} !`;
title.textContent = `Hello, ${firstName} !`;