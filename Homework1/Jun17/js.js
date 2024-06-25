// const myFamily = {
//     lastName: "wah",
//     city: "omaha",
//     state: "nebraska",
//     familyMembers: [
//         {
//             firstName: "Sky",
//             profession: "doctor",
//             age: "40",
//             familyRole: "mother",
//             hobbies: ["sleeping", "playing games", "watching youtube"]
//         },
//         {
//             firstName: "Blue",
//             profession: "electrician",
//             age: "39",
//             familyRole:"father",
//             hobbies: ["sking", "hunting", "cooking"]
//         },
//         {
//             firstName: "cloud",
//             profession: "student",
//             age: "10",
//             familyRole: "son",
//             hobbies: ["playing games", "sleeping", "reading"]
//         }]
// };

// myFamily.familyMembers[2].gradLevel = "middle school";

// myFamily.familyMembers[1].hobbies.push("dancing");

// myFamily.familyMembers[0].hobbies.pop();

// myFamily.familyMembers[2].hobbies.sort();

// myFamily["zip code"] = 68124;

// console.log(Object.keys(myFamily))

// delete myFamily.state;

// myFamily["zip code"] = 68134;


//anonymous function
test_array = [2, 9, 7, 6, 8, 4, 3, 5, 1];

let result = () => {
    new_array = [];
    for (let i = 0; i < n; i++){
        new_array.push(test_array[i])
    }

    console.log(`For ${n} elements: [${new_array}]`)
}

//result(5)

test_array.shift();

test_array2 = ["Bill", "John", "Jackson", "Derrick", "Brad", "Walter", "Kevin", "Lance"]

let name = (n) => {
    new_array = [];
    for (let i = 0; i < n; i++){
        new_array.push(test_array2[test_array2.length -1 - i])
    }
    console.log(new_array)
}

//name(1);

test_array2.unshift("Alan");

//console.log(test_array2)

secret = "b";
let letter = prompt("give me a letter")
while (secret != letter) {
    letter = prompt("give me a letter")
}

