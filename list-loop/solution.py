#You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.
#
#Your objective is to determine the length of the loop.
#
#https://www.codewars.com/kata/can-you-get-the-loop/train/python

#Approach, maintain a list of tuples(Node, count from start)
#Once you return to a node you've been too, subtract returned nodes count from the count of the end of the list to get loop length
def loop_size(node):
    exploredDict = {node : 0}
    nodeCount = 0
    currentNode = node
    while True:
        currentNode = currentNode.next
        nodeCount += 1
        if not (currentNode in exploredDict):
            exploredDict[currentNode] = nodeCount
        else:
            return nodeCount - exploredDict[currentNode]
