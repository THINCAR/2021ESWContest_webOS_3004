import glob
import shutil
import os
import time

output = glob.glob('./CCTV_capture/*.jpg')
output.sort()
#print(output[:10])
recon_path = './recon_capture/'
os.makedirs(recon_path, exist_ok=True)

while True:
	cnt = 0
	print("reconstruct_picture")
	for i in output[len(output)-10:]:
		txt_file_name = recon_path + str(cnt) + '.txt'
		f = open(txt_file_name,'w')
		f.write(i[15:34])
		#print(i[15:34])
		img_file_name = recon_path + str(cnt) + '.jpg'
		shutil.copy(i,img_file_name)
		#print(img_file_name)
		f.close()
		cnt += 1
	time.sleep(20)
	
	
