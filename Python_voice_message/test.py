import requests
from bs4 import BeautifulSoup

url = "http://127.0.0.1:5500/module/cctv/belong/public.html"
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html.parser', from_encoding='utf-8')

details_info = soup.findAll('h3', {'id':'save_sub'})
print(details_info[0].text)