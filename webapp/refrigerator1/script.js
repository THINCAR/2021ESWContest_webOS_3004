
var object_data = undefined

function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
}


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

find_all((m)=>{
    arg = JSON.parse(m);
    object_data = arg.data;
    console.log(object_data);
    setFood();
    setButton();
});

function showLightbox() {
    var menu = this.getAttribute("data-menu");
    object_data.forEach((data)=>{
        if (menu == data.name){
            document.getElementById("recipe_description").innerHTML = `<img src='./recipe_img/${data.recipe}' class='recipe_img'/>`;
        }
    });
    document.getElementById("recipe_box").style.display = "block";
}

function sendKakaotalk() {
    var menu = this.getAttribute("data-menu");
    object_data.forEach((data)=>{
        if (menu == data.name){
            toast(`${data.name}에 대한 조리법을 전송 완료하였습니다.`);
            update_status(data.id,true);
        }
    });
}

function setButton() {
    var recipes = document.getElementsByClassName("recipe");
    for (let item of recipes) {
        item.addEventListener("click", showLightbox);
    }
    var kakao = document.getElementsByClassName("to_kakao");
    for (let item of kakao) {
        item.addEventListener("click", sendKakaotalk);
    };
}

$('#aa').show();
$('#bb').hide();

food_list_load("./uploads/food_list.txt");

var object = "";
var menu = "";

function food_load(files, picture, menus = "") {
    var file2 = files;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file2, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                if (allText > 0){
                    object += "<div class='O-box'><img src='./object_img/" + picture + "' class='O-img'><div class='number'>" + allText + "</div></div>";
                    menu += menus;
                }
            }
        }
    }
    rawFile.send(null);
}

function setFood(){
    object_data.forEach((data)=>{
        food_load(
            `./uploads/${data.text}.txt`,
            `${data.text}.png`,
            `<div class='menu'>
                <img src='./menu_recommand/${data.img}'class='menu_image'>
                <div class='menu_description'>
                    <p>메뉴이름 : ${data.name}</p>
                    <p>활용한 식재료 : ${data.ingredient}</p><p>필요한 식재료 : ${data.need}</p>
                    <div class='menu_button'>
                        <div class='recipe' data-menu='${data.name}'>조리법 보기</div>
                        <div class='to_kakao' data-menu='${data.name}'>냉장고로 조리법 전송</div>
                    </div>
                </div>
            </div>`
        );
    });

    document.getElementById("refri-object2").innerHTML = object;
    document.getElementById("menu_list").innerHTML = menu;
}

document.getElementById("exit").onclick = function() {
    document.getElementById("recipe_box").style.display = "none";
}