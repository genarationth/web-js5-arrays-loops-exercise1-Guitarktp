//Exercise 1.1
//- What is the length of the array?
// Ans 7
//- Write a function called myAlphabetLength which console.logs the length of the array.
// let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// function myAlphabetLength() {
//     console.log(myAlphabet.length);
// }

// myAlphabetLength();

//Exercise 1.2
let planets = ['pluto', 'earth', 'saturn', 'neptune', 'jupiter'];
console.log(planets);



planets.forEach(function(planet, index) {
    console.log(planet, index);
});


planets.forEach(function(planet, index) {
    console.log(`Index: ${index}, Planet: ${planet}`);
});


//Exercise 1.3
// let myArr = [ 1, 2, 'One', true];
// myArr.forEach(function(type) {
//     console.log(type);
// });



