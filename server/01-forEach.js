const letters = ['a', 'b', ' ', 'd'];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log('for: ' + element);
}

letters.forEach(item => console.log("forEach: " + item))

// ->   forEach: a
//      forEach: b
//      forEach:    En este index no afecta que este vacío
//      forEach: d