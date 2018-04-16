#Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
#
#Examples input/output:
#
#https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python
def xo(s):
    Xcount = 0
    Ocount = 0
    for i in range(0,len(s)):
        if (s[i] == 'x') or (s[i] == 'X'):
            Xcount += 1
        elif (s[i] == 'o') or (s[i] =='O'):
            Ocount += 1
    return Xcount == Ocount
