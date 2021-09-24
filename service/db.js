var ls2 = undefined;

const kindID = "com.domain.tutorial.service:1";
const default_data = require("./default_db");

// data
// {
//     "name":"수제레몬청",
//     "img":"lemonade.jpg",
//     "ingredient":"레몬",
//     "need":"설탕, 베이킹소다",
//     "recipe":"007.jpg",
//     "youtube":"https://www.youtube.com/embed/RwKND221-HE"
// },


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
exports.updateStatus = updateStatus;