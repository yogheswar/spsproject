import random
from enum import Enum
class RPS(Enum):
    STONE = 1
    PAPER = 2
    SCISSOR = 3
def sps(userchoice, computerchoice):
    try:
        print("You chose:", str(RPS(userchoice)).replace("RPS.", ""))
        print("Computer chose:", str(RPS(computerchoice)).replace("RPS.", ""))
    except ValueError:
        print("Invalid choice detected.")
        return 0, 0

    userscore = 0
    computerscore = 0

    if userchoice == computerchoice:
        pass  # tie
    elif (userchoice == 1 and computerchoice == 3) or \
         (userchoice == 2 and computerchoice == 1) or \
         (userchoice == 3 and computerchoice == 2):
        userscore += 1
    else:
        computerscore += 1

    return userscore, computerscore
userscores = 0
computerscores = 0
for i in range(0,5):
    userchoice=int(input("Enter your choice (1 for Stone,2 for paper,3 for scissor):"))
    if(userchoice<1 or userchoice>3):
        print("Invalid choice, please enter 1, 2, or 3.")
        exit()
    computerchoice=random.randint(1,3)
    userscore,computerscore=sps(userchoice,computerchoice)
    userscores += userscore
    computerscores += computerscore
    if(userscore>computerscore):
        print("You won")
        print("--------------------------------------------")
    elif(userscore<computerscore):
        print("Computer won")
        print("--------------------------------------------")
    else:
        print("It's a tie")
        print("--------------------------------------------")
print("Final Score: You:", userscores, "Computer:", computerscores)     
