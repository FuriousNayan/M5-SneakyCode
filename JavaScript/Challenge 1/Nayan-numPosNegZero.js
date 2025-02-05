let userInput = prompt("Please enter a number: ")

if (userInput > 0) {
    console.log(`${userInput} is a positive number`)
} else if (userInput < 0) {
    console.log(`${userInput} is a negative number`)
} else{
    console.log(`${userInput} is zero`)
}