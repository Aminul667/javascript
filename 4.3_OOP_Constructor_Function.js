
// Constructor Function: another way to create an object

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();
console.log(circle.radius)