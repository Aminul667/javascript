
// Regular Function
// console.log('Regular Function');

// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
// ];

// const course = courses.findIndex(function(course) {
//     return course.name === 'a';
// });

// console.log(course);

// Arrow Function
console.log('Arrow Function');

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.find(course => course.name === 'a');

console.log(course);