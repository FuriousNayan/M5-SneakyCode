let userInput = prompt("Enter a number: ");
let factorial = 1;

for (let i = 1; i <= userInput; i++){
    factorial += i;
}

console.log(`The factorial of ${userInput} is ${factorial}`);