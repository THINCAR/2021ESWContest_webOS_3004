const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs');

app.use(express.static(__dirname + ""));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/voice_message.html', (req, res) => {
    res.sendFile(__dirname + '/voice_message.html');
});

app.get('/UI/parcel.html', (req, res) => {
    res.sendFile(__dirname + '/UI/parcel.html');
});

app.get('/UI/meter_reading.html', (req, res) => {
    res.sendFile(__dirname + '/UI/meter_reading.html');
});

app.get('/UI/neighbor.html', (req, res) => {
    res.sendFile(__dirname + '/UI/neighbor.html');
});

app.get('/UI/public.html', (req, res) => {
    res.sendFile(__dirname + '/UI/public.html');
});

io.on('connection', (socket) => {
    socket.on('mouse', (data) => {
      fs.writeFileSync('../../Python_voice_message/yourname.txt', data);
      var readMe = fs.readFileSync('../../Python_voice_message/state.txt','utf8');
      if (readMe === "0"){
        fs.writeFileSync('../../Python_voice_message/state.txt', "1");
      }
      else{
        fs.writeFileSync('../../Python_voice_message/state.txt', "0");
      }
    });

    socket.on('cancel', () => {
      fs.writeFileSync('../../Python_voice_message/state.txt', "0");
      fs.writeFileSync('../../Python_voice_message/state2.txt', "1");
    });
  });

http.listen(3002, () => {
    console.log('server start : 3002 port');
});