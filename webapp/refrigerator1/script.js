let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
}

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

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

function food_list_load(files) {
    var file1 = files;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file1, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                document.getElementById("foodList").innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}

function showLightbox() {
    var menu = this.getAttribute("data-menu");
    if (menu == "수제레몬청"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/003.jpg' class='recipe_img'/>";
    }
    else if (menu == "당근전"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/005.jpg' class='recipe_img'/>";
    }
    else if (menu == "당면계란전"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/006.jpg' class='recipe_img'/>";
    }
    else if (menu == "사과팬케이크"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/007.jpg' class='recipe_img'/>";
    }
    else if (menu == "파인애플볶음밥"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/001.jpg' class='recipe_img'/>";
    }
    else if (menu == "포도푸딩"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/002.jpg' class='recipe_img'/>";
    }
    else if (menu == "브로콜리새우볶음"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/004.jpg' class='recipe_img'/>";
    }
    else if (menu == "호박베이컨볶음"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/008.jpg' class='recipe_img'/>";
    }
    else if (menu == "토마토샤브샐러드"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/009.jpg' class='recipe_img'/>";
    }
    else if (menu == "오이초밥"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/010.jpg' class='recipe_img'/>";
    }
    else if (menu == "복숭아우유"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/011.jpg' class='recipe_img'/>";
    }
    else if (menu == "새송이버섯간장버터구이"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/012.jpg' class='recipe_img'/>";
    }
    else if (menu == "두부망고샐러드"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/013.jpg' class='recipe_img'/>";
    }
    else if (menu == "바나나팬케이크"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/014.jpg' class='recipe_img'/>";
    }
    else if (menu == "떠먹는치즈감자"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/015.jpg' class='recipe_img'/>";
    }
    else if (menu == "훈제닭가슴살샐러드"){
        document.getElementById("recipe_description").innerHTML = "<img src='./recipe_img/016.jpg' class='recipe_img'/>";
    }
    document.getElementById("recipe_box").style.display = "block";
}

function sendKakaotalk() {
    var menu = this.getAttribute("data-menu");
    if (menu == "수제레몬청"){
        toast("수제레몬청에 대한 조리법을 전송 완료하였습니다.");
        update_status(1,true);
        emit("menu","1");
    }
    else if (menu == "당근전"){
        toast("당근전에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","2");
    }
    else if (menu == "당면계란전"){
        toast("당면 계란전에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","3");
    }
    else if (menu == "사과팬케이크"){
        toast("사과 팬케이크에 대한 조리법을 전송 완료하였습니다.");
        update_status(4,true)
        emit("menu","4");
    }
    else if (menu == "파인애플볶음밥"){
        toast("파인애플 볶음밥에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","5");
    }
    else if (menu == "포도푸딩"){
        toast("포도푸딩에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","6");
    }
    else if (menu == "브로콜리새우볶음"){
        toast("브로콜리 새우볶음에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","7");
    }
    else if (menu == "호박베이컨볶음"){
        toast("호박 베이컨볶음에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","8");
    }
    else if (menu == "토마토샤브샐러드"){
        toast("토마토 샤브샐러드에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","9");
    }
    else if (menu == "오이초밥"){
        toast("오이초밥에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","10");
    }
    else if (menu == "복숭아우유"){
        toast("복숭아우유에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","11");
    }
    else if (menu == "새송이버섯간장버터구이"){
        toast("새송이버섯 간장버터구이에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","12");
    }
    else if (menu == "두부망고샐러드"){
        toast("두부 망고샐러드에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","13");
    }
    else if (menu == "바나나팬케이크"){
        toast("바나나 팬케이크에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","14");
    }
    else if (menu == "떠먹는치즈감자"){
        toast("떠먹는 치즈감자에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","15");
    }
    else if (menu == "훈제닭가슴살샐러드"){
        toast("훈제닭가슴살 샐러드에 대한 조리법을 전송 완료하였습니다.");
        emit("menu","16");
    }
}