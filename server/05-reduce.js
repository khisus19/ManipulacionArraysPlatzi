// Array.prototype.reduce()
const totals = [1, 2, 3, 4];
const letters = ['a', 'b', 'c', 'd']

// Reduce with a for loop
let result = 0;
for (let i = 0; i < totals.length; i++) {
    result += totals[i];
}
console.log("With a normal for: " + result);

// Same with reduce()
const result1 = totals.reduce((sum, item) => sum + item, 0);
console.log("With reduce: " + result1)
console.log(letters.reduce((prev, curr) => prev + curr, "Z"))

// Factorial with reduce
function factorial(numbers) {
    console.log(numbers.reduce((prev, curr) => prev * curr, 1));
}; 

factorial([1, 2, 3]);
factorial([2, 4, 8]);

// Counter of values in an object
const items = [1, 3, 10, 3, 8, 2, 10, 2, 9, 3, 2, 4];

const quantity = items.reduce((obj, item) => {
  if (item < 6) {
    obj["1-5"]++;
  } else if (item < 9){
    obj["6-8"]++;
  } else if (item < 11) {
    obj["9-10"]++
  }
  return obj;
}, {
  "1-5": 0,
  "6-8": 0,
  "9-10": 0,
});
console.log(quantity);