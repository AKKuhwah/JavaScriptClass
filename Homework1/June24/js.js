//1
// cardsArray = ["king", "queen", "jack", "ace", "nine", "d'three", "three"]
// cardsArray.copyWithin(0, 6);
// cardsArray.pop();
// cardsArray.splice(cardsArray.length, 0, "ten", "eight", "seven", "six","five","four","two");



// for (let i = 0; i < cardsArray.length; i++){
//     cardsArray.splice(i, 1, cardsArray[i].toUpperCase())
// }

// console.log(cardsArray);


//2
// const num = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]

// let new_num = num.filter(num => num>0)

// let result = new_num.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 0);

// console.log(result);


//3
// function rollDice(){
//     num1 = Math.ceil(Math.random()*6);
//     num2 = Math.ceil(Math.random()*6);
//     return num1 + num2;
// };

// let x = rollDice();
// let y = rollDice();
// let z = rollDice();

// myArray = [x, y, z]

// if (x >= y && x >= z){
//     console.log("x")
// }
// else if (y >= x && y >= z){
//     console.log("y")
// }
// else {
//     console.log("z")
// }


//4

const programWords = ["web","code","function","method", "http", "html", "function", "java","rust"]

programWords.fill("python", 2, 5);
console.log(programWords);
index_position = programWords.lastIndexOf("function", programWords.length-1);
console.log(index_position);
look_up = programWords.includes("java" && "css", -1);
console.log(look_up);

