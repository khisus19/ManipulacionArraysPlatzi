const letters = ['a', 'b', 'c'];

// for (let i = 0; i < letters.length; i++) {
//     const element = letters[i];
//     newArr.push(element + '++');
// }

// const newArr = letters.map(letter => letter + '++');
// const newArr2 = letters.forEach(item => console.log('forEach: ' + item + '++'));

// console.log(letters);
// console.log(newArr);
// console.log(newArr2)

let arr1 = [1, 2, 3, 4];

arr1.push(...arr1.map((element) => {
    return element * element;
}))
console.log(arr1);

let arr2 = [1, 2, 3, 4];
arr2.forEach((element, index) => {
    arr2[index] = element * element;
})
console.log(arr1);

// Function that return every element multiply by 2
function solution(array) {
    return array.map((element) => {
        return element * 2;
    })
}

console.log(solution([2, 4, 5, 6]))