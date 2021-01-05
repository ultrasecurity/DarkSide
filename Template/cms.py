import os
import builtwith
from colorama import Fore
import sys

site = (str(sys.argv[1]))



info = builtwith.parse("https://"+site)
for name in info:
    mfile = open("result.txt","a")
    value = ''
    for val in info[str(name)]:
        name = name.replace('-',' ')
        name = name.title()
        value += str(val) 
        finall = (name+': '+value)
    mfile.write(finall+"\n")

    mfile.close()