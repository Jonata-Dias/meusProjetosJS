

let seconds = 00;
let milesimos = 00;
let interval 
let txt = `${seconds}:${milesimos}`;


let cronometro = document.querySelector('.cronometro');
let buttonStart = document.querySelector('.start');
let buttonStop = document.querySelector('.stop')
let buttonReset = document.querySelector('.reset')


buttonStart.onclick = () => { 
    clearInterval(interval);
    interval = setInterval(starTimer, 10);

    buttonStop.onclick = () => {
        clearInterval(interval)
    }

    buttonReset.onclick = () => {
        
        milesimos = 00;
        seconds = 00;
        cronometro.innerHTML = '00:00'
       
    }
} 

function starTimer() {
    milesimos++;

     
    if (milesimos > 9){
       cronometro.innerHTML = txt ;
        
      } 
      
      if (milesimos > 99) {
        console.log("seconds");
        seconds++;
        cronometro.innerHTML = "0" + seconds;
        tens = 0;
        cronometro.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
       cronometro.innerHTML = seconds;
      }

     
     
}
 


















/*window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}*/ 