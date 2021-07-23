
// Using Object
// let address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// };

// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key])
// }

// showAddress(address);

// Factory Function
// let address = createAddress('a', 'b', 'c');

// console.log(address);

// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// Constructor Function
let address = new Address('a', 'b', 'c');
console.log(address);

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}