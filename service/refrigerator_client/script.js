const socket = io("ws://192.168.0.72:5555");

socket.on("menu", (data) => {
    console.log("menu 이벤트가 호출 되었습니다.");
	console.log(data);
});

var menu = "";
menu += "<div class='menu'><img src='./menu_recommand/applepancake.jpg' class='menu_image'><div class='menu_description'><p>메뉴이름 : 사과 팬케이크</p><p>활용한 식재료 : 사과</p><p>필요한 식재료 : 핫케이크믹스, 우유, 꿀</p><div class='menu_button'><div class='recipe' data-menu='사과팬케이크'>조리법 보기</div><div class='to_kakao' data-menu='사과팬케이크'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/carrotpancake.jpg' class='menu_image'><div class='menu_description'><p>메뉴이름 : 당근전</p><p>활용한 식재료 : 당근</p><p>필요한 식재료 : 부침가루, 애호박</p><div class='menu_button'><div class='recipe' data-menu='당근전'>조리법 보기</div><div class='to_kakao' data-menu='당근전'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/eggpancake.jpg' class='menu_image'><div class='menu_description'><p>메뉴이름 : 당면계란전</p><p>활용한 식재료 : 계란</p><p>필요한 식재료 : 당면, 대파, 부추</p><div class='menu_button'><div class='recipe' data-menu='당면계란전'>조리법 보기</div><div class='to_kakao' data-menu='당면계란전'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/lemonade.jpg' class='menu_image'><div class='menu_description'><p>메뉴이름 : 수제레몬청</p><p>활용한 식재료 : 레몬</p><p>필요한 식재료 : 설탕, 베이킹소다</p><div class='menu_button'><div class='recipe' data-menu='수제레몬청'>조리법 보기</div><div class='to_kakao' data-menu='수제레몬청'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/bananapancake.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 바나나 팬케이크</p><p>활용한 식재료 : 바나나</p><p>필요한 식재료 : 핫케이크믹스, 우유</p><div class='menu_button'><div class='recipe' data-menu='바나나팬케이크'>조리법 보기</div><div class='to_kakao' data-menu='바나나팬케이크'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/orangesalad.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 훈제닭가슴살 샐러드</p><p>활용한 식재료 : 오렌지</p><p>필요한 식재료 : 닭가슴살, 양파</p><div class='menu_button'><div class='recipe' data-menu='훈제닭가슴살샐러드'>조리법 보기</div><div class='to_kakao' data-menu='훈제닭가슴살샐러드'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/potatocheese.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 떠먹는 치즈감자</p><p>활용한 식재료 : 감자</p><p>필요한 식재료 : 치즈, 베이컨, 우유</p><div class='menu_button'><div class='recipe' data-menu='떠먹는치즈감자'>조리법 보기</div><div class='to_kakao' data-menu='떠먹는치즈감자'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/brocolishrimp.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 브로콜리 새우볶음</p><p>활용한 식재료 : 브로콜리</p><p>필요한 식재료 : 새우, 파프리카</p><div class='menu_button'><div class='recipe' data-menu='브로콜리새우볶음'>조리법 보기</div><div class='to_kakao' data-menu='브로콜리새우볶음'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/pumpkinbacon.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 호박 베이컨볶음</p><p>활용한 식재료 : 호박</p><p>필요한 식재료 : 베이컨, 다진마늘</p><div class='menu_button'><div class='recipe' data-menu='호박베이컨볶음'>조리법 보기</div><div class='to_kakao' data-menu='호박베이컨볶음'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/tomatosalad.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 토마토 샤브샐러드</p><p>활용한 식재료 : 토마토</p><p>필요한 식재료 : 돼지고기, 꽈리고추, 양파</p><div class='menu_button'><div class='recipe' data-menu='토마토샤브샐러드'>조리법 보기</div><div class='to_kakao' data-menu='토마토샤브샐러드'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/cucumberroll.jpeg' class='menu_image'><div class='menu_description'><p>메뉴이름 : 오이초밥</p><p>활용한 식재료 : 오이</p><p>필요한 식재료 : 맛살, 마요네즈</p><div class='menu_button'><div class='recipe' data-menu='오이초밥'>조리법 보기</div><div class='to_kakao' data-menu='오이초밥'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/grapepuding.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 포도푸딩</p><p>활용한 식재료 : 포도</p><p>필요한 식재료 : 젤라틴, 설탕</p><div class='menu_button'><div class='recipe' data-menu='포도푸딩'>조리법 보기</div><div class='to_kakao' data-menu='포도푸딩'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/mangosalad.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 두부 망고샐러드</p><p>활용한 식재료 : 망고</p><p>필요한 식재료 : 두부</p><div class='menu_button'><div class='recipe' data-menu='두부망고샐러드'>조리법 보기</div><div class='to_kakao' data-menu='두부망고샐러드'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/mushroombutter.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 새송이버섯 간장버터구이</p><p>활용한 식재료 : 버섯</p><p>필요한 식재료 : 버터, 올리고당, 맛술</p><div class='menu_button'><div class='recipe' data-menu='새송이버섯간장버터구이'>조리법 보기</div><div class='to_kakao' data-menu='새송이버섯간장버터구이'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/peachmilk.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 복숭아우유</p><p>활용한 식재료 : 복숭아</p><p>필요한 식재료 : 우유, 레몬즙</p><div class='menu_button'><div class='recipe' data-menu='복숭아우유'>조리법 보기</div><div class='to_kakao' data-menu='복숭아우유'>조리법 영상보기</div></div></div></div>";
menu += "<div class='menu'><img src='./menu_recommand/pineapplerice.png' class='menu_image'><div class='menu_description'><p>메뉴이름 : 파인애플 볶음밥</p><p>활용한 식재료 : 파인애플</p><p>필요한 식재료 : 새우, 햄, 양파</p><div class='menu_button'><div class='recipe' data-menu='파인애플볶음밥'>조리법 보기</div><div class='to_kakao' data-menu='파인애플볶음밥'>조리법 영상보기</div></div></div></div>";

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

function showLightbox2() {
    var menu = this.getAttribute("data-menu");
    if (menu == "수제레몬청"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/kwI5VQ-cMNw' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "당근전"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/n3uJgSekFA0' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "당면계란전"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/UHDwTKw6S2E' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "사과팬케이크"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/RwKND221-HE' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "파인애플볶음밥"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/a1F_McV39xQ' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "포도푸딩"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/g1R6Mf5pUXE' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "브로콜리새우볶음"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/P3HTlbeZBvo' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "호박베이컨볶음"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/JUWhW4o-BTE' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "토마토샤브샐러드"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/T28MmfD-gBY' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "오이초밥"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/P0aeboo_MAQ' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "복숭아우유"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/Kvz_PwLHtow' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "새송이버섯간장버터구이"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/XM-K0tn07jk' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "두부망고샐러드"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/7tpz-b-PDR0' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "바나나팬케이크"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/tKLFKQxeaOU' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "떠먹는치즈감자"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/aLFthsqNjGk' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    else if (menu == "훈제닭가슴살샐러드"){
        document.getElementById("video_description").innerHTML = "<iframe src='https://www.youtube.com/embed/XzvFFCVCGF8' title='recipe_video' width='500px' height='320px'></iframe>";
    }
    document.getElementById("video_box").style.display = "block";
}

document.getElementById("menu_list").innerHTML = menu;

var recipes = document.getElementsByClassName("recipe");
for (i=0; i<recipes.length; i++){
    recipes[i].addEventListener("click", showLightbox);
}
var kakao = document.getElementsByClassName("to_kakao");
for (i=0; i<kakao.length; i++){
    kakao[i].addEventListener("click", showLightbox2);
}

document.getElementById("exit").onclick = function() {
    document.getElementById("recipe_box").style.display = "none";
}

document.getElementById("exit2").onclick = function() {
    document.getElementById("video_box").style.display = "none";
}

// document.getElementById("back").addEventListener("click", () => {
//     location.href = "./index.html";
// });

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