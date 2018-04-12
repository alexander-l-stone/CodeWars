def isValidWalk(walk):
    north_south = 0
    east_west = 0
    if len(walk) != 10:
        return False
    else:
        for dir in walk:
            if dir == 'n':
                north_south += 1
            elif dir == 's':
                north_south -= 1
            elif dir == 'w':
                east_west += 1
            elif dir == 'e':
                east_west -= 1
            else:
                return False
        if north_south == 0 and east_west == 0:
            return True
    return False
