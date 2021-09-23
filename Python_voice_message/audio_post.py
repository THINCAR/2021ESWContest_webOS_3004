#!/usr/bin/python
# -*- coding:utf-8 -*-

import requests
import pyaudio
import wave

chunk = 1024  # Record in chunks of 1024 samples
sample_format = pyaudio.paInt16  # 16 bits per sample
channels = 1
fs = 44100  # Record at 44100 samples per second
# seconds = 3
# filename = "result.wav"
file_num = 0
name_num = 0
# 녹음 여부    0:녹음중지, 1:녹음시작
state = 0
# 저장 여부    0:저장 1:저장취소
save_state = 0

while True:
    # state_value
    try:
        f = open("state.txt", 'r')
        data = f.read()
        state = int(data)
        f.close()
        f = open("state2.txt", 'r')
        data = f.read()
        save_state = int(data)
        f.close()
        if save_state == 1:
            f = open("state2.txt", 'w')
            f.write("0")
            f.close()
    except ValueError:
        pass
    if state == 1:
        print("녹음 시작")
        p = pyaudio.PyAudio()  # Create an interface to PortAudio
        filename = "result" + str(file_num) + ".wav"
        stream = p.open(format=sample_format,
                        channels=channels,
                        rate=fs,
                        frames_per_buffer=chunk,
                        input=True)
        frames = []  # Initialize array to store frames
        while True:
            # state_value
            f = open("state.txt", 'r')
            data = f.read()
            state = int(data)
            f.close()
            if state == 0:
                # Stop and close the stream
                stream.stop_stream()
                stream.close()
                # Terminate the PortAudio interface
                p.terminate()
                print("녹음 종료")
                break
            data = stream.read(chunk)
            frames.append(data)

        # 취소하기 눌렀을 시에는 저장하는거 패스시킴.
        f = open("state2.txt", 'r')
        data = f.read()
        save_state = int(data)
        f.close()
        if save_state == 1:
            print("녹음 취소됨")
            continue

        # Save the recorded data as a WAV file
        wf = wave.open(filename, 'wb')
        wf.setnchannels(channels)
        wf.setsampwidth(p.get_sample_size(sample_format))
        wf.setframerate(fs)
        wf.writeframes(b''.join(frames))
        wf.close()

        # 소속 불러오기 및 이름 재정의
        f = open("yourname.txt", 'r')
        data = f.read()
        name = data
        f.close()
        if name == "parcel":
            name = "택배원"
        elif name == "meter_reading":
            name = "검침원"
        elif name == "neighbor":
            name = "이웃집"
        elif name == "public":
            name = "일반인"

        name_file = "name" + str(name_num) + ".txt"
        with open(name_file, 'w') as f:
            f.write(name)

        try:
            url = 'http://192.168.0.69:5555/upload_door'

            files = {'file': open(filename, 'rb')}
            r = requests.post(url, files=files)
            files = {'file': open(name_file, 'rb')}
            r = requests.post(url, files=files)

            if r.status_code == 200:
                print("전송 성공")
                file_num += 1
                name_num += 1
            else:
                print("전송 실패")
        except:
            print("전송 실패")
