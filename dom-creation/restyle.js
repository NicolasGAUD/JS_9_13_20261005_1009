/*
const box = document.querySelector(".box");

box.style.backgroundColor = "gold";   // background-color
box.style.height = "300px";
box.style.width = "400px"          // font-size
box.style.textAlign = "center";

const titre = document.querySelector(".title");

titre.style.color = "lightblues";
titre.style.fontsize = "60px";
titre.style.textAlign = "center";
*/
/*
box.classList.add("is-active");      // ajoute la classe
box.classList.remove("is-active");   // la retire
box.classList.toggle("is-active");   // l'ajoute si elle est absente, la retire sinon
*/
const style = document.createElement("style");
style.textContent = `
    .box-highlight{
        background-color : yellow;
        heigth : 300px;
        width : 400px;
    }
    .title-highlight{
        color : lightblue;
        text-align : center;
        font-size : 60px;
    }`;


document.head.appendChild(style);


const boxClass = document.querySelector(".box");
boxClass.classList.add("box-highlight");
const titleClass = document.querySelector(".title");
titleClass.classList.add("title-highlight");

