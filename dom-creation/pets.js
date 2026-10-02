const imgAll = document.querySelectorAll(".img-dog");

for (let i=0;i<imgAll.length;i++){
    imgAll[i].remove();
}

const imgCats = document.querySelectorAll(".img-cat");
const lastCat = imgCats[imgCats.length-1];

document.body.prepend(lastCat);
