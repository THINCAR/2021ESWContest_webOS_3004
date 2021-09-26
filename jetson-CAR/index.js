const Stream = require('node-rtsp-stream');
const streamUrl = "rtsp://192.168.0.21:8554/test";

stream = new Stream({
	name: 'stream',
	streamUrl: streamUrl,
	wsPort: 9999,
	width: 640,
	height: 480
});
