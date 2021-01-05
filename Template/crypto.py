import requests

req = requests.get("http://168.119.202.31:8000/api/v2/crypto").content

o = open("crypto.json","w")
o.write(req)
o.close()