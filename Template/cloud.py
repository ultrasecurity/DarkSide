import socket
import time 
import ipwhois
import dns.resolver
import sys
def start():
    site = (str(sys.argv[1]))
    result = dns.resolver.query(site, 'A')
    a = (ipwhois.IPWhois(result[0].to_text()).lookup_whois()["nets"][0]["description"])
    if "Cloudflare" in a:
        b = open("result.txt","w")
        b.write("")
        b.close()


        subdom = ['ftp', 'cpanel', 'webmail', 'localhost', 'local', 'mysql', 'forum', 'driect-connect', 'blog', 'vb', 'forums', 'home', 'direct', 'forums', 'mail', 'access', 'admin', 'administrator', 'email', 'downloads', 'ssh', 'owa', 'bbs', 'webmin', 'paralel', 'parallels', 'www0', 'www', 'www1', 'www2', 'www3', 'www4', 'www5', 'shop', 'api', 'blogs', 'test', 'mx1', 'cdn', 'mysql', 'mail1', 'secure', 'server', 'ns1', 'ns2', 'smtp', 'vpn', 'm', 'mail2', 'postal', 'support', 'web', 'dev']

        if site == "":
            try:
                
                sys.exit()
            except:
                return
        for sub in subdom:
            try:
                hosts = str(sub) + "." + str(site)
                bypass = socket.gethostbyname(str(hosts))
                result = dns.resolver.query(hosts, 'A')
                check = (ipwhois.IPWhois(result[0].to_text()).lookup_whois()["nets"][0]["description"])
                check_num = 0
                if "Cloudflare" in check:
                    check_num +=1
                    if check_num == 2:
                        b = open("result.txt","w")
                        b.write("We could not bypass CloudFlare for you")
                        b.close()
                        break

                else:

                    a = " CloudFlare Bypass " + bypass+ ' | ' + hosts+"\n"
                    b = open("result.txt","a")
                    b.write(a)
                    b.close()
            except Exception:
                pass

    else:
        b = open("result.txt","w")
        b.write("This site does not support CloudFlare")
        b.close()


start()