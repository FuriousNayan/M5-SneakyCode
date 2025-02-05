user_input = int(input("Please enter a number: "))

if user_input < 0:
    print(user_input, "is a negative number")

elif user_input > 0:
    print(user_input, "is a positive number")

else:
    print("Your number is 0")