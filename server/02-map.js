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
// console.log(arr1);

let arr2 = [1, 2, 3, 4];
arr2.forEach((element, index) => {
    arr2[index] = element * element;
})
// console.log(arr1);

// Function that return every element multiply by 2
function solution(array) {
    console.log(array.map((element) => element * 2))
}

solution([2, 4, 5, 6])

// ---- OTRO EJEMPLO ---- ARRAY DE OBJETOS
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
  ];

/* function names(array) {
    return array.map((element) => {
        element.tax = .19;
        return element;
    })
} */
// CUIDADO de esta forma mutamos el objeto original
// const result = names(orders);
// console.log(result);
// console.log(orders);

function names2(array) {
    return array.map((element) => {
        return {
            ...element,
            tax: .19,
        }; // De esta forma nos aseguramos de no modificar el objeto original
    });
}

const result2 = names2(orders);
console.log(result2);
console.log(orders);