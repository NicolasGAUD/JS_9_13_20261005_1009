const catalogue = [
    { name: "Tacos", price: 8.5, inStock: true },
    { name: "Poke bowl", price: 11, inStock: false },
    { name: "Tiramisu", price: 5, inStock: true },
];

function doConsoleBreak(test, text){
    console.log("\nTest #" + test + " - "  + text + " ========================================================================\n");
}

doConsoleBreak(1, "map()");

const names = catalogue.map((dish) => dish.name);
console.log("names : " + names);
console.log("catalogue : " + catalogue);

// ce que tu écrivais
/*const loopNames = [];
for (let i = 0; i < catalogue.length; i++) {
    loopNames.push(catalogue[i].name);
}*/

doConsoleBreak(2, "filter() + map()");

const inStock = catalogue.filter((dish) => dish.inStock);   // le Tacos et le Tiramisu
console.log("inStock : " + inStock);
const availableNames = inStock.map((dish) => dish.name);    // ["Tacos", "Tiramisu"]
console.log("availableNames : " + availableNames);

const availableNamesRefactored = catalogue
    .filter((dish) => dish.inStock)   // 1. garde le Tacos et le Tiramisu
    .map((dish) => dish.name);        // 2. garde leur nom
// ["Tacos", "Tiramisu"]
console.log("availableNamesRefactored : " + availableNamesRefactored);

doConsoleBreak(3, "destructing");

const tacos = catalogue[0];
const { name, price } = tacos;
console.log(`${name} coûte ${price} €`);   // Tacos coûte 8.5 €

const [first, second, third, fourth] = catalogue;
console.log("first : " + first);
console.log("second : " + second);
console.log("third : " + third);
console.log("fourth : " + fourth); // undefined

const [firstElt, ...theRest] = catalogue;
console.log("firstElt : " + firstElt);
console.log("theRest : " + theRest);
//console.log(theRest[theRest.length - 1]);
// firstElt   : le Tacos
// theRest : un nouveau tableau, avec le Poke bowl et le Tiramisu

function describeLong(dish) {
    const { name, price } = dish;
    return `${name} : ${price} €`;
}
function describe({ name, price }) {   // le destructuring, directement dans les parenthèses
    return `${name} : ${price} €`;
}
console.log("describeLong : " + describeLong(tacos));
console.log("describe : " + describe(tacos));   // "Tacos : 8.5 €"

doConsoleBreak(4, "map() & format manually");

const prices = catalogue.map((dish) => dish.name + " coûte " + dish.price + "€");
console.log("prices : " + prices);
console.log("catalogue : " + catalogue);

doConsoleBreak(5, "filter() & map()");

const unavailableNames = catalogue
    .filter((dish) => !dish.inStock)
    .map((dish) => dish.name);
console.log("unavailableNames : " + unavailableNames);
console.log("catalogue : " + catalogue);

const moreThanTwenty = catalogue
    .filter((dish) => dish.price > 20)
    .map((dish) => dish.name);
console.log("moreThanTwenty : " + moreThanTwenty);
console.log("catalogue : " + catalogue);

doConsoleBreak(6, "reference copying");

const tomorrow = catalogue;
tomorrow.push({ name: "Café gourmand", price: 6, inStock: true });
console.log("tomorrow : ");
console.log(tomorrow);
console.log("catalogue : ");
console.log(catalogue);
// The same

// need to rollback catalogue to its initial state
catalogue.pop();

doConsoleBreak(7.1, "spread, map, destructing - Ex.1");

const catalogue2 = [...catalogue,{ name: "Churros", price: 4, inStock: true }];
console.log("catalogue : " + catalogue.length);
console.log(catalogue);
console.log("catalogue2 : " + catalogue2.length);
console.log(catalogue2);

doConsoleBreak(7.2, "spread, map, destructing - Ex.2");

const catalogue3 = catalogue
    .map((dish) => dish.name === "Tiramisu" ? {...dish, price : 4} : dish);
console.log("catalogue : ");
console.log(catalogue);
console.log("catalogue3 : ");
console.log(catalogue3);
console.log("catalogue[2].price : " + catalogue[2].price);

doConsoleBreak(7.3, "spread, map, destructing - Ex.3");

// Premier élément
const [head, ...others] = catalogue;
console.log("name & inStock : " + head.name + " - " + head.inStock);
console.log("others.name : " + others.name); // undefined

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

doConsoleBreak(7.4, "spread, map, destructing - Ex.4");

function label ({ name, price }) {
    return `${name} : ${price} €`;
}

// Mon erreur
// console.log(label(catalogue.map((dish) => dish.name === "Tiramisu")));

// IA corrected
// map() applique "label" sur chaque élément du tableau
// please consider there is no parenthesis
const labels = catalogue.map(label);

console.log("labels : " + labels);
console.log(typeof(labels));
// Résultat : [ "Tacos : 8.5 €", "Poke bowl : 11 €", "Tiramisu : 5 €" ]

//Si vous vouliez cibler uniquement le Tiramisu
// 1. On trouve l'objet Tiramisu dans le catalogue
//const tiramisuObj = catalogue.find((dish) => dish.name === "Tiramisu");

// 2. On applique votre fonction label dessus
//console.log(label(tiramisuObj));
// Résultat : "Tiramisu : 5 €"

doConsoleBreak(8, "reduce()");

// Le 0 est la valeur de départ
const total = catalogue.reduce((sum, dish) => sum + dish.price, 0);
console.log("total : " + total);

const inStockCount = catalogue.reduce(
    (count, dish) => (dish.inStock ? count + 1 : count),
    0
);
console.log("inStockCount : " + inStockCount);

doConsoleBreak(8.1, "reduce() - Ex.1");

const inStockTotal = catalogue.reduce(
    (count, dish) => (dish.inStock ? count + dish.price : count),
    0
);
console.log("inStockTotal : " + inStockTotal);

doConsoleBreak(8.2, "reduce() - Ex.2");

const highestPrice = catalogue.reduce(
    //Warning:(119, 40) The value assigned to 'max' is never used
    //(max, dish) => (dish.price > max ? max = dish.price : max),
    //0
    (max, dish) => (dish.price > max ? dish.price : max),
    0
);
console.log("highestPrice : " + highestPrice);

doConsoleBreak(8.3, "reduce() - Ex.3");

// In comment, if no, the rest will not be executed ....

// Expected error
// const expectedError = [].reduce(
//     (count, dish) => (dish.inStock ? count + dish.price : count)
// );
// console.log("expectedError : " + expectedError);

//const expectedError = [].reduce(
//    ^

//    TypeError: Reduce of empty array with no initial value
//at Array.reduce (<anonymous>)
//    at Object.<anonymous> (D:\WebstormProjects\JS_9_13_20261005_1009\JS_16_CDA_Functional_Method\functional.js:125:26)

doConsoleBreak(9.1, "Fonction pure et effet de bord #1");

// needed to see side-effect but changes the catalogue ...

// const promoCatalogue1 = catalogue.map((dish) => {
//     dish.price = dish.price * 0.9;
//     return dish;
// });
// console.log("promoCatalogue1[0].price : " + promoCatalogue1[0].price);
// console.log("catalogue[0].price : " + catalogue[0].price);

const promoCatalogue2 = catalogue.map((dish) => {
    return { ...dish, price: dish.price * 0.9 };   // un plat neuf
});
console.log("promoCatalogue2 : ");
console.log(promoCatalogue2);
console.log("catalogue : ");
console.log(catalogue);

doConsoleBreak(9.2, "Fonction pure et effet de bord #2");

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
