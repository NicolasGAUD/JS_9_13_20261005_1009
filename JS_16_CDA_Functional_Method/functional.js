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
//console.log(prices);
//console.log(catalogue);

const unavailableNames = catalogue
    .filter((dish) => !dish.inStock)
    .map((dish) => dish.name);
//console.log(unavailableNames);
//console.log(catalogue);

const moreThanTwenty = catalogue
    .filter((dish) => dish.price > 20)
    .map((dish) => dish.name);
//console.log(moreThanTwenty);
//console.log(catalogue);

//const tomorrow = catalogue;
//tomorrow.push({ name: "Café gourmand", price: 6, inStock: true });
//console.log(tomorrow);
//console.log(catalogue);
// The same

const catalogue2 = [...catalogue,{ name: "Churros", price: 4, inStock: true }];
//console.log(catalogue);
//console.log(catalogue2);
const catalogue3 = catalogue
    .map((dish) => dish.name === "Tiramisu" ? {...dish, price : 4} : dish);
console.log(catalogue);
console.log(catalogue3);

// Premier élément
const [head, ...others] = catalogue;
console.log(head.name + " - " + head.inStock);
console.log(others.name); // undefined

// Le premier élément est sauté, "second" prend la valeur du deuxième
//const [, second] = catalogue;
//console.log(second.name + " - " + second.inStock);
// Résultat : "Poke bowl - false"

// Pour obtenir le deuxième élément ET le reste du tableau
//const [, second, ...rest] = catalogue;
//console.log(second.name); // "Poke bowl"
//console.log(rest);        // Contient uniquement le tableau avec le Tiramisu

//Pour obtenir le troisième élément
// On saute le 1er et le 2e élément
//const [, , third] = catalogue;

//console.log(third.name); // "Tiramisu"

// Accès par index
//const secondItem = catalogue[1];
//console.log(secondItem.name); // "Poke bowl"

function label ({ name, price }) {
    return `${name} : ${price} €`;
}

// Mon erreur
// console.log(label(catalogue.map((dish) => dish.name === "Tiramisu")));

// IA corrected
// map() applique "label" sur chaque élément du tableau
const labels = catalogue.map(label);

console.log(labels);
// Résultat : [ "Tacos : 8.5 €", "Poke bowl : 11 €", "Tiramisu : 5 €" ]

//Si vous vouliez cibler uniquement le Tiramisu
// 1. On trouve l'objet Tiramisu dans le catalogue
//const tiramisuObj = catalogue.find((dish) => dish.name === "Tiramisu");

// 2. On applique votre fonction label dessus
//console.log(label(tiramisuObj));
// Résultat : "Tiramisu : 5 €"

const total = catalogue.reduce((sum, dish) => sum + dish.price, 0);
console.log(total);

const inStockCount = catalogue.reduce(
    (count, dish) => (dish.inStock ? count + 1 : count),
    0
);
console.log(inStockCount);

const inStockTotal = catalogue.reduce(
    (count, dish) => (dish.inStock ? count + dish.price : count),
    0
);
console.log(inStockTotal);

const highestPrice = catalogue.reduce(
    //Warning:(119, 40) The value assigned to 'max' is never used
    //(max, dish) => (dish.price > max ? max = dish.price : max),
    //0
    (max, dish) => (dish.price > max ? dish.price : max),
    0
);
console.log(highestPrice);

// Expected error
/*const expectedError = [].reduce(
    (count, dish) => (dish.inStock ? count + dish.price : count)
);
console.log(expectedError);*/

//const expectedError = [].reduce(
//    ^

//    TypeError: Reduce of empty array with no initial value
//at Array.reduce (<anonymous>)
//    at Object.<anonymous> (D:\WebstormProjects\JS_9_13_20261005_1009\JS_16_CDA_Functional_Method\functional.js:125:26)


const promoCatalogue = catalogue.map((dish) => {
    return { ...dish, price: dish.price * 0.9 };   // un plat neuf
});
console.log(promoCatalogue);
console.log(catalogue);

// Mine
// function addDish (list, dish) {
//     list = catalogue.map((dish) => [
//         ...dish, { name: "Churros", price: 4, inStock: true }]);
// }

//IA Corrected
// 1. Définition de la fonction
function addDish(list, dish) {
    return [...list, dish];
}

// 2. Appel de la fonction avec le nouveau plat
const newCatalogue = addDish(catalogue, { name: "Churros", price: 4, inStock: true });

console.log(catalogue);
console.log(newCatalogue);
