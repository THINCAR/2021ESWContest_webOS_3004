# -*- coding: utf-8 -*-

from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
import glob
import shutil
import requests

port = 8888
count = 1

def get_capture_path():
    path = "./CCTV_capture/*"
    file_list = glob.glob(path)
    file_list_jpg = [file for file in file_list if file.endswith(".jpg")]
    return file_list_jpg

def get_recon_path():
    path = "./recon_capture/*"
    file_list = glob.glob(path)
    return file_list

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        result = urlparse(self.path)
        path = result.path
        global count
        if(path == '/'):
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write('<h1>/를 호출하셨네요!</h1>'.encode('utf-8'))

        if(path == '/hi'):
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write('<h1>안녕하세요</h1>'.encode('utf-8'))

        if(path == '/picture'):
            self.send_response(200)
            self.send_header('Content-Type', 'image/jpg')
            self.end_headers()
            content_path = get_capture_path()
            count = 1
            with open(content_path[len(content_path)-count], 'rb') as content:
                shutil.copyfileobj(content, self.wfile)
                print(content)
                print(len(content_path)-count)

        if(path == '/picture/next'):
            self.send_response(200)
            self.send_header('Content-Type', 'image/jpg')
            self.end_headers()
            content_path = get_capture_path()
            count += 1
            if count < 1:
                count = 1
            elif count > len(content_path):
                count = len(content_path)
            with open(content_path[len(content_path)-count], 'rb') as content:
                shutil.copyfileobj(content, self.wfile)
                print(content)
                print(len(content_path)-count)

        if(path == '/picture/previous'):
            self.send_response(200)
            self.send_header('Content-Type', 'image/jpg')
            self.end_headers()
            content_path = get_capture_path()
            count -=1
            if count < 1:
                count = 1
            elif count > len(content_path):
                count = len(content_path)
            with open(content_path[len(content_path)-count], 'rb') as content:
                shutil.copyfileobj(content, self.wfile)
                print(content)
                print(len(content_path)-count)

        if(path == '/upload_door'):
            self.send_response(200)
            self.send_header('Content-Type', 'image/jpg')
            self.end_headers()
            content_path = get_recon_path()
            url = 'http://192.168.0.69:5555/upload_door'
            for i in content_path:
                print(i)
                files = {'file': open(i,'rb')}
                r = requests.post(url,files=files)
            
httpd = HTTPServer(('0.0.0.0', port), SimpleHTTPRequestHandler)
print('Server running on port:{port}')
httpd.serve_forever()
