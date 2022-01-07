'use strict'

const imagens = [
    {'id': '1', 'url':'./img/chrono.jpg'},
    {'id': '2', 'url':'./img/inuyasha.jpg'},
    {'id': '3', 'url':'./img/ippo.png'},
    {'id': '4', 'url':'./img/tenchi.jpg'},
    {'id': '5', 'url':'./img/tenjhotenge.jpg'},
    {'id': '6', 'url':'./img/yuyuhakusho.jpg'},
]
const c = (el)=> document.querySelector(el) // função para diminuir o codigo, c = document.querySelector

let containerItems = c('.container-items');


function carregarImagens(imagens, container) {
    imagens.forEach(image => {
        container.innerHTML += `<div class="item"><img src="${image.url}"</div>"`
    });
}
carregarImagens(imagens, containerItems);



function voltarImage() {
    let items = document.querySelectorAll('.item');

    let lastItem = items[items.length -1]
    containerItems.insertBefore(lastItem, items[0])
}
function proximaImage() {
    let items = document.querySelectorAll('.item');

    containerItems.appendChild(items[0])
}

setInterval(proximaImage, 5000)

c("#previos").addEventListener('click', voltarImage);
c("#next").addEventListener("click", proximaImage)


/*
const imagens = [
    {'id': '1', 'url':'./img/chrono.jpg'},
    {'id': '2', 'url':'./img/inuyasha.jpg'},
    {'id': '3', 'url':'./img/ippo.png'},
    {'id': '4', 'url':'./img/tenchi.jpg'},
    {'id': '5', 'url':'./img/tenjhotenge.jpg'},
    {'id': '6', 'url':'./img/yuyuhakusho.jpg'},
]

const containerItems = document.querySelector("#container-items")


const loadImagens = (imagens, container)=> {
    imagens.forEach (image => {
        container.innerHTML += `<div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImagens(imagens, containerItems);

let items = document.querySelectorAll('.item');

const next = () => {
    let items = document.querySelectorAll('.item');
    containerItems.appendChild(items[0]);
   
}
const previous = () => {
    let items = document.querySelectorAll('.item');

    let lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0] )
    
}

document.querySelector('#previos').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

*/