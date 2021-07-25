
function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
        }
    }
    console.log(color);
    console.log(i);
}

start();

// var => function-scoped (should be avoided)
// ES6 (ES2015): let, const => block-scope