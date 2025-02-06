let userInput3 = prompt("Please enter a word to count the number of vowels: ")

const lst = ["a", "e", "i", "o", "u"];

function numOfVowels(word){
    let counter = 0
    for(let i = 0; i < word.length; i++){
        if (lst.includes(word[i])){
            counter += 1;
        }
    }
    return counter;
}

console.log(numOfVowels(userInput3))











