const cats = [
  { name: "Mimi", picture: "https://placecats.com/200/200" },
  { name: "Billy", picture: "https://placecats.com/200/201" },
  { name: "Tigrou", picture: "https://placecats.com/200/202" },
];

for (const cat of cats) {
  const gallery = document.querySelector(".gallery");
  const title = document.createElement("h2");
  title.textContent = cat.name;
  gallery.appendChild(title);
  const image = document.createElement("img");
  image.src = cat.picture;
  image.alt = cat.name;
  cat.name === "Billy" ? image.className = "card-star" : image.className = "card";
  gallery.appendChild(image);
}
