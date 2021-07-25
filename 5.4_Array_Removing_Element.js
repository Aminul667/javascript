
const numbers = [1, 2, 3, 4, 5, 6, 7];

// From end
const last = numbers.pop();
console.log(numbers);
console.log(last);

// From Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// From Middle
numbers.splice(2, 2); // from index 2, 2 element will be removed
console.log(numbers);