// let dateInput1 = prompt("Enter the first date here i MM/DD/YYYY format");
// let dateInput2 = prompt("Enter the first date here i MM/DD/YYYY format");


// let date1 = new Date(dateInput1);
// let date2 = new Date(dateInput2);

// let differenceInTime = date2.getTime() - date1.getTime();

// let differenceInDay = Math.abs(differenceInTime / (1000*3600*24));

// console.log("Total number of days between dates\n" + date1.toDateString() + " and " + date2.toDateString() + " is " + differenceInDay + " days.");


// let oneDay = 1000 * 60 * 60 * 24;

// let presentDay = new Date();

// let christmasDay = new Date(presentDay.getFullYear(), 11, 25);

// if (presentDay.getMonth() == 11 & presentDay.getDate() > 25){
//     christmasDay.setFullYear(christmasDay.getFullYear() * 1);
// }

// let result = Math.round(christmasDay.getTime() - presentDay.getTime() / oneDay);

// console.log(`Numbers of day remaining until chirstmas:
//     ${presentDay.toDateString()} and ${christmasDay.toDateString} is: ${result} days.`)


function speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = {
    type: "white",
    speak
}

let HungryRabbit = {
    type: "hungry",
    speak
}

// whiteRabbit.speak("Oh my fur and whisters!");
// HungryRabbit.speak("Got any carrots?");

// let finder = {
//     find(array) {
//         return array.some(v => v == this.value);
//     },
//     value: 5
// }
// console.log(finder.find([4, 5]));

// let object = {};
// console.log(Object.getPrototypeOf(object));

let person = {
    name: "john",
    age: 30, 
    occupatoin: "Developter"
}

function Person(name, age, occupation){
    this.name = name;
    this.age  = age;
    this.occupation = occupation;
}
let person2 = new Person("Bill", 25, "Bricklayer");

// console.log(person);
// console.log(person2);

let numberObject = {
    firstNum: 1,
    secondNum: 2
}

// console.log(numberObject.firstNum);
// console.log(numberObject.firstNum.toString());
// console.log(Object.getPrototypeOf(numberObject));

let protoAnimal = {
    speak(line) {
        console.log(`The ${this.type} says ${line}`);
    }
}

// let dog = Object.create(protoAnimal);
// dog.type = "dog";
// dog.speak("ruff");
// let cat = Object.create(protoAnimal);
// cat.type = "cat";
// cat.speak("meow")
// cat.cleanSelf = () => console.log("licking my fur");
// cat.cleanSelf();

class Car {
    constructor(color, bodyType, numberOfSeats) {
        this.color = color;
        this.bodyType = bodyType;
        this.numberOfSeats = numberOfSeats;
    }
    accelerate(speed){
        console.log(`I am accerlerating to ${speed} miles per hour.`);
    }
}

let dodgeCaravan = new Car("dark gray", "minivan", 7);
dodgeCaravan.accelerate(60);
console.log(Object.getPrototypeOf(Car) == Function.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Car)) == Object.prototype);


// class SecretiveObject {
//     #getSecret() {
//         return "I ate all the plums";
//     }
// }










