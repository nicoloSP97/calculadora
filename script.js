window.onload=iniciar;
var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var btn6;
var btn7;
var btn8;
var btn9;
var btn0;
var btn_add;
var btn_menos;
var btn_por;
var resultado;
var operaciones = document.getElementById("operaciones");

function iniciar(){
    btn1= document.getElementById("btn1");
    btn1.onclick=agregarUno()

    btn2= document.getElementById("btn2");
    btn2.onclick=agregarDos()
    
    btn3= document.getElementById("btn3");
    btn3.onclick=agregarTres()
    
    btn4= document.getElementById("btn4");
    btn4.onclick=agregarCuatro()
    
    btn5= document.getElementById("btn5");
    btn5.onclick=agregarCinco()
    
    btn6= document.getElementById("btn6");
    btn6.onclick=agregarSeis()
    
    btn7= document.getElementById("btn7");
    btn7.onclick=agregarSiete()

    btn8= document.getElementById("btn8");
    btn8.onclick=agregarOcho()

    btn9= document.getElementById("btn9");
    btn9.onclick=agregarNueve()
    
    btn0= document.getElementById("btn0");
    btn0.onclick=agregarCero()

    btn_add= document.getElementById("btn+");
    btn_add.onclick=agregarSuma();

    btn_menos= document.getElementById("btn-");
    btn_menos.onclick=agregarResta();

    btn_por= document.getElementById("btn*");
    btn_por.onclick=agregarMultiplicacion();

    resultado= document.getElementById("btn=");
    resultado.onclick=agregarresultado();



}


function agregarUno() {
    return function (e) {
        operaciones.value = operaciones.value + btn1.value ;
    };
}
function agregarDos() {
    return function (e) {
        operaciones.value = operaciones.value + btn2.value ;
    };
}
function agregarTres() {
    return function (e) {
        operaciones.value = operaciones.value + btn3.value ;
    };
}
function agregarCuatro() {
    return function (e) {
        operaciones.value = operaciones.value + btn4.value ;
    };
}
function agregarCinco() {
    return function (e) {
        operaciones.value = operaciones.value + btn5.value ;
    };
}
function agregarSeis() {
    return function (e) {
        operaciones.value = operaciones.value + btn6.value ;
    };
}
function agregarSiete() {
    return function (e) {
        operaciones.value = operaciones.value + btn7.value ;
    };
}    
function agregarOcho() {
    return function (e) {
        operaciones.value = operaciones.value + btn8.value ;
    };
}
function agregarNueve() {
    return function (e) {
        operaciones.value = operaciones.value + btn9.value ;
    };
}
function agregarCero() {
    return function (e) {
        operaciones.value = operaciones.value + btn0.value ;
    };
}
function agregarSuma(){
    return function (e) {
        operaciones.value = operaciones.value + btn_add.value ;
    };
}

function agregarResta(){
    return function (e) {
        operaciones.value = operaciones.value + btn_menos.value ;
    };
}

function agregarMultiplicacion(){
    return function (e) {
        operaciones.value = operaciones.value + btn_por.value ;
    };
}
// funcion de sumar (lista)
// arreglar el error de que no se pueda seguir modificando el resultado (realizar)
function agregarresultado(){
    return function (e) {
        var num=0;
        for (let i = 0; i < operaciones.value.length; i++) {
               if(operaciones.value.charAt(i) == '+' || i == operaciones.value.length-1){
                    num=num+parseInt(operaciones.value.substring(0,i),10);
                    operaciones.value = operaciones.value.substring(i+1);
                    i=0;   
                }
                       
        }
        operaciones.value=num;
    };
}
