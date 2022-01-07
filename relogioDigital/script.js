'use strict'


let relogio = document.querySelector('.relogio')

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    relogio.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`
};
function fixZero(time) {
    if(time < 10) {
        return "0"+ time;
    } else {
        return time
    }
}

setInterval(updateClock, 1000);

updateClock()