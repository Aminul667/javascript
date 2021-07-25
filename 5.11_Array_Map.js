
const numbers = [1, 2, 3];

const item = numbers.map(n => '<li>'+n+'</li>');

const html = '<ul>'+item.join('')+'</ul>';

console.log(html);