const catalogue = [
    { id: 1, name: "Tacos", price: 8.5, inStock: true },
    { id: 2, name: "Poke bowl", price: 11, inStock: false },
    { id: 3, name: "Tiramisu", price: 5, inStock: true },
];

// --- FONCTIONS CORRIGÉES ---

// function addToCart(cart, dish) {
//     cart.push(dish);
//     return cart;
// }

function addToCart(cart, dish) {
    // On clone le panier pour ne pas modifier l'original (immuabilité)
    return [...cart, dish];
}

// function applyDiscount(cart, percent) {
//     return cart.map((dish) => {
//         dish.price = dish.price * (1 - percent / 100);
//         return dish;
//     });
// }

function applyDiscount(cart, percent) {
    // On clone le panier ET chaque objet plat pour ne pas modifier le catalogue d'origine
    return cart.map((dish) => {
        return { ...dish, price: dish.price * (1 - percent / 100) };
    });
}

// function cartTotal(cart) {
//     return cart.reduce((sum, dish) => sum + dish.price);
// }

function cartTotal(cart) {
    // On initialise le reduce à 0 pour gérer les paniers vides et sommer correctement les prix
    return cart.reduce((sum, dish) => sum + dish.price, 0);
}

// --- CODE DE TEST (NON MODIFIÉ) ---
const cart = addToCart([], catalogue[0]);
const biggerCart = addToCart(cart, catalogue[2]);
const discountedCart = applyDiscount(biggerCart, 20);

console.log(cartTotal(discountedCart));   // 10.8
console.log(cartTotal([]));               // 0
console.log(cart.length);                 // 1
console.log(cart[0].price);              // 8.5
console.log(catalogue[0].price);          // 8.5
