'use strict';
/*
// declaration, can access before init
function calcAge(birthYear) {
    return 2037 - birthYear
}

// expression, cannot access before init
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
*/


/*
// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`

}

console.log(yearsUntilRetire(1991, 'me'));
*/

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

//     return juice;
// }

// console.log(fruitProcessor(2, 3));

