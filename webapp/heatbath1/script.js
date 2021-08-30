
bath_link = "http://192.168.0.35/"
heat_link = "http://192.168.0.35/"

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let bathSwitch = document.querySelector("#bath_onoff")
let heatSwitch = document.querySelector("#heat_onoff")

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
    let target = e.target;
    if(target.classList.contains("active")){
        fetch(bath_link,"waterlow");
    }
    else{
        fetch(bath_link,"watermid");
    }
    console.log(target)
})

heatSwitch.addEventListener("click", (e)=>{
    let target = e.target;
    if(target.classList.contains("active")){
        fetch(heat_link,"waterlow");
    }
    else{
        fetch(heat_link,"watermid");
    }
    console.log(target)
})


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
        $(this).siblings().removeClass('active1');
        $(this).addClass('active1');
    })
})

$(document).ready(function(){
    $('li').on('click',function(){
        $(this).siblings().removeClass('active2');
        $(this).addClass('active2');
    })
})

//	$(document).ready(function(){
//	$('li').on('click',function(){
//		$(this).siblings().removeClass('act');
//		$(this).addClass('act');
//	})
//	})