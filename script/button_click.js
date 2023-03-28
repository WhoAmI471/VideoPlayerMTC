/*кнопки для пресетов дальтонизма */
function mon(){
    clear();
    document.getElementById("myVideo").classList.add("active__mon");
}
function dix(){
    clear();
    document.getElementById("myVideo").classList.add("active__dix");
}
function trip(){
    clear();
    document.getElementById("myVideo").classList.add("active__trip");
}
function deit(){
    clear();
    document.getElementById("myVideo").classList.add("active__deit");
}
function prat(){
    clear();
    document.getElementById("myVideo").classList.add("active__prat");
}
function clear(){
    document.getElementById("myVideo").classList.remove("active__mon");
    document.getElementById("myVideo").classList.remove("active__dix");
    document.getElementById("myVideo").classList.remove("active__trip");
    document.getElementById("myVideo").classList.remove("active__deit");
    document.getElementById("myVideo").classList.remove("active__prat");
}
/*работа с ползунками */
/*яркость */

function change_bri(){
    var n = document.querySelector("#brightnes_value")
    var number = n.value; 
    // alert(number);
    // console(number);
    if(number == 100){
        clear_bri();
        document.getElementById("myVideo").classList.add("bright100");
    }
    else if(number == 75){
        clear_bri();
        document.getElementById("myVideo").classList.add("bright75");
        // document.getElementById("myVideo").classList.add("bright25");
    }
    else if(number == 50){
        clear_bri();
        document.getElementById("myVideo").classList.add("bright50");
    }
    else if(number == 25){
        clear_bri();
        document.getElementById("myVideo").classList.add("bright25");
    }
    else if(number == 0){
        clear_bri();
        document.getElementById("myVideo").classList.add("bright0");
    }
}

function clear_bri(){
    document.getElementById("myVideo").classList.remove("bright100");
    document.getElementById("myVideo").classList.remove("bright75");
    document.getElementById("myVideo").classList.remove("bright50");
    document.getElementById("myVideo").classList.remove("bright25");
    document.getElementById("myVideo").classList.remove("bright0");
}
 
/*контраст*/
function contrast_value(cont){
    var output = document.querySelector('#contrast_value');
    output.value = cont;
    
}
/*насыщенность*/
function saturation_value(sat){
    var output = document.querySelector('#saturation_value');
    output.value = sat;
}
/*резкость изображения*/
function sharpness_value(sha){
    var output = document.querySelector('#sharpness_value');
    output.value = sha;
}

/*размер интерфейса */
function brightness_update(bri){
    var output = document.querySelector('#brightnes_value');
    output.value = bri;
}
