
const numbers = [3, 4];
console.log(numbers);

numbers.push(5, 6) // adds element at the end
console.log(numbers);

numbers.unshift(1, 2); // adds element at the beginning
console.log(numbers);

numbers.splice(2, 0, 'a', 'b'); // adds at a specific index
console.log(numbers);
