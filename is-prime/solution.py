from random import *
import math

def is_prime(num):
    if num == 0:
        return False;
    elif num == 1:
        return False;
    elif num > 2 and num % 2 == 0:
        return False;
    else:
        for n in range(3,int(math.sqrt(num)//1)+1):
            if num % n == 0:
                return False
    return True

def testPrime(num):
    if is_prime(num):
        print(str(num) + ' is prime.')
    else:
        print(str(num) + ' is not prime.')

randArrayLength = 25
for n in range(randArrayLength):
    testPrime(randrange(0, 100))
