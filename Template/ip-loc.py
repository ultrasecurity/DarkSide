import requests
import os
import sys
import ipapi
from colorama import Fore
import json
site = (str(sys.argv[1]))
source = ipapi.location(ip=str(site))  

o = open("result.json","w")
o.write(json.dumps(source) )
o.close()

