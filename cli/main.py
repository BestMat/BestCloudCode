import os
import sys
import time
time.sleep(1)
print("Welcome to BestDeveloper CLI!")
x = input("Type cloudcode to mange your code on the cloud. If not leave it empty : ")
if(x == "cloudcode"):
    cmd = "python cloudcode.py"
    os.system('cmd /k' + cmd)
else:
    print('bestdev')