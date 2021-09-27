var record = document.querySelector("#record");
var cancel = document.querySelector("#cancel");
var back = document.querySelector("#back");
var timeStamp = document.querySelector("#time");
var message = document.querySelector("#alert_message");
var snackbar = document.querySelector("#snackbar");

var record_toggle = false;
record.addEventListener("click", () => {
    if (record_toggle){
        record_toggle = false;
        snackbar.innerHTML = "녹음이 정상적으로 저장되었습니다.";
        myFunction();
        setTimeout(`location.href = "../index.html"`,1000);
    }
    else{
        record_toggle = true;
        message.innerHTML = "녹음기 버튼을 다시 누르면 녹음이 종료됩니다.";
        snackbar.innerHTML = "녹음이 시작되었습니다.";
        myFunction();
    }
})

cancel.addEventListener("click", () => {
    snackbar.innerHTML = "녹음이 취소되었습니다.";
    myFunction();
    setTimeout(`location.href = "../index.html"`,1000);
})

back.addEventListener("click", () => {
    location.href = "../voice_message.html";
});
    
$(document).ready(function(){
    buttonEvt();
});

function init(){
    timeStamp.innerHTML = "00:00:00";
}

var time = 0;
var startFlag = false;
var hour = 0;
var min = 0;
var sec = 0;
var timer;

function buttonEvt(){
    record.addEventListener("click",function(){
        if(startFlag){
            pauseTimer();
        }
        else{
            startTimer();
        }
    })
    cancel.addEventListener("click",stopTimer);
}


function startTimer(){
    if(!startFlag){
        startFlag = true;
        
        if(time==0){
            init();
        }

        timer = setInterval(function(){
            time++;

            min = Math.floor(time/60);
            hour = Math.floor(min/60);
            sec = time%60;
            min = min%60;

            var th = hour;
            var tm = min;
            var ts = sec;
            if(th<10){
                th = "0" + hour;
            }
            if(tm < 10){
                tm = "0" + min;
            }
            if(ts < 10){
                ts = "0" + sec;
            }

            timeStamp.innerHTML = th + ":" + tm + ":" + ts;
        }, 1000);
        record.style.backgroundColor = "red";
    }
}
function pauseTimer(){
    clearInterval(timer);
    startFlag = false;
    record.style.backgroundColor = "grey";
}
function stopTimer(){
    clearInterval(timer);
    startFlag = false;
    time = 0;
    init();
    record.style.backgroundColor = "grey";
}

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
  }