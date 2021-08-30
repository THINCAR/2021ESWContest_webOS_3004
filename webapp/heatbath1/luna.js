var bridge = new WebOSServiceBridge();

/*
*  콜백함수 정의
*/

function default_callback(msg){
    var arg = JSON.parse(msg);
    if (arg.returnValue) {
        console.log("[Method] Success");
    }
    else{
        console.error("[Method] Failed, error <" + arg.errorCode + "> : " + arg.errorText);
    }
}

/*
 * LS2 API 메서드 함수화
 */

function toast(msg){
    var url = 'luna://com.domain.tutorial.service/toast'
    var params = JSON.stringify({
        "msg": msg
    })
    bridge.onservicecallback = default_callback;
    bridge.call(url,params);
}

function testTTS(text){
    var url = 'luna://com.webos.service.tts/speak'
    var params = JSON.stringify({
        "text": text,
        "clear":true
    })
    bridge.onservicecallback = default_callback;
    bridge.call(url,params);
}

function fetch(link,path){
    var url = 'luna://com.domain.tutorial.service/fetch'
    var params = JSON.stringify({
        "link": link,
        "text": path
    })
    bridge.onservicecallback = default_callback;
    bridge.call(url,params);
}