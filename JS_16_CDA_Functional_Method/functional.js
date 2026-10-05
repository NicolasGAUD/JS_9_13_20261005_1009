const catalogue = [
    { name: "Tacos", price: 8.5, inStock: true },
    { name: "Poke bowl", price: 11, inStock: false },
    { name: "Tiramisu", price: 5, inStock: true },
];

//const names = catalogue.map((dish) => dish.name);
//console.log(names);
//console.log(catalogue);

// ce que tu écrivais
/*const loopNames = [];
for (let i = 0; i < catalogue.length; i++) {
    loopNames.push(catalogue[i].name);
}*/

//const inStock = catalogue.filter((dish) => dish.inStock);   // le Tacos et le Tiramisu
//const availableNames = inStock.map((dish) => dish.name);    // ["Tacos", "Tiramisu"]

const availableNames = catalogue
    .filter((dish) => dish.inStock)   // 1. garde le Tacos et le Tiramisu
    .map((dish) => dish.name);        // 2. garde leur nom
// ["Tacos", "Tiramisu"]

//const prices = catalogue.map((dish) => dish.price);
const prices = catalogue.map((dish) => dish.name + " coûte " + dish.price + "€");
console.log(prices);
console.log(catalogue);

const unavailableNames = catalogue
    .filter((dish) => !dish.inStock)
    .map((dish) => dish.name);
console.log(unavailableNames);
console.log(catalogue);

const moreThanTwenty = catalogue
    .filter((dish) => dish.price > 20)
    .map((dish) => dish.name);
console.log(moreThanTwenty);
console.log(catalogue);
