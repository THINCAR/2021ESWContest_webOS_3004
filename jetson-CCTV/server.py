# -*- coding: utf-8 -*-

from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
import glob
import shutil
import requests

port = 8888

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        result = urlparse(self.path)
        path = result.path
        if(path == '/'):
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write('<h1>test</h1>'.encode('utf-8'))

        if(path == '/hi'):
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write('<h1>hi</h1>'.encode('utf-8'))
            
        if(path == '/auth'):
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            f = open("./face/face_recog.txt","r")
            line = f.readline()
            f.close()
            self.wfile.write(f'{line}'.encode('utf-8'))

        if(path == '/detect'):
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            f = open("./drowsiness_detection.txt","r")
            line = f.readline()
            f.close()
            self.wfile.write(f'{line}'.encode('utf-8'))

        if(path == '/attitude'):
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            f = open("./drowsiness_attitude.txt","r")
            line = f.readline()
            f.close()
            self.wfile.write(f'{line}'.encode('utf-8'))
httpd = HTTPServer(('0.0.0.0', port), SimpleHTTPRequestHandler)
print('Server running on port:{port}')
httpd.serve_forever()
