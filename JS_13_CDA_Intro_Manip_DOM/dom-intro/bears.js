// document.querySelector("img").src = "https://placebear.com/200/201";

const bears = document.querySelectorAll("img");
console.log(bears.length);   // 5
console.log(bears[0]);       // la première image

const bearPictures = [
    "https://placebear.com/200/201",
    "https://placebear.com/200/202",
    "https://placebear.com/200/203",
    "https://placebear.com/200/204",
    "https://placebear.com/200/205",
];

for (let i = 0; i < bears.length; i++) {
    bears[i].src = bearPictures[i];
}