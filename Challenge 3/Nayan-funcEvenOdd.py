user_input = int(input("Please enter a number: "))

def evenOdd(num):
    if num % 2 == 0:
        print(num, "is Even")
    else:
        print(num, "is Odd")

evenOdd(user_input)