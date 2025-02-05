user_input = input("Please enter a word: ")

lst = ["a", "e", "i", "o", "u"]

def numOfVowels(word):
    counter = 0
    for i in word:
        if i in lst:
            counter += 1
        
    return counter


print(numOfVowels(user_input))
