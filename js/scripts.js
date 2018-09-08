window.onload = function() {
    pads();
    
    document.getElementById('select_btn').style.display="none";
};


function pads(){
    
    for (i=0;i<12;i++){
        
        document.getElementById('pads').innerHTML+="<a id='instrument_"+i+"'><div class='color_pads' id='pad"+i+"' onclick='function_pad"+i+"()'><img class='img_pads' id='pad_img_js"+i+"' src='imgs/icon_touchpad.svg'></div><a>";
                        

        document.getElementById('pad'+i).style.width="10%";
        document.getElementById('pad'+i).style.marginLeft="50px";
        document.getElementById('pad'+i).style.float="left";
        document.getElementById('pad'+i).style.marginLeft += 10 + "px";
        document.getElementById('pad'+i).style.border = "2px solid";     
        
        if (i==0) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/bass-guitar.png";
        }
        
        if (i==1) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/clarinet.png";
        }
        
        if (i==2) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/drum.png";
        }
        
        if (i==3) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/electric-guitar.png";
        }
        
        if (i==4) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/piano.png";
        }
        
        if (i==5) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/piccolo.png";
        }
        
        if (i==6) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/saxophone.png";
        }
        
        if (i==7) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/trumpet.png";
        }
        
        if (i==8) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/turntable.png";
        }
        
        if (i==9) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/ukelele.png";
        }
        
        if (i==10) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/violin.png";
        }
        
        if (i==11) {
            document.getElementById('pad_img_js'+i).src="imgs/choose_instrument/workstation.png";
        }
    }
}


//function padBorder(num) {
//    
//    console.log('click');
//    console.log(num);   
//    document.getElementById('pad_img_js'+num).style.border="2px solid black";
//  
//}



function function_pad0() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad0').style.border="2px solid white";
}


function function_pad1() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad1').style.border="2px solid white";
}


function function_pad2() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad2').style.border="2px solid white";
}


function function_pad3() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad3').style.border="2px solid white";
}


function function_pad4() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad4').style.border="2px solid white";
}


function function_pad5(){
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad5').style.border="2px solid white";
}

function function_pad6() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad6').style.border="2px solid white";
}

function function_pad7() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad7').style.border="2px solid white";
}

function function_pad8() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad8').style.border="2px solid white";
}


function function_pad9() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad9').style.border="2px solid white";
}


function function_pad10() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad10').style.border="2px solid white";
}


function function_pad11() {
    document.getElementById('select_btn').style.display="block";
    
    for (a = 0; a < 12; a++) {
        document.getElementById('pad' + a).style.borderColor="#252c3b";
    }

    document.getElementById('pad11').style.border="2px solid white";
}