// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: Expected output --> 10
// b) Verify and explain: .length returns the length of the variable called upon. The variable "cohort" is a string containing 10 characters.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: Expected output --> o
// b) Verify and explain: Bracket notation [] is used to access an element located at the specified index. Because it is zero-indexed, the 5th character which is "o" is located at the 4th index. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: With the constant index set to 1, line 36 can be read as languages[1]. This is bracket notation, similar to Question 2. Ruby is located at the first index of the array. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: Expected output --> TypeError
// b) Verify and explain: The method .toUpperCase cannot be used on data types like objects. Const weekendDays is an array, which falls in the object data type. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The method typeof returns the data type of the specified value. Additionally, .length will return the number of elements in the specified variable. The typeof returns the data type of the .length function, which will always be a number. 
