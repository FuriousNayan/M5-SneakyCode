let userInput2 = prompt("Please enter a number to check if its even or odd: ")

function evenOdd(num){
    if (num % 2 == 0) {
        console.log("The number entered is even");
    } else {
        console.log("The number entered is odd");
    }
}

evenOdd(userInput2)