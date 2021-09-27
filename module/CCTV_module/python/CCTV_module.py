import jetson.inference
import jetson.utils
import cv2
import numpy as np
import time

net = jetson.inference.detectNet("ssd-mobilenet-v2", threshold=0.5)
camera = jetson.utils.videoSource("csi://1",argv=['--input-flip=rotate-180', '--input-width=1280', '--input-height=720', '--input-frameRate=30'])      # '/dev/video0' for V4L2
display = jetson.utils.videoOutput("display://0") # 'my_video.mp4' for file

count_person = 0
pre_detect_time = time.localtime(time.time()).tm_sec

def check_time():
	#time
	secs = time.time()
	tm = time.localtime(secs)
	if tm.tm_sec < 10 :
		seconds = '0' + str(tm.tm_sec)
	else :
		seconds = str(tm.tm_sec)

	if tm.tm_min < 10 :
		minutes = '0' + str(tm.tm_min)
	else :
		minutes = str(tm.tm_min)

	if tm.tm_hour < 10 :
		hours = '0' + str(tm.tm_hour)
	else :
		hours = str(tm.tm_hour)

	if tm.tm_mday < 10 :
		days = '0' + str(tm.tm_mday)
	else :
		days = str(tm.tm_mday)

	if tm.tm_mon < 10 :
		months = '0' + str(tm.tm_mon)
	else :
		months = str(tm.tm_mon)

	if tm.tm_year < 10 :
		years = '0' + str(tm.tm_year)
	else :
		years = str(tm.tm_year)

	now = years+'-'+months+'-'+days+'-'+hours+':'+minutes+':'+seconds
	return now

while display.IsStreaming():
	img = camera.Capture()
	img_raw = jetson.utils.cudaMemcpy(img)
	
	detections = net.Detect(img)

	for detection in detections:
		#print(detection)
		if detection.ClassID == 1 and detection.Confidence >= 0.7:
			count_person += 1
	
	if count_person == 100:
		print("@@@@@@@@@@@@@@    person    @@@@@@@@@@@@@@")
		count_person = 0
		now = check_time()
		#add function for notification
		detect_time = time.localtime(time.time()).tm_sec
		if detect_time - pre_detect_time > 0:
			print(detect_time - pre_detect_time)
		jetson.utils.saveImageRGBA("./CCTV_capture/"+now+".jpg",img_raw,width=1280,height=720)
	display.Render(img)
	display.SetStatus("Object Detection | Network {:.0f} FPS".format(net.GetNetworkFPS()))
