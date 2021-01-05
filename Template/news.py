import requests, re, json

req = requests.get("http://168.119.202.31:8000/api/v2/news").content

b = open("news.json","w")
b.write(req)
b.close()