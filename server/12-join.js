// JOIN METHOD

const elements = ['Fire', 'Air', 'Water', 'Earth'];

// Join with a for loop
let result = '';
const separator = '-';
for (let i = 0; i < elements.length; i++) {
    if (i === elements.length - 1){
        result += elements[i];
    } else {
        result += elements[i] + separator;
    }
}
console.log(result);

// .join() method
let result2 = elements.join('--');
console.log(result2);

// .split() method
const title = 'Curso de manipulacion de Arrays';
console.log(title.split(' ', 3));
let url = title.split(' ').join('-').toLowerCase();
console.log(url);
