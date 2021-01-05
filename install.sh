checkroot() {

if [[ "$(id -u)" -ne 0 ]]; then
   printf "\e[1;77mPlease, run this program as root!\n\e[0m"
   exit 1
fi

}

checkroot
apt-get neofetch
apt-get install python3 
apt-get install python3-pip -y >> /dev/null
python3 -m pip install -r requirements.txt
echo "Installed!"

