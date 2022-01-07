
let calcular = document.querySelector('#calcular');



function imc() {
    
    let nome = document.querySelector('#nome').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let resultado = document.querySelector('#resultado');
    

    if(nome !== '' && altura !== '' && peso !== '') {
        valorImc = peso / (altura * altura).toFixed(1)
        
        let classificaçao = '';
        if(valorImc < 18.5) {
            classificaçao = 'abaixo do peso'
        } else if(valorImc <= 25) {
            classificaçao = 'com peso ideal. Parabens!!'
        } else if(valorImc > 25) {
            classificaçao = ' acima do peso, cuide-se!'
        }
        resultado.innerHTML = `${nome} seu IMC é ${valorImc} e você está ${classificaçao}`

    } else {
        resultado.innerHTML = 'Preencha todos os campos!!'
    }
    
    
}


calcular.addEventListener('click', imc)






























/*const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
      
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificaçao = '';
        if (valorIMC < 18.5) {
            classificaçao = 'Abaixo do peso.';
        } else if (valorIMC < 25) {
            classificaçao = 'com peso ideal. Parabéns';
        } else if(valorIMC < 30) {
            classificaçao = 'levemente acima do peso';
        } else if (valorIMC < 35) {
            classificaçao = 'obesidade grau 1.';
        } else if(valorIMC < 40) {
            classificaçao = 'obesidade grau 2.';
        } else {
            classificaçao = 'com grau 3. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificaçao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
        }
}

calcular.addEventListener('click', imc)*/
