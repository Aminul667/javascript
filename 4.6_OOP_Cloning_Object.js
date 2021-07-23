
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Method 1
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// Method 2, it acts like an inheritance
// const another = Object.assign({}, circle);

// Method 3 
const another = { ...circle};