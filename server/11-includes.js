// INCLUDES METHOD
const pets = ['cat', 'dog', 'bird', 'mouse'];

// Includes with for loop
let result = "Not included"
let petToCheck = 'mouse'
for (let i = 0; i < pets.length; i++) {
    if(pets[i] === petToCheck) {
        result = "Included";
        break;
    }
}
console.log(result);

// Check with .includes() method
let result2 = pets.includes(petToCheck);
console.log('Is it included?: ', result2);

// Check if a string includes another string
function solution(words, query){
    return words.filter(name => name.includes(query))
}

let result3 = solution(["ana", "santi", "nico", "anastasia"], "an");
let result4 = solution(["ana", "santi", "nico", "anastasia"], "xyz");

console.log(result3); //-> [ 'ana', 'santi', 'anastasia' ]
console.log(result4); //-> []