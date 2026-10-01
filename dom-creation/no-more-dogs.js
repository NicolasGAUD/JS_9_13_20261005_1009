const dogs = document.querySelectorAll(".img-dog");
const cats = document.querySelectorAll(".img-cat");

for (let i = 0; i < dogs.length; i++) {
    dogs[i].remove();
}

console.log(cats.length);

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        let srcTmp = cats[0].src;
        cats[0].src = cats[i].src;
        cats[i].src = srcTmp;
    }
}


