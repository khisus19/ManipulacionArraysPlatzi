// CONCAT METHOD

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

// .concat() with a for loop
const arr3 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i]);
}
console.log('With for loop: ', arr3);

// .concat() method
const arr4 = arr1.concat(arr2);
console.log('With concat(): ', arr4)