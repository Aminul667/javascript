
const numbers =[1, 2, 3, 4];

console.log('Using Loop')
for (let number of numbers)
    console.log(number);

// or
console.log('Using Function');
numbers.forEach((number, index) => console.log(index, number));