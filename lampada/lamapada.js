'use strict'

let onOff = document.querySelector('.onOff');
let lamp = document.querySelector('.lamp');


function on() {
    if (!quebrada()){
    lamp.src = './img/ligada.jpg'
    }
}
function off() {
    if(!quebrada()) {
       lamp.src = './img/desligada.jpg'
    } 
}
    
function quebrar() {
    lamp.src = './img/quebrada.jpg'
}
function quebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function ligaDes() {
    if(onOff.textContent == 'Ligar') {
         on();
        onOff.textContent = 'Desligar'
    } else {
         off()
        onOff.textContent = 'Ligar'
    }
}


onOff.addEventListener('click', ligaDes)

lamp.addEventListener('mouseover', on);
lamp.addEventListener('mouseleave', off)
lamp.addEventListener('dblclick', quebrar)












/*const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {    // '!'= negação/ não
    if (!isBroken()) {                    
        lamp.src = './img/ligada.jpg'
    } 
}

function lampOff () {
    if (!isBroken()) {
        lamp.src = './img/desligada.jpg'
    }
}
function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)*/