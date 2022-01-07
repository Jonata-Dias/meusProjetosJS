
'use strict'

let img = document.querySelector('#img');
let buttons = document.querySelector('#buttons')
let colorIndex = 0;
let intervalId = null;

let ligar = {
    'red': ()=> img.src = './img/vermelho.png',
    'yellow': ()=> img.src = './img/amarelo.png',
    'green': ()=> img.src = './img/verde.png',
    "automatic": () => intervalId = setInterval(mudarCor, 1000)
}
function mudarCor() {
    let colors = ['red', 'yellow', 'green']
    let color = colors[colorIndex]

    ligar[color]()
    nextIndex()
}

function nextIndex() {
    if(colorIndex < 2) {
        ++colorIndex
    } else {
        colorIndex = 0;
    }
}
function automatico() {
    clearInterval(intervalId)
}
function luzSemafaro(event) {
    automatico()
    ligar[event.target.id]()
    
}

buttons.addEventListener('click', luzSemafaro)




























/*
const img = document.querySelector('#img');
const buttons = document.querySelector('#buttons');
let colorIndex = 0;
let intervalId = null;


const traficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
    
}

const nextIndex = () => { //colorIndex = colorIndex < 2 ? ++colorIndex : 0; forma resumida

    if (colorIndex < 2) {
        ++colorIndex
    } else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex]
    turnOn[color]();
    nextIndex();
}
function stopAutomatic()  {
    clearInterval( intervalId)
}

const turnOn = {
    //id
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000)
}

buttons.addEventListener( 'click', traficLight)
*/





















