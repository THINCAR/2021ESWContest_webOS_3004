var http = require('http')
var path = require('path')
var express = require('express')
var luna = require('./luna');
var db = require('./db');
var multer = require('multer')
var door_path = '/media/developer/apps/usr/palm/applications/com.domain.tutorial/door1/uploads'
var refrigerator_path = '/media/developer/apps/usr/palm/applications/com.domain.tutorial/refrigerator1/uploads'
var upload_door = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, door_path);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
})
var upload_refrigerator = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, refrigerator_path);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
})

function init(service){
    var app = express();
    var port = 5555;
    app.use(express.static('./'));
    app.use(express.json());
    app.use(express.static(__dirname + "/refrigerator_client"))
    luna.init(service)

    app.post('/upload_door',upload_door.single('file'), (req,res)=>{
        console.log(req)
        console.log("[Request] URI: '/upload_door'")
        res.sendStatus(200)
    });
    app.post('/upload_ref',upload_refrigerator.single('file'),(req,res)=>{
        console.log(req)
        console.log("[Request] URI: '/upload_ref'")
        res.sendStatus(200)
    })
    app.get('/',function (req, res){
        res.sendFile('sample.html', { root: '.' });
        luna.toast("'/' is requested from client");
        console.log("[Request] URI: '/' ");
    });

    app.get('/hi',function (req, res){
        res.send('<p> hello~ </p>');
        luna.toast("'/hi' is requested from client")
        console.log("[Request] URI: '/hi'");
    })
    app.get('/visitor_update',function (req, res){
        res.send('<p> speaking~ </p>');
        luna.tts("방문자 음성메시지가 도착 하였습니다.");
        luna.toast("방문자 음성메시지가 도착 하였습니다.")
        console.log("[Request] URI: '/speak'")
    })
    app.get('/detection_update',function (req, res){
        res.send('<p> speaking~ </p>');
        luna.tts("현관에 사람이 감지 되었습니다.");
        luna.toast("현관에 사람이 감지 되었습니다.")
        console.log("[Request] URI: '/speak'")
    })
    app.get('/refrigerator',function (req,res){
        res.sendFile('./index.html',{ root: __dirname + "/refrigerator_client" })
    })


    const server = http.createServer(app);
    server.listen(port,() => {
        console.log("Express server has started");
    });

    const io = require("socket.io")(server);

    io.on("connection", socket =>{
        var status = true;
        var callback = (m)=>{
            socket.emit("menu",m);
        }
        db.findMenubyStatus(status,callback);
    
        exports.socket = socket;
    });
}


exports.init = init;
