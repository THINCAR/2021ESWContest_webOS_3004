
bath_link = "http://192.168.0.35/"
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

        fetch(bath_link,"waterlow");
    }
    else{
        $('li').siblings().removeClass('active2')
        tempLevel.removeEventListener("click",tempLevelEvent)
        
        $('li').siblings().removeClass('active3')
        waterLevel.removeEventListener("click",waterLevelEvent)
        fetch(bath_link,"watermid");
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
        fetch(bath_link,"one");
    };
    if(target.classList.contains("temp2")){
        fetch(bath_link,"two");
    };
    if(target.classList.contains("temp3")){
        fetch(bath_link,"three");
    };
    if(target.classList.contains("temp4")){
        fetch(bath_link,"four");
    };
    if(target.classList.contains("temp5")){
        fetch(bath_link,"five");
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
        fetch(bath_link,"one");
    };
    if(target.classList.contains("water2")){
        fetch(bath_link,"two");
    };
    if(target.classList.contains("water3")){
        fetch(bath_link,"three");
    };
    if(target.classList.contains("water4")){
        fetch(bath_link,"four");
    };
    if(target.classList.contains("water5")){
        fetch(bath_link,"five");
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
