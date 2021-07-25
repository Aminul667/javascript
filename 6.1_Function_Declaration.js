
// Function Declaration (Hoisting)
walk() // we can call the function before function declaration

function walk() {
    console.log('walk');
}

// Anonymous Function Expression
let run = function() {
    console.log('run');
};

let move = run;
run();      // have to call them after function expression
move();