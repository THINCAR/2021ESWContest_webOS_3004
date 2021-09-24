/*
 * Copyright (c) 2020 LG Electronics Inc.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// helloworld_webos_service.js
// is simple service, based on low-level luna-bus API

// eslint-disable-next-line import/no-unresolved
const pkgInfo = require('./package.json');
const Service = require('webos-service');
const db = require('./db')

const service = new Service(pkgInfo.name); // Create service by service name on package.json
const logHeader = "[" + pkgInfo.name + "]";

const server = require('./server');
const fetch = require('node-fetch');

// how to persist server
service.activityManager.idleTimeout = 60 * 60 * 24 * 7; // 1 week
var keepAlive;
service.activityManager.create("keepAlive", function(activity){
    keepAlive = activity;
});

// toast service
service.register("toast", function(message){
    console.log(logHeader, "service called : /toast");
    var msg = message.payload.msg
    var param = {
        "message": msg
    };
    service.call("luna://com.webos.notification/createToast", param, function(m) {
        console.log(logHeader, m.payload.returnValue);
        message.respond({
            returnValue : m.payload.returnValue,
            id : m.payload.toastId,
            errorCode : m.payload.errorCode,
            errorText : m.payload.errorText 
        });
    });
})

// a method that always returns the same value
service.register("hello", function(message) {
    console.log(logHeader, "SERVICE_METHOD_CALLED:/hello");
    console.log("In hello callback");
    const name = message.payload.name ? message.payload.name : "World";

    message.respond({
        returnValue: true,
        Response: "Hello, " + name + "!"
    });
});

service.register("init", (message)=>{
    db.init(service);
    server.init(service);
    message.respond({
        returnValue: true
    });
});

service.register("fetch", function(message) {
    console.log(logHeader, "service called : /fetch");
    var link = message.payload.link;
    var text = message.payload.text;
    var url = link + text;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {

        })
        .catch(err => {
            console.log(err);
        });
    message.respond({
        returnValue: true
    });
});

service.register("emit", function(message) {
    console.log(logHeader, "service called : /emit");
    var id = message.payload.id;
    var arg = message.payload.arg;
    var socket = server.socket;
    
    message.respond({
        returnValue: true
    });
});

service.register("update_status", function(message) {
    console.log(logHeader, "service called : /update_status");
    var id = message.payload.id;
    var status = message.payload.status;
    var callback = (m)=> {
        var _id = m.payload.results[0]._id;
        db.updateStatus(_id,status);        
    }
    db.findMenubyID(id,callback);

    message.respond({
        returnValue: true
    });
    
});