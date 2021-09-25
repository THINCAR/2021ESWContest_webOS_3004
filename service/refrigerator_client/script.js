const socket = io("ws://192.168.0.72:5555");
var object_data = undefined;


socket.on("menu", (data) => {
    console.log("menu 이벤트가 호출 되었습니다.");
	console.log(data);
    object_data = data.payload.results;
    showData();
    setButton();
});

var menu = "";

function showData(){
    object_data.forEach((data)=>{
        menu += `
        <div class='menu'>
            <img src='./menu_recommand/${data.img}' class='menu_image'>
            <div class='menu_description'>
                <p>메뉴이름 : ${data.name}</p>
                <p>활용한 식재료 : ${data.ingredient}</p>
                <p>필요한 식재료 : ${data.need}</p>
                <div class='menu_button'>
                    <div class='recipe' data-menu='${data.name}'>조리법 보기</div>
                    <div class='to_kakao' data-menu='${data.name}'>조리법 영상보기</div>
                </div>
            </div>
        </div>
        `;
    });
    document.getElementById("menu_list").innerHTML = menu;
}


function showLightbox() {
    var menu = this.getAttribute("data-menu");
    object_data.forEach((data)=>{
        if(menu == data.name){
            document.getElementById("recipe_description").innerHTML = `<img src='./recipe_img/${data.recipe}' class='recipe_img'/>`;
        }
    })
    document.getElementById("recipe_box").style.display = "block";
}

function showLightbox2() {
    var menu = this.getAttribute("data-menu");
    object_data.forEach((data)=>{
        if(menu == data.name){
            document.getElementById("video_description").innerHTML = `<iframe src='${data.youtube}' title='recipe_video' width='500px' height='320px'></iframe>`;
        }
    })
    document.getElementById("video_box").style.display = "block";
}

function setButton() {
    var recipes = document.getElementsByClassName("recipe");
    recipes.forEach((recipe)=>{
        recipe.addEventListener("click", showLightbox);
    })
    var kakao = document.getElementsByClassName("to_kakao");
    kakao.forEach((data)=>{
        data.addEventListener("click", showLightbox2);
    })
}



document.getElementById("exit").onclick = function() {
    document.getElementById("recipe_box").style.display = "none";
}

document.getElementById("exit2").onclick = function() {
    document.getElementById("video_box").style.display = "none";
}

function degreeUp1() {
    var data = document.getElementById("d1").innerText;
    data = Number(data);
    data = data + 1;
    document.getElementById("d1").innerText = data;
}

function degreeDown1() {
    var data = document.getElementById("d1").innerText;
    data = Number(data);
    data = data - 1;
    document.getElementById("d1").innerText = data;
}

function degreeUp2() {
    var data = document.getElementById("d2").innerText;
    data = Number(data);
    data = data + 1;
    document.getElementById("d2").innerText = data;
}

function degreeDown2() {
    var data = document.getElementById("d2").innerText;
    data = Number(data);
    data = data - 1;
    document.getElementById("d2").innerText = data;
}