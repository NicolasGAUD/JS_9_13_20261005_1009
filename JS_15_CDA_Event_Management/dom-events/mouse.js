
// const image = document.querySelector(".img-dog");
// image.addEventListener("click", () => {
//     image.src = "https://placedog.net/300/201";
//     image.alt = "Un autre chien";
// });

function changeImage() {
    const image = document.querySelector(".img-dog");
    image.src = "https://placedog.net/300/201";
    image.alt = "Un autre chien";
}
document.querySelector(".img-dog").addEventListener("click", changeImage);


const title = document.querySelector(".title");

title.addEventListener("mouseenter", () => {
    title.style.color = "red";
});

title.addEventListener("mouseleave", () => {
    title.style.color = "black";
});