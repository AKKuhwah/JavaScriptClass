//1
// function inchToCent(inch) {
//     console.log(inch*2.54)
// }

// inchToCent(15)

//2
//function oddEvenPosNeg(num) {
//     if (num % 2 == 0) {
//         console.log("Even")
//     }
//     else {
//         console.log("Odd")
//     }

//     if (num >= 0) {
//         console.log("Positive")
//     }
//     else {
//         console.log("Negative")
//     }
// }

// oddEvenPosNeg(-3);


//3

// function ticketPrice(age){
//     if (age < 12){
//         console.log("$5")
//     }
//     else if(age < 18){
//         console.log("$10")
//     }
//     else if(age < 60){
//         console.log("$20")
//     } 
//     else{
//         console.log("$15")
//     }
// }

// ticketPrice(8);
// ticketPrice(15);
// ticketPrice(18);
// ticketPrice(90);


//4
// function bmi(pound, inches) {
//     index = (pound/(inches * inches)) * 703
//     console.log(index)
//     if (18.5 <= index && index <= 24.9) {
//         console.log("Healthy Weight")
//     } else if (25 <= index && index <= 29.9){
//         console.log("Overweight")
//     } else if (index >= 30) {
//         console.log("Obese")
//     }
// }

// bmi(170, 64);

//5
// function sortedNumber(x, y, z) {
//     let nums = [x, y, z];
//     nums.sort((a,b) => b - a);
//     console.log(nums)
// }

// sortedNumber(2, 3, 4)


//6

// function totalArray (x, y) {
//     let num1 = 0;
//     let num2 = 0;
//     for(let i = 0; i < x.length; i++){
//         num1 = x[i] + num1
//     } 
//     for(let i = 0; i < y.length; i++){
//         num2 = y[i] + num2
//     }    
//     console.log(num1 + num2)     
// }
// totalArray([1,2,3], [4,5,6]);


//7
function letterS(word){
    count = 0;
    for (let i = 0; i < word.length; i++){
        if (word[i] == "s" || word[i] == "S"){
            count += 1
            break;
        }
    }
    if (count > 0) {
        console.log("yes")
    }
    else {
        console.log("no")
    }
}
letterS("tsrings");

//8

// function summation(num){
//     let total = 0;
//     for (let i = 1; i <= num; i++){
//         total = i + total
//     }
//     console.log(total)

// }

// summation(4);