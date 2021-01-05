import  requests

req = requests.get("http://168.119.202.31:8000/api/v2/learn").content

c = open("learn.json","w")
c.write(req)
c.close()