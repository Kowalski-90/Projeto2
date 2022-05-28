'use strict';

var data = 0;
var price = 54.99;
  
//printing default value of data that is 0 in h2 tag
document.getElementById('counter').innerText = data;
document.getElementById('price').innerHTML = price.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById('counter').innerText = data;
    document.getElementById('totalprice').innerText = (data * price).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});    
}

//creation of decrement function
function decrement() {
    data = Math.max(0,data - 1);
    document.getElementById('counter').innerText = data;
    document.getElementById('totalprice').innerText = (data * price).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});
}

//creation of changeImage function
let img = document.querySelector('img');
let btn1 = document.getElementById('#btn1');
let btn2 = document.getElementById('#btn2');
let btn3 = document.getElementById('#btn3');
let btn4 = document.getElementById('#btn4');
let btn5 = document.getElementById('#btn5');

btn1.addEventListener('click', () => {
    img.src = 'imagens/1-midnightblack.png'
})

btn2.addEventListener('click', () => {
    img.src = 'imagens/2-crimsonred.png'
})

btn3.addEventListener('click', () => {
    img.src = 'imagens/3-galaticpurple.png'
})

btn4.addEventListener('click', () => {
    img.src = 'imagens/4-starlight blue.png'
})

btn5.addEventListener('click', () => {
    img.src = 'imagens/5-novapink.png'
})

