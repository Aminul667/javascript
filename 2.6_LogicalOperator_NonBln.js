
// TODO: understand the concept
// Falsy (false)
// undefined
// null
// 0
// false
// ..
// NaN

// except them, everything is Truthy

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);