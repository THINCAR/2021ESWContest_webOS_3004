from scipy.spatial import distance
from imutils import face_utils
import jetson.utils
import imutils
import dlib
import cv2

import face_recognition
import camera
import os
import numpy as np

import timeit

class FaceRecog():
    def __init__(self):
        # Using OpenCV to capture from device 0. If you have trouble capturing
        # from a webcam, comment the line below out and use a video file
        # instead.
        self.camera = camera.VideoCamera()

        self.known_face_encodings = []
        self.known_face_names = []

        # Load sample pictures and learn how to recognize it.
        dirname = './face/knowns'
        files = os.listdir(dirname)
        for filename in files:
            name, ext = os.path.splitext(filename)
            if ext == '.jpg':
                self.known_face_names.append(name)
                pathname = os.path.join(dirname, filename)
                img = face_recognition.load_image_file(pathname)
                face_encoding = face_recognition.face_encodings(img)[0]
                self.known_face_encodings.append(face_encoding)

        # Initialize some variables
        self.face_locations = []
        self.face_encodings = []
        self.face_names = []
        self.process_this_frame = True
        self.count = 0
        self.login_name = "None"

    def __del__(self):
        del self.camera

    def get_frame(self):
        # Grab a single frame of video
        frame = self.camera.get_frame()
        self.count += 1
        # Resize frame of video to 1/4 size for faster face recognition processing
        small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

        # Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
        rgb_small_frame = small_frame[:, :, ::-1]

        # Only process every other frame of video to save time
        if self.count%4==0:
            # Find all the faces and face encodings in the current frame of video
            self.face_locations = face_recognition.face_locations(rgb_small_frame)
            self.face_encodings = face_recognition.face_encodings(rgb_small_frame, self.face_locations)

            self.face_names = []
            for face_encoding in self.face_encodings:
                # See if the face is a match for the known face(s)
                distances = face_recognition.face_distance(self.known_face_encodings, face_encoding)
                min_value = min(distances)

                # tolerance: How much distance between faces to consider it a match. Lower is more strict.
                # 0.6 is typical best performance.
                name = "Unknown"
                if min_value < 0.6:
                    index = np.argmin(distances)
                    name = self.known_face_names[index]

                self.face_names.append(name)
	
        #self.process_this_frame = not self.process_this_frame

        # Display the results
        for (top, right, bottom, left), name in zip(self.face_locations, self.face_names):
            # Scale back up face locations since the frame we detected in was scaled to 1/4 size
            top *= 4
            right *= 4
            bottom *= 4
            left *= 4

            # Draw a box around the face
            cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

            # Draw a label with a name below the face
            cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

        if self.face_names == []:
            self.login_name = "None"
        else:
            self.login_name = self.face_names[0]

        return frame, self.login_name

    def get_jpg_bytes(self):
        frame = self.get_frame()
        # We are using Motion JPEG, but OpenCV defaults to capture raw images,
        # so we must encode it into JPEG in order to correctly display the
        # video stream.
        ret, jpg = cv2.imencode('.jpg', frame)
        return jpg.tobytes()


def eye_aspect_ratio(eye):
	A = distance.euclidean(eye[1], eye[5])
	B = distance.euclidean(eye[2], eye[4])
	C = distance.euclidean(eye[0], eye[3])
	ear = (A + B) / (2.0 * C)
	return ear
	
thresh = 0.25
frame_check = 8 #fps = 8
detect = dlib.get_frontal_face_detector()
predict = dlib.shape_predictor("./shape_predictor_68_face_landmarks.dat")# Dat file is the crux of the code

(lStart, lEnd) = face_utils.FACIAL_LANDMARKS_68_IDXS["left_eye"]
(rStart, rEnd) = face_utils.FACIAL_LANDMARKS_68_IDXS["right_eye"]

pre_drowsy_time = timeit.default_timer()
flag=0
face_recog = FaceRecog()

f = open("drowsiness_attitude.txt","w")
f.write("0")            
f.close()
f = open("drowsiness_detection.txt","w")
f.write("0")            
f.close()


while True:
	#start_t =timeit.default_timer()
	frame, login_name = face_recog.get_frame()
	
	if login_name != "None":
            #print("로그인 성공!")
            #print(login_name + "님 반갑습니다.")
            f = open("./face/face_recog.txt","w")
            f.write(login_name)            
            f.close()
            # webOS 쪽으로 성공했다는 신호랑 로그인한 사용자 이름 넘겨주기
	else:
            f = open("./face/face_recog.txt","w")
            f.write("None")            
            f.close()
            #print("로그인 실패...")

	frame = imutils.resize(frame, width=450)#450
	gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
	subjects = detect(gray, 0)
	for subject in subjects:
		shape = predict(gray, subject)
		shape = face_utils.shape_to_np(shape)#converting to NumPy Array
		leftEye = shape[lStart:lEnd]
		rightEye = shape[rStart:rEnd]
		leftEAR = eye_aspect_ratio(leftEye)
		rightEAR = eye_aspect_ratio(rightEye)
		ear = (leftEAR + rightEAR) / 2.0
		leftEyeHull = cv2.convexHull(leftEye)
		rightEyeHull = cv2.convexHull(rightEye)
		cv2.drawContours(frame, [leftEyeHull], -1, (0, 255, 0), 1)
		cv2.drawContours(frame, [rightEyeHull], -1, (0, 255, 0), 1)
		if ear < thresh:
			flag += 1
			#print (flag)
			if flag >= frame_check:
				cv2.putText(frame, "****************ALERT!****************", (10,30),cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
				cv2.putText(frame, "****************ALERT!****************", (10,325),cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
				#print ("Drowsy")
				f = open("drowsiness_detection.txt","w")
				f.write("1")            
				f.close()
				now = timeit.default_timer()
				if now - pre_drowsy_time < 10 and now - pre_drowsy_time >1 :
					f = open("drowsiness_attitude.txt","w")
					f.write("1")            
					f.close()
				elif now - pre_drowsy_time >= 10 :
					f = open("drowsiness_attitude.txt","w")
					f.write("0")            
					f.close()

				pre_drowsy_time = now
		else:
			f = open("drowsiness_detection.txt","w")
			f.write("0")            
			f.close()
			flag = 0

	cv2.imshow("Video",frame)
	#terminate_t =timeit.default_timer()

	#FPS = int(1./(terminate_t-start_t))
	#print(FPS)
	
	key = cv2.waitKey(1) & 0xFF
	if key == ord("q"):
		break
cv2.destroyAllWindows()
cap.release()
