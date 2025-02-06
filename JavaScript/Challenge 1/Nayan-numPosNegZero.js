let userInput2 = prompt("Please enter a number to check if its negative or not: ")

if (userInput2 > 0) {
    console.log(`${userInput2} is a positive number`)
} else if (userInput2 < 0) {
    console.log(`${userInput2} is a negative number`)
} else{
    console.log(`${userInput2} is zero`)
}