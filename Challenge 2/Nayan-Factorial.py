user_input = int(input("Please enter a number: "))
factorial = 1

for i in range(1, user_input + 1):
    factorial *= i

print("The factorial of", user_input, "is", factorial)