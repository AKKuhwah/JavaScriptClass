
// // // // var total = 0;
// // // // total = total + 2;
// // // // total += 3;
// // // // total++;
// // // // console.log(total)

// // // // let temperature = 32;
// // // // if (temperature < 40){
// // // //     console.log("it's cold bro")
// // // // }
// // // // temperature = 42;
// // // // if (temperature < 40){
// // // //     console.log("kinda chilling homie")
// // // // }

// // // // temperature = 40;
// // // // if (temperature <= 40){
// // // //     console.log("kinda chilling really homie")
// // // // }

// // // // function checktemperature(temptoday){
// // // //     if (temptoday <= 40){
// // // //         console.log("kinda super chilling homie")
// // // //     }
// // // // }

// // // // checktemperature(40);
// // // // checktemperature(32);
// // // // checktemperature(55);


// // // // function checkCreditHealth(cardBalance, numOfLoans){
// // // //     if (cardBalance > 5000 && numOfLoans > 7){
// // // //             console.log("we're broke")
// // // //     }
// // // // }

// // // // checkCreditHealth(6000, 8);
// // // // checkCreditHealth(5000, 8);
// // // // checkCreditHealth(6000, 7);

// // // // function checkCreditHealth2(cardBalance, numOfLoans){
// // // //     if (cardBalance > 5000 && numOfLoans > 7){
// // // //         console.log("we're broke")
// // // //     }
// // // //     else {
// // // //         console.log("I'm not broke")
// // // //     }
// // // // }

// // // // checkCreditHealth2(6000, 8);
// // // // checkCreditHealth2(5000, 8);
// // // // checkCreditHealth2(6000, 7);

// // // // function pickHairColor(mood){
// // // //     if (mood == "happy"){
// // // //         console.log("green")
// // // //     }
// // // //     else if (mood == "sad"){
// // // //         console.log("blue")
// // // //     }
// // // // }

// // // // pickHairColor("happy");
// // // // pickHairColor("sad");
// // // // pickHairColor("angry");

// // // // function checkGrade(score){
// // // //     if (score >= 90){
// // // //         console.log("I got a A")
// // // //     }
// // // //     else if(score >= 80){
// // // //         console.log("I got a B")
// // // //     }
// // // //     else if(score >= 70){
// // // //         console.log("I got a C")
// // // //     } 
// // // //     else if(score >= 60){
// // // //         console.log("I got a D")
// // // //     }
// // // //     else{
// // // //         console.log("I got a F")
// // // //     }

// // // // }

// // // // // checkGrade(95);
// // // // // checkGrade(85);
// // // // // checkGrade(75);
// // // // // checkGrade(65);
// // // // // checkGrade(50);

// // // // function getTodayClass(dayOfWeek){
// // // //     switch(dayOfWeek) {
// // // //         case "Monday":
// // // //             console.log("Today is science class");
// // // //             break;
// // // //         case "Tuesday":
// // // //             console.log("Today is algebra");
// // // //             break;
// // // //         case "Wednesday":
// // // //             console.log("Today is science lab");
// // // //             break;
// // // //         case "Thursday":
// // // //             console.log("Today is history");
// // // //             break;
// // // //         case "Friday":
// // // //             console.log("Today is study day");
// // // //             break;
// // // //         // case "Saturday":
// // // //         // case "Sunday":
// // // //         //     console.log("Hooray, it's the weekend!!!!");
// // // //         //     break;    
// // // //         default:
// // // //             console.log("you didnt give me a day")
// // // //             break;
// // // //     }
// // // // }


// // // // getTodayClass("sky");

// // let fruits = ["apple", "banana", "orange", "kiwi", "watermelon"]

// // // // function printFruits(){
// // // //     for (let i = 0; i < fruits.length; i++) {
// // // //         console.log(`Fruit ${i + 1} is a ${fruits[i]}`)
// // // //     }
// // // // }

// // // // printFruits(fruits);

// // // function printFruits2(){
// // //     for (let i = fruits.length - 1; i >= 0; i--) {
// // //         console.log(`Fruit ${i + 1} is a ${fruits[i]}`)
// // //     }
// // // }

// // // //printFruits2(fruits);

// // // function isDivisibleByFive(){
// // //     for (let i = 1; i < 30; i+=3){
// // //         if (i % 5 ==0){
// // //             console.log(`${i} is divisible by 5`)
// // //         } else {
// // //             console.log(`${i} is not divisible by 5`)
// // //         }
// // //     }
// // // }

// // // // isDivisibleByFive();
// // // let age = "25";

// // // function sendMessageBasedOnAge(age){
// // //     switch (age) {
// // //         case 25:
// // //             console.log("looking great!")
// // //             break;
// // //         case 50:
// // //             console.log("Getting up there, you are")
// // //             break;
// // //         default:
// // //             console.log("Man you are old")
// // //             break;
// // //     }
// // // }

// // // // sendMessageBasedOnAge(age);

// // // function containsLetter(str) {
// // //     let letter = 's';
// // //     for (let i = 0; i < str.length; i++){
// // //         if (str[i] == letter){
// // //             console.log("yes");
// // //             break;
// // //         } else if (i == str.length) {
// // //             console.log("No")
// // //         }
// // //     }
// // // }

// // // // containsLetter("Mesopotamia")

// // // function countToTwentyWithoutThrees() {
// // //     for (let i = 0; i <= 20; i++){
// // //         if (i % 3 == 0){
// // //             continue;
// // //         } else {
// // //             console.log('i is ' + i)
// // //         }
// // //     }
// // // }

// // // // countToTwentyWithoutThrees();

// // function sayHi() {
// //     let name = prompt("What is your name")
// //     console.log("hi " + name)
// // }

// // // sayHi();

// // // let num = prompt("Give me a number to count down from")
// // // while (num > 4){
// // //     console.log('The number is '+ num)
// // //     num--;
// // // }

// // // console.log("I don't like to count four or below four")

// // // let num = prompt("Give me a number to count down from")

// // // do {
// // //     console.log("the number is "+ num);
// // //     num--;
// // // } while (num > 4);

// // // console.log("I don't like to count four or below four")

// // function getBalanceOfAccount(deposit, withdraw){
// //     let balance = deposit - withdraw
// //     return balance;
// // }

// // bal = getBalanceOfAccount(150, 100)

// // // console.log("Your balance is "+ bal);

// // let favoritefood = function () {
// //     let name = prompt("What is your name?")
// //     if (name == "David"){
// //         return "tacos";
// //     } else {
// //         return "pizza";
// //     }
// // }

// // // console.log("My favorite food is "+ favoritefood());

// // var x = 10;
// // // console.log("x is " + x)
// // // step 1: var x
// // // step 2: x = 10
// // // step 3: console.log(x);

// // // console.log("y = " + y);
// // var y = 20
// // // step 1: var y
// // // step 2: console.log(y)
// // // step 3: y = 20

// // // console.log("z = "+ z);
// // let z = 30;

// // // countTheMummies();
// // function countTheMummies (num) {
// //     if (num > 15){
// //         console.log("I am going to die")
// //     }
// //     else if (num >= 1){
// //         console.log("Maybe I can run away")
// //     }
// //     else {
// //         console.log("Uh i don't know")
// //     }
// // }

// // // countTheZombies(14);

// // let countTheZombies = function (num) {
// //     if (num > 15){
// //         console.log("AAARRRGGGGHHH ZOMBIES")
// //     } else if (num >= 1){
// //         console.log("Too many zombies for my taste")
// //     } else {
// //         console.log("nice, now zombie here")
// //     }
// // }

// // //global scope with fruits array from earlier
// // function getGroceries(day){
// //     if (day == "Wednesday"){
// //         console.log("I need to buy "+ fruits[2]);
// //     } else if (day == "Friday") {
// //         console.log("Today I will buy " + fruits[1] + 'and ' + fruits[4]);
// //     } else {
// //         console.log("No groceries today");
// //     }
// // }

// // // getGroceries("Tuesday");
// // // getGroceries("Wednesday");
// // // getGroceries("Friday");



// // function getAreaOfHouse(lenght, width){
// //     let area = length * width
// // }

// // // getAreaOfHouse();
// // // console.log("the area of the house is " + area)


// // // Function Scope
// // function functionScopeExmaple(){
// //     var depositAmount = 200;
// //     if (depositAmount < 1000){
// //         var isInsured = true;
// //     }
// //     console.log("The deposit amount is " + depositAmount);
// //     console.log("Is the deposite amount Insured? "+ isInsured);
// // }

// // // functionScopeExmaple();

// // //Block Scope
// // // var vs let & cons (These are block scope)

// // function blockScopeExmaple(risk){
// //     let depositAmount = 200;
// //     if (depositAmount < 1000){
// //         let isInsured = true;
// //         if (risk == 1){
// //             isInsured - false;
// //             console.log("What is inInsured?" + isInsured)
// //         }
// //         console.log("What is inInsured?" + isInsured)
// //     }
// //     console.log("The deposit amount is " + depositAmount);
// //     console.log("Is the deposite amount INsured? "+ isInsured);
// // }

// // // blockScopeExmaple(2);
// // // blockScopeExmaple(1);

// // // function calculateTip(preTip, tipPercent){
// // //     const tipResult = preTip * tipPercent;
// // //     return tipResult;
// // // }

// // // const preTipTotal = 100.00;
// // // const tipPercentage = 0.15;
// // // const tipCost = calculateTip(preTipTotal, tipPercentage)
// // // const totalBill = preTipTotal + tipCost
// // // console.log("Your total is "+ totalBill);

// // const preTipTotal = 100.00;
// // const tipPercentage = 0.15;

// // // Declare tipCost using anonymous function

// // // const tipCost = function (preTip, tipPercent){
// // //     const tipResult = preTip*tipPercent;
// // //     return tipResult;
// // // }

// // // const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
// // // console.log("Your total bill is $" + totalBill);

// // // {(arguments)} => {
// // //     Javascript statements
// // // }

// // // const tipCost = (preTip, tipPercent) => {
// // //     const tipResult = preTip + prePercent;
// // //     return tipResult;
// // // }

// // // const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
// // // console.log("Your total bill is $" + totalBill);

// // const roundTo = (n, step) => {
// //     let remainder = n % step
// //     return n - remainder + (remainder < step / 2 ? 0 : step);
// //     // condition t or f (? (true)first result : (false)second result)
// // }

// // // console.log(roundTo(40, 3));


// // //n = 40, step=3;
// // // remainder = 40 % 3 = 1
// // // return 40 - 1 + (1 < 3 / 2 ? 0 : 3);

// // const sum = (num1, num2) => num1 + num2;

// // const square = num => num*num

// // const addTwoNumber = () => 5 + 3;

// //object
// const car = {
//     name: "fiat", 
//     model: "500",
//     weight: 850,
//     color: "white",
//     start(speed) {
//         console.log("starting car");
//         for (let i = 0; i <= speed; i += 5){
//             console.log("accelerating at " + i + "mph");
//         }
//         console.log("reached desired speed");
//     },
//     makeAndModel: function () {
//         return this.name + " " + this.model;
//     },

//     weightInKgs: () => {
//         return car.weight + "kg";
//     }
// }
//     // objectName.property
//     // objectName["property"]
//     // objectName[expression]


// // console.log("My newest car is a " + car.color + " " + car.makeAndModel());
// // console.log("My " + car.name + " weights " + car.weightInKgs());
// // console.log(car.start(55));
// const adult =  { first: "Bob", lastName: "Ross", age: 50, eyeColor: "Blue"};

// const duck1 = {};
// const duck2 = new Object();

// duck1.color = "magenta";
// // console.log(duck1)

// let duckColor = duck1["color"];
// // console.log(duckColor);


// const person = {
//     name: "Bill",
//     age: 54,
//     2: "Thompson",
//     "Joe Cool": "Snoopy",
// }

// // console.log(person)
// person.jeanSize = 42;
// // console.log(person);
// // console.log(person["name"]);
// person["country"] = "USA";
// // console.log(person)
// person.name = "John";
// // console.log(person);
// let i = "Joe Cool";
// // console.log(person[i]);
// person[i] = "spike";
// // console.log(person);
// delete person.name;
// // console.log(person.name);
// // console.log(person);
// // console.log("country" in person);
// // console.log("name" in person);
// // console.log(Object.keys(person));
// // console.log(person.2); wrong!
// // console.log(person[2])
// // person.2 = "Johnson"; wrong!
// person[2] = "Johnson";
// // console.log(person);
// // person."2" = "Baird"; wrong!
// person["2"] = "baird";
// // console.log(person);
// person[1 + 1] = "Smith";
// // console.log(person);
// // person.Joe Cool = "Sonny"; wrong!
// // person."Joe Cool" = "Sonny"; wrong!
// // person[Joe Cool] = "sonny"; wrong!
// person["Joe Cool"] = "sonny";
// // console.log(person)

// const myself = {
//     name: "john",
//     age: 30,
//     myCars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     },
//     myClasses: [
//         {
//             className: "Science",
//             roomNumber: "102",
//             teacher: "D'Granny",
//         },
//         {
//             className: "History",
//             roomNumber: "303",
//             teacher: "Manon",
//             gpa: 3.5
//         }
//     ]
// }

// // let venue = "QUEST CENTER";
// // let venueFormatted = venue.toLowerCase();
// // console.log(venueFormatted);

// // let price = 5.03230948230;
// // let priceFormatted = price.toFixed(2);
// // console.log(priceFormatted);

// const treeFruits = ["Apple", "Orange", "Banana"]
// // console.log(treeFruits.length);
// treeFruits.push("Kiwi");
// // console.log(treeFruits);
// // console.log(treeFruits.length);
// treeFruits.pop();
// // console.log(treeFruits);
// // console.log(treeFruits.length);
// treeFruits[3] = "Dragonfruit";
// // console.log(treeFruits);
// // console.log(treeFruits.length);
// treeFruits[2] = "peach";
// // console.log(treeFruits);
// // console.log(treeFruits.length);
// const treeFruitsString = treeFruits.toString();
// // console.log(treeFruitsString);
// treeFruits.sort();
// // console.log(treeFruitsString);
// // console.log(treeFruits[treeFruits.length-1])
// // treeFruits.forEach((item, index) => {
// //     console.log("item #" + (index + 1) + ":" + item);
// // });

// let myFruit = treeFruits[2];
// // console.log(myFruit);
// let yourFruit = treeFruits.at(2);
// // console.log(yourFruit);
// let hisFruit = treeFruits.at(-1);
// // console.log(hisFruit);
// // console.log(treeFruitsString1 = treeFruits.toString());
// // console.log(treeFruitsString1 = treeFruits.join("*"));
// treeFruits.shift();
// // console.log(treeFruits);
// // console.log(treeFruits.length);
// treeFruits.unshift("lemon");
// // console.log(treeFruits);
// // console.log(treeFruits.length);

const children = ["Joseph", "Bethany", "Zachery"];
const adults = ["Amy", "Andrea", "Ingrid"]
const parents = ["Errol", "Francesa"]
const myRelatives = children.concat(adults, parents);
console.log(myRelatives);
console.log(children);
console.log(adults);
const myKin = myRelatives.concat("Eric");
console.log(myKin);

const testScores = [[99, 100], [86, 92], [77, 79]];
console.log(testScores);
const newTestScores = testScores.flat();
console.log(newTestScores);



