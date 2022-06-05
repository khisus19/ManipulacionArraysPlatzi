// Array.filter() returns an array with the elements that pass the test
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'animation', 'recursion', 'union', 'face'];

// Filter with a for loop
const newArray = [];
for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length > 6) {
        newArray.push(item);
    }
}
// console.log(newArray);

// Same with filter() method
const result1 = words.filter((word) => word.length > 6);
console.log('Strings with more than six char: ' + result1);

// Filter using regex
const result = words.filter(word => word.match(/on$|e$/));
console.log('Finish in "on" or "e": ' + result);

// Using Objects
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
];
const result2 = orders.filter((order) => {
    if (order.delivered) {
        return order.customerName;
    }
})
console.log('result2: ', result2);


// Function that checks if a string ends with the given target
function confirmEnding(str, target) {
    let re = target + "$";
    let regex = new RegExp(re, 'i')
    return regex.test(str)
}
console.log(confirmEnding('animation', "n"));
