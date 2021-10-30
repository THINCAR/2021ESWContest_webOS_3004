cctv_link = 'ws://192.168.0.20:9999'

function select(num) {
    document.getElementById("audio").src = './uploads/result' + num + '.wav'
}

doShow1()

function doShow1(){
    if ($('#aa').is(":visible")) { 
        
    }   
    else { 
        $('#cc').hide(); 
        $('#bb').hide();
        $('#aa').show();
        var client = new WebSocket(cctv_link);
        var canvas = document.querySelector('canvas');
        var player = new jsmpeg(client, {
		    canvas: canvas
	    });
    } 
}
function doShow2(){
    if ($('#bb').is(":visible")) { 
        
    }   
    else { 
        $('#aa').hide(); 
        $('#cc').hide();
        $('#bb').show(); 
    } 
}
function doShow3(){
    if ($('#cc').is(":visible")) { 
        
    }   
    else { 
        $('#aa').hide(); 
        $('#bb').hide();
        $('#cc').show(); 
    } 
}
window.onload = function() {

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
                    if (allText.length > 0){
                        document.getElementById("name" + i).innerHTML = allText;
                        document.getElementById("message" + i).style.visibility = "visible";
                    }
                    else {
                        document.getElementById("name" + i).innerHTML = "";
                        document.getElementById("message" + i).style.visibility = "hidden";
                    }  
                }
            }
        }
        rawFile.send(null);
    }

    for (i=0; i<10; i++) {
        file = "./uploads/" + i + ".txt";
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    if (allText.length > 0){
                        document.getElementById("dateTime" + i).innerHTML = allText;
                    }
                    else {
                        document.getElementById("dateTime" + i).innerHTML = "";
                    }  
                }
            }
        }
        rawFile.send(null);
    }
   
}