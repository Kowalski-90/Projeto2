'use strict';

var price = 54.99;
  
//printing euro html symbol on total price
document.getElementById('price').innerHTML = price.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});;

//creation of input function
let addBtn = document.querySelector('#increment');
let subBtn = document.querySelector('#decrement');
let counter = document.querySelector('#counter')

counter.addEventListener('keypress', logkey);
    function logkey(e) {        
        document.getElementById('counter').innerText = counter.value;
        document.getElementById('totalprice').innerText = (counter.value * price).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});
    }

addBtn.addEventListener('click',()=>{
    counter.value = parseInt(counter.value) + 1
    document.getElementById('counter').innerText = counter.value;
    document.getElementById('totalprice').innerText = (counter.value * price).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});
});

subBtn.addEventListener('click',()=>{
    counter.value = Math.max(0, counter.value - 1)
    document.getElementById('counter').innerText = counter.value;
    document.getElementById('totalprice').innerText = (counter.value * price).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});
});

//creation of changeImage function
let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click',()=>{
    img.src = 'imagens/1-midnight-black.png';
});

btn2.addEventListener('click',()=>{
    img.src = 'imagens/2-crimson-red.png';
});

btn3.addEventListener('click',()=>{
    img.src = 'imagens/3-galactic-purple.png';
});

btn4.addEventListener('click',()=>{
    img.src = 'imagens/4-starlight-blue.png';
});

btn5.addEventListener('click',()=>{
    img.src = 'imagens/5-nova-pink.png';
});

//creation of increment function (deprecated)
/*function increment() {
    data = data + 1;
    document.getElementById('counter').innerText = data;
    document.getElementById('totalprice').innerText = (data * price).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});    
}

//creation of decrement function
function decrement() {
    data = Math.max(0,data - 1);
    document.getElementById('counter').innerText = data;
    document.getElementById('totalprice').innerText = (data * price).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});
}*/