
// var total = 0;
// total = total + 2;
// total += 3;
// total++;
// console.log(total)

// let temperature = 32;
// if (temperature < 40){
//     console.log("it's cold bro")
// }
// temperature = 42;
// if (temperature < 40){
//     console.log("kinda chilling homie")
// }

// temperature = 40;
// if (temperature <= 40){
//     console.log("kinda chilling really homie")
// }

// function checktemperature(temptoday){
//     if (temptoday <= 40){
//         console.log("kinda super chilling homie")
//     }
// }

// checktemperature(40);
// checktemperature(32);
// checktemperature(55);


// function checkCreditHealth(cardBalance, numOfLoans){
//     if (cardBalance > 5000 && numOfLoans > 7){
//             console.log("we're broke")
//     }
// }

// checkCreditHealth(6000, 8);
// checkCreditHealth(5000, 8);
// checkCreditHealth(6000, 7);

// function checkCreditHealth2(cardBalance, numOfLoans){
//     if (cardBalance > 5000 && numOfLoans > 7){
//         console.log("we're broke")
//     }
//     else {
//         console.log("I'm not broke")
//     }
// }

// checkCreditHealth2(6000, 8);
// checkCreditHealth2(5000, 8);
// checkCreditHealth2(6000, 7);

// function pickHairColor(mood){
//     if (mood == "happy"){
//         console.log("green")
//     }
//     else if (mood == "sad"){
//         console.log("blue")
//     }
// }

// pickHairColor("happy");
// pickHairColor("sad");
// pickHairColor("angry");

// function checkGrade(score){
//     if (score >= 90){
//         console.log("I got a A")
//     }
//     else if(score >= 80){
//         console.log("I got a B")
//     }
//     else if(score >= 70){
//         console.log("I got a C")
//     } 
//     else if(score >= 60){
//         console.log("I got a D")
//     }
//     else{
//         console.log("I got a F")
//     }

// }

// // checkGrade(95);
// // checkGrade(85);
// // checkGrade(75);
// // checkGrade(65);
// // checkGrade(50);

// function getTodayClass(dayOfWeek){
//     switch(dayOfWeek) {
//         case "Monday":
//             console.log("Today is science class");
//             break;
//         case "Tuesday":
//             console.log("Today is algebra");
//             break;
//         case "Wednesday":
//             console.log("Today is science lab");
//             break;
//         case "Thursday":
//             console.log("Today is history");
//             break;
//         case "Friday":
//             console.log("Today is study day");
//             break;
//         // case "Saturday":
//         // case "Sunday":
//         //     console.log("Hooray, it's the weekend!!!!");
//         //     break;    
//         default:
//             console.log("you didnt give me a day")
//             break;
//     }
// }


// getTodayClass("sky");

let fruits = ["apple", "banana", "orange", "kiwi", "watermelon"]

// function printFruits(){
//     for (let i = 0; i < fruits.length; i++) {
//         console.log(`Fruit ${i + 1} is a ${fruits[i]}`)
//     }
// }

// printFruits(fruits);

function printFruits2(){
    for (let i = fruits.length - 1; i >= 0; i--) {
        console.log(`Fruit ${i + 1} is a ${fruits[i]}`)
    }
}

//printFruits2(fruits);

function isDivisibleByFive(){
    for (let i = 1; i < 30; i+=3){
        if (i % 5 ==0){
            console.log(`${i} is divisible by 5`)
        } else {
            console.log(`${i} is not divisible by 5`)
        }
    }
}

isDivisibleByFive();
