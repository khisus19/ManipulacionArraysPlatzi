// Every method

const numbers = [1,30,49,29,10,13, 50];

// Every with a for loop
let result = true;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 50) {
        result = false;
    }
}
console.log(result);

// Every() method
let result2 = numbers.every(item => item <= 50);
console.log("Resultado de every: " + result2);

// With array of objects
const team = [
    {
      name: "Nicolas",
      age: 19,
    },
    {
      name: "Andrea",
      age: 18,
    },
    {
      name: "Zulema",
      age: 20,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

let result3 = team.every(item => item.age > 15);
console.log('¿Son todos los miembros del team mayores de 15?: ' , result3);