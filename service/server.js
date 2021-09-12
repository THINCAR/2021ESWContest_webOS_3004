var http = require('http')
var path = require('path')
var express = require('express')
var luna = require('./luna');
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
    app.get('/speak',function (req, res){
        res.send('<p> speaking~ </p>');
        luna.tts("안녕하세요~");
        console.log("[Request] URI: '/speak'")
    })


    const server = http.createServer(app);
    server.listen(port,() => {
        console.log("Express server has started");
    });
    const io = require("socket.io")(server, {
        cors: {
            origin: "https://localhost:5555",
        },
    });

    io.on("connection", socket =>{
        socket.send("Hello!");
        socket.emit("greetings", "Hey", {"ms":"jane"}, Buffer.from([4,3,3,1]));
        socket.on("message", (data) =>{
            console.log(data);
        });
        socket.on("salutations", (elem1, elem2, elem3) =>{
            console.log(elem1, elem2, elem3);
        });
    });
}


exports.init = init;
