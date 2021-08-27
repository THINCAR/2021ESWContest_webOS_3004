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
        document.getElementById("recipe_description").innerHTML = "<h1>메뉴이름 : 수제레몬청</h><p>수제레몬청은 추운 겨울철에 몸을 녹일 수 있는 최고의 음식입니다.</p><p>조리법 : -</p>";
    }
    else if (menu == "당근전"){
        document.getElementById("recipe_description").innerHTML = "<h1>메뉴이름 : 당근전</h><p>당근전은 당근을 활용한 건강식품으로서 남녀노소가 즐길 수 있습니다.</p><p>조리법 : -</p>";
    }
    else if (menu == "당면계란전"){
        document.getElementById("recipe_description").innerHTML = "<h1>메뉴이름 : 당면계란전</h><p>당면계란전은 당면과 계란을 활용한 이색음식입니다.</p><p>조리법 : -</p>";
    }
    else if (menu == "사과팬케이크"){
        document.getElementById("recipe_description").innerHTML = "<h1>메뉴이름 : 사과팬케이크</h><p>사과팬케이크는 특히 어린이들에게 인기가 좋은 음식입니다.</p><p>조리법 : -</p>";
    }
    document.getElementById("recipe_box").style.display = "block";
}

function sendKakaotalk() {
    var menu = this.getAttribute("data-menu");
    if (menu == "수제레몬청"){
        alert("수제레몬청에 대한 조리법을 전송 완료하였습니다.");
    }
    else if (menu == "당근전"){
        alert("당근전에 대한 조리법을 전송 완료하였습니다.");
    }
    else if (menu == "당면계란전"){
        alert("당면계란전에 대한 조리법을 전송 완료하였습니다.");
    }
    else if (menu == "사과팬케이크"){
        alert("사과팬케이크에 대한 조리법을 전송 완료하였습니다.");
    }
}