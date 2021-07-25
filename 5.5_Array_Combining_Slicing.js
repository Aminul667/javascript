
// Method 1
console.log('Method 1');

const first = [1, 2, 3];
const last = [4, 5, 6];

const combined = first.concat(last);
console.log(combined);

const slice = combined.slice(1, 4);
console.log(slice);

// Method 2: Spread Operator
console.log('Method 2');

const spread = [...first, 'a', ...last, 'b'];
console.log(spread);

const copy = [...combined];
console.log(copy);