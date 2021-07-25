
// Primitives Type
console.log('Primitive Type');

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(5)) // returns -1 if not found

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1))

// Reference Type
console.log('Reference Type');

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(course);