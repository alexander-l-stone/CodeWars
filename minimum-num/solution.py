def min_value(digits):
    #Take an array of digits and make the smallest possible number.
    endNum = 0
    uniqueDigits = []
    for i in digits:
        if not i in uniqueDigits:
            uniqueDigits.append(i)
    uniqueDigits.sort(compare)
    for d in range(0, len(uniqueDigits)):
        endNum += uniqueDigits[d]*10**(len(uniqueDigits) - d - 1)
    return endNum

def compare(a, b):
    return a - b

print (min_value([3, 1, 1, 5, 4, 3, 4, 5, 9, 8, 2]))
