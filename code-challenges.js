// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// 1. Declare a variable for the new array
// 2. Assign the new variable using the .concat function to combine the arrays
// 3. Use the .length function on the new array

let runs = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(runs)
console.log(runs.length)
//  Output --> 9

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code:
// 1. Declare a new variable using .split("") to convert the string into an array that separates each letter
// 2. Declare a third variable and run the .reverse function on the new array
// 3. Use the .join("") function to convert the array back to a string with no commas

let cohortArray = currentCohort.split("")
console.log(cohortArray)
let backArray = cohortArray.reverse()
console.log(backArray)
console.log(backArray.join(""))
// Output 3202 floG



// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// 1. Create a for loop setting the initialization as the first index (i=[0]); condition as the index less than the length; implementation as index +1 for each iteration (i++)
// 2. Set up an if statement with the condition set using a modulo with each element in the array divided by 2 (stockExchange[i]% 2) followed by a bang strictly equal (!==) to 0. This will find the odd numbers as the modulo will result in 0 for even numbers, and 1 for odd numbers. 
// 3. Set the output of the if statement as stockExchange[i] to output the values in the original array that passed the condition of the if statement. 

for (i=0; i < stockExchange.length; i++){
    if(stockExchange[i] %2 !== 0){
        console.log(stockExchange[i])
    }
}
// Output --> 13, 5, -5, 27