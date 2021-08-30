function select(num) {
    document.getElementById("audio").src = './uploads/result' + num + '.wav'
}

window.onload = function() {
    module_link = "http://192.168.0.35/"

    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let menu1 = document.querySelector("#menu_1");
    let menu2 = document.querySelector("#menu_2");
    let menu3 = document.querySelector("#menu_3");

    let btn_a = document.querySelector("#button_a")
    let btn_b = document.querySelector("#button_b")

    let page1 = document.querySelector("#aa");
    let page2 = document.querySelector("#bb");
    let page3 = document.querySelector("#cc");


    function menuBtnChange() {
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        }
        else {
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
        }
    }
  
    for (i=0; i<10; i++) {
        file = "./uploads/name" + i + ".txt";
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    document.getElementById("name" + i).innerHTML = allText;
                    document.getElementById("message" + i).style.visibility = "visible";
                }
                else{
                    document.getElementById("name" + i).innerHTML = "";
                    document.getElementById("message" + i).style.visibility = "hidden";
                }
            }
        }
        rawFile.send(null);
    }
    
    closeBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    $('#aa').show();
    $('#bb').hide();
    $('#cc').hide(); 

    menu1.addEventListener("click",()=>{
        if ($('#aa').is(":visible")) {  
            
        }   
        else {
          $('#bb').hide();
          $('#aa').show();
          $('#cc').hide();  
        } 
    });
    menu2.addEventListener("click",()=>{
        if ($('#bb').is(":visible")) { 
            
        }   
        else { 
            $('#aa').hide();
            $('#cc').hide(); 
            $('#bb').show(); 
        } 
    });
    menu3.addEventListener("click",()=>{
        if ($('#cc').is(":visible")) { 
        
        }   
        else { 
            $('#aa').hide(); 
            $('#bb').hide();
            $('#cc').show(); 
        } 
    });
}