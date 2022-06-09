// .FLAT() METHOD

const matrix = [
    [1, 2, 3],
    [4, 5, 6, [10, 11]],
    [7, 8, 9]
];

// flat with for by only two levels deep
const newArray = [];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        newArray.push(matrix[i][j])
    }
}
console.log(newArray);

// .flat() method
let newArray1 = matrix.flat(2);
console.log(newArray1);
