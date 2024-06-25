// Array.reduce()
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(accumulator, currenValue){
    return accumulator + currenValue;
}, 5);
console.log(sum)

// string.indexOf()
console.log("one two three".indexOf("ee"))

// string.trim()
console.log("   okay   ".trim());
console.log("  hello   dear".trim());

// Math.round(), Math.cell(), Math.floor()
console.log(Math.round(4.8653));
console.log(Math.round(6.2234));

console.log(Math.floor(4.86));
console.log(Math.ceil(4.2389423));


// Math.max(), Math.min()
console.log(Math.max(4, 9, 2, -1))
console.log(Math.min(4, 9, 2, -1))

// Math.random()
console.log(Math.random()*10)

function roundTo(num, step = 1) { //num 5, step 2
    let remainder = num % step; // remainder is 5 % 2 = 1
    return num - remainder + (remainder < step / 2 ? 0: step)
    // return 5 - 1 + (1 < 2 / 2 ? 2) = 5 - 1 + 2 = 6
}

console.log(roundTo(4, 2));
console.log(roundTo(5, 2));
console.log(roundTo(6, 2));
console.log(roundTo(4));
console.log(roundTo(5));
console.log(roundTo(6));











