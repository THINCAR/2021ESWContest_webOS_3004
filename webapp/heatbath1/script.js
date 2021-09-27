bath_link = "http://192.168.0.45/"
heat_link = "http://192.168.0.35/"

let sidebar = document.querySelector(".sidebar");
let bathSwitch = document.querySelector("#bath_onoff")
let tempLevel = document.querySelector("#temp_level")
let waterLevel = document.querySelector("#water_level")
let heatSwitch = document.querySelector("#heat_onoff")
let heatLevel = document.querySelector("#heat_level")

function doShow1() { 
    if ($('#aa').is(":visible")) {  
        
    }   
    else {
        $('#bb').hide();
        $('#aa').show(); 
    } 
} 

function doShow2() { 
    if ($('#bb').is(":visible")) { 
        
    }   
    else { 
        $('#aa').hide(); 
        $('#bb').show(); 
    } 
}

bathSwitch.addEventListener("click", (e)=>{
    bathSwitch.classList.toggle('active');
    if(bathSwitch.classList.contains("active")){
        temp1 = document.querySelector(".temp1");
        $('.temp1').siblings().removeClass('active2');
        temp1.classList.add('active2');
        tempLevel.addEventListener("click",tempLevelEvent)
        
        water1 = document.querySelector(".water1");
        $('.water1').siblings().removeClass('active3');
        water1.classList.add('active3');
        waterLevel.addEventListener("click",waterLevelEvent)
        fetch(bath_link,"watera");
        fetch(bath_link,"waterone");
    }
    else{
        $('li').siblings().removeClass('active2')
        tempLevel.removeEventListener("click",tempLevelEvent)
        
        $('li').siblings().removeClass('active3')
        waterLevel.removeEventListener("click",waterLevelEvent)
        fetch(bath_link,"turnoff");
    }
    console.log(target)
})

heatSwitch.addEventListener("click", (e)=>{
    heatSwitch.classList.toggle('active');
    if(heatSwitch.classList.contains("active")){
        heat1 = document.querySelector(".heat1");
        $('.heat1').siblings().removeClass('active1');
        heat1.classList.add('active1');
        heatLevel.addEventListener("click",heatLevelEvent)
        fetch(heat_link,"one");
    }
    else{
        $('li').siblings().removeClass('active1')
        heatLevel.removeEventListener("click",heatLevelEvent)
        fetch(heat_link,"turnoff");
    }
    console.log(target)
})

function heatLevelEvent(e){
    let target = e.target;
    if ($(e.target).is('button')){
        target = target.parentElement;
    }
    $('li').siblings().removeClass('active1');
    target.classList.add('active1');
    console.log(target)
    if(target.classList.contains("heat1")){
        fetch(heat_link,"one");
    };
    if(target.classList.contains("heat2")){
        fetch(heat_link,"two");
    };
    if(target.classList.contains("heat3")){
        fetch(heat_link,"three");
    };
    if(target.classList.contains("heat4")){
        fetch(heat_link,"four");
    };
    if(target.classList.contains("heat5")){
        fetch(heat_link,"five");
    };
}

function tempLevelEvent(e){
    let target = e.target;
    if ($(e.target).is('button')){
        target = target.parentElement;
    }
    $('li').siblings().removeClass('active2');
    target.classList.add('active2');
    console.log(target)
    if(target.classList.contains("temp1")){
        fetch(bath_link,"waterone");
    };
    if(target.classList.contains("temp2")){
        fetch(bath_link,"watertwo");
    };
    if(target.classList.contains("temp3")){
        fetch(bath_link,"waterthree");
    };
    if(target.classList.contains("temp4")){
        fetch(bath_link,"waterfour");
    };
    if(target.classList.contains("temp5")){
        fetch(bath_link,"waterfive");
    };
}

function waterLevelEvent(e){
    let target = e.target;
    if ($(e.target).is('button')){
        target = target.parentElement;
    }
    $('li').siblings().removeClass('active3');
    target.classList.add('active3');
    console.log(target)
    if(target.classList.contains("water1")){
        fetch(bath_link,"watera");
    };
    if(target.classList.contains("water2")){
        fetch(bath_link,"waterb");
    };
    if(target.classList.contains("water3")){
        fetch(bath_link,"waterc");
    };
    if(target.classList.contains("water4")){
        fetch(bath_link,"waterd");
    };
    if(target.classList.contains("water5")){
        fetch(bath_link,"watere");
    };
}


function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
}

$('#aa').show();
$('#bb').hide();


var attitude = 100;
var drowsiness = 0;
var attitude_progress = document.querySelector("#attitude");
var drowsiness_progress = document.querySelector("#drowsiness");
var attitude_text = document.querySelector("#attitude_text");
var drowsiness_text = document.querySelector("#drowsiness_text");

// update
var xhttp_1 = new XMLHttpRequest();
var link = "http://192.168.0.21:8888/";

function drowsiness_change(status){
    console.log("Drowsiness: " + status);
    if (status == "0"){
        if (drowsiness>0) {drowsiness -= 1;}
    }
    else if(status == "1"){
        if (drowsiness<100) {drowsiness += 1;}
    }
    drowsiness_progress.style.strokeDashoffset = 80 - (drowsiness/100 * 80)
    if (drowsiness<33){
        drowsiness_text.style.color="#04c";
    }
    else if(drowsiness<66){
        drowsiness_text.style.color="#0c4";
    }
    else{
        drowsiness_text.style.color="#c44";
    }
    drowsiness_text.innerHTML = drowsiness.toString();
}

xhttp_1.onreadystatechange = () => {
    if (xhttp_1.readyState === xhttp_1.DONE) {
        if (xhttp_1.status === 200 || xhttp_1.status === 201) {
            var status = xhttp_1.responseText;
            drowsiness_change(status);
            setTimeout(()=>{drowsiness_change(status)},100);
        } else {
            console.error(xhttp_1.responseText);
        }
        setTimeout(get_drowsiness,200);
    }
};

function get_drowsiness(){
    xhttp_1.open('GET', link + "detect");
    xhttp_1.send();
}
get_drowsiness();


var xhttp_2 = new XMLHttpRequest();
var link = "http://192.168.0.21:8888/";

function attitude_change(status){
    console.log("Attitude: " + status);
    if (status == "0"){
        if (attitude<100) {attitude += 1;}
    }
    else if(status == "1"){
        if (attitude>0) {attitude -= 1;}
        if (attitude<50){warning();}
    }
    attitude_progress.style.strokeDashoffset = attitude/100 * 80;
    if (attitude<33){
        attitude_text.style.color="#c44";
    }
    else if(attitude<66){
        attitude_text.style.color="#0c4";
    }
    else{
        attitude_text.style.color="#04c";
    }
    attitude_text.innerHTML = attitude.toString();
}

xhttp_2.onreadystatechange = () => {
    if (xhttp_2.readyState === xhttp_2.DONE) {
        if (xhttp_2.status === 200 || xhttp_2.status === 201) {
            var status = xhttp_2.responseText;
            attitude_change(status);
            setTimeout(()=>{attitude_change(status)},100);
        } else {
            console.error(xhttp_2.responseText);
        }
        setTimeout(get_attitude,200);
    }
};

function get_attitude(){
    xhttp_2.open('GET', link + "attitude");
    xhttp_2.send();
}

get_attitude();

var warning_flag = true

function warning(){
    if (warning_flag){
        testTTS("집중도가 떨어집니다. 집중해주세요!");
        warning_flag = false;
    }
}