const image = document.querySelector(".img-cat");
image.src = "https://placecats.com/300/202";   // l'image change

const paragraph = document.querySelector("p");
paragraph.textContent = "Il s'est réveillé"

// erreur volontaire sur le selecteur
// const image = document.querySelector(".ig-cat");
// image.src = "https://placecats.com/300/202";
// Uncaught TypeError: can't access property "src", image is null
// <anonymous> file:///C:/Users/Nico/WebstormProjects/JS_9_13_20261005_1009/JS_13_CDA_Intro_Manip_DOM/dom-intro/cat-src.js:2

const firstName = prompt("Ton prénom ?");
const title = document.querySelector("title");
title.innerHTML = `Hello, ${firstName} !`;