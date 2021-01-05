import os
import requests
import json
from colorama import Fore
import sys

website = (str(sys.argv[1]))


mysite = {"remoteAddress":website}

link = requests.post("https://domains.yougetsignal.com/domains.php" , mysite)

source = json.loads(link.content)



for data in source["domainArray"]:
    a = (" "+data[0]+"\n")
    o = open("result.txt","a")
    o.write(a)
    o.close()