
bath_link = "http://192.168.0.35/"
heat_link = "http://192.168.0.35/"

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let bathSwitch = document.querySelector("#bath_onoff")
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

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
});

bathSwitch.addEventListener("click", (e)=>{
    bathSwitch.classList.toggle('active');
    if(bathSwitch.classList.contains("active")){
        fetch(bath_link,"waterlow");
    }
    else{
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



function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
}

$('#aa').show();
$('#bb').hide();

$(document).ready(function(){
    $('li').on('click',function(){
        $(this).siblings().removeClass('active2');
        $(this).addClass('active2');
    })
});
