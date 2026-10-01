// challenge.js
const cats = [
    { name: "Mimi", picture: "https://placecats.com/200/200" },
    { name: "Billy", picture: "https://placecats.com/200/201" },
    { name: "Tigrou", picture: "https://placecats.com/200/202" },
];
const gallery = document.querySelector(".gallery");
for (const cat of cats) {
    const newCat = document.createElement("img");
    newCat.src = cat.picture;
    newCat.alt = cat.name;
    cat.name === "Billy" ? newCat.className = "card" : newCat.className = "card-star   ";
    gallery.appendChild(newCat);
}