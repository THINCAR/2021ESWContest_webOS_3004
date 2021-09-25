var ls2 = undefined;

const kindID = "com.domain.tutorial.service:1";
const default_data = require("./default_db");

// data
// {
//     "id":1,
//     "name":"사과 팬케이크",
//     "img":"applepancake.jpg",
//     "text":"apple",
//     "ingredient":"사과",
//     "need":"핫케이크믹스, 우유, 꿀",
//     "recipe":"007.jpg",
//     "youtube":"https://www.youtube.com/embed/RwKND221-HE"
// }


function init(service){
    ls2 = service;
    putKind()
    putPermissions()
    emptyDB()
    default_data.data.forEach((data)=>{
        put(data);
    });
}


function putKind(){
    var url = "luna://com.webos.service.db/putKind";
    var params = {
        "id":kindID,
        "owner":"com.domain.tutorial.service",
        "indexes":[
            {
                "name": "index0",
                "props": [
                    {"name":"id"}
                ]
            },
            {
                "name": "index1",
                "props": [
                    {"name":"status"}
                ]
            }
        ]
    }
    var callback = (m) =>{
        console.log("called : "+ m);
    }
    ls2.call(url,params,callback)
}

function putPermissions(){
    var url = "luna://com.webos.service.db/putPermissions";
    var params = {
        "permissions":[
            {
                "operations":{
                    "read":"allow",
                    "create":"allow",
                    "update":"allow",
                    "delete":"allow"
                },
                "object":kindID,
                "type":"db.kind",
                "caller":"com.domain.tutorial.service"
            }
        ]
    };
    var callback = (m) =>{
        console.log("called : "+ m);
    }
    ls2.call(url,params,callback)
}

function put(data){
    var url = "luna://com.webos.service.db/put";
    var params = {
        "objects":[
            {
                "_kind": kindID,
                "id":data.id,
                "name": data.name,
                "img": data.img,
                "text": data.text,
                "ingredient": data.ingredient,
                "need": data.need,
                "recipe": data.recipe,
                "youtube": data.youtube,
                "status": false
            }
        ]
    };
    var callback = (m) =>{
        console.log("called : "+ m);
    }
    ls2.call(url,params,callback)
}

function emptyDB() {
    let url = 'luna://com.webos.service.db/del';
    let params = {
        "query":{ 
            "from":kindID
        }
    };
    var callback = (m) =>{console.log("called : " + m)}
    ls2.call(url, params, callback);
}

function findMenubyID(id,callback) {
    let url = 'luna://com.webos.service.db/find';
    let params = {
        "query":{ 
            "from":kindID,
            "where":[ 
               { 
                  "prop":"id",
                  "op":"=",
                  "val":id
               }
            ]
        }
    };
    ls2.call(url,params,callback)
}

function findMenubyStatus(status,callback) {
    let url = 'luna://com.webos.service.db/find';
    let params = {
        "query":{ 
            "from":kindID,
            "where":[ 
               { 
                  "prop":"status",
                  "op":"=",
                  "val":status
               }
            ]
        }
    };
    ls2.call(url,params,callback)
}

function findAll(callback) {
    let url = 'luna://com.webos.service.db/find';
    let params = {
        "query":{ 
            "from":kindID
        }
    };
    ls2.call(url,params,callback)
}


function updateStatus(_id,status){
    let url = 'luna://com.webos.service.db/merge';
    let params = {
        "objects":[
            {
                "_id": _id,
                "status": status
            }
        ]
    };
    var callback = (m) =>{console.log("called : " + m)};
    ls2.call(url,params,callback);
}


exports.init = init;
exports.putKind = putKind;
exports.putPermissions = putPermissions;
exports.emptyDB = emptyDB;
exports.put = put;
exports.findMenubyID = findMenubyID;
exports.findMenubyStatus = findMenubyStatus;
exports.findAll = findAll;
exports.updateStatus = updateStatus;
