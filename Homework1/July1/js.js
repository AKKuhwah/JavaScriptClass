//1

// function fourArgument(a=2, b=3, c=a+b, d=b+c) {
//     console.log(a*b*c*d);
// }

// fourArgument(3, 5, 6, 4);
// fourArgument(3, 5, 6);
// fourArgument(3, 5);
// fourArgument(undefined, 5, 6, 4);



// //2

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function addArray(i = 0){
//     if (i === myArray.length){
//         return 0;
//     }
//     return myArray[i] + addArray(i + 1);
// }

// console.log(addArray());


//3
let numbers = [5, 2, 6, 9, 7];

function maxPlusMin(numbers){
    let high = Math.max(...numbers);
    let low = Math.min(...numbers);
    let combineValue = high + low;

    function maxPlusMinMultiplied(x){
        return combineValue * x;
    }

    return maxPlusMinMultiplied;

}

let maxPlusMinMultiplied = maxPlusMin(numbers);
console.log(maxPlusMinMultiplied(2));