// FIND METHOD
const numbers = [5, 12, 8, 30, 40, 33];

// Find with for loop
let result = undefined;
let numberToFind = 31;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === numberToFind) {
        result = numbers[i]
    } else {
        result = "Not found"
    }
}
console.log(result);

// Find with  .find() method
let result2 = numbers.find(item => item === numberToFind);
console.log(result2);

// Find a property in an object
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  let result3 = products.find(item => item.id === '🍔');
  let result4 = products.findIndex(item => item.id === '🍔');
  console.log('find: ', result3);
  console.log('findIndex: ', result4);