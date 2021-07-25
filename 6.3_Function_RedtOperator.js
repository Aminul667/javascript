
// ...price is a rest operator in a function
// rest parameter must be the last parameter in the function
function sum(discount, ...price) {
    const total = price.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 2, 3, 4, 5, 10));