'use strict';

var price = 54.99;
  
//printing euro html symbol on total price
document.getElementById('price').innerHTML = price.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});;

//creation of input function
let addBtn = document.querySelector('#increment');
let subBtn = document.querySelector('#decrement');
let counter = document.querySelector('#counter')

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

function changeImage() {
    if(document.getElementById('btn2').clicked == true){
        alert("Button was clicked");
    }
}

//creation of changeImage function
/*let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click',()=>{
    img.src = 'imagens/1-midnightblack.png';
});

btn2.addEventListener('click',()=>{
    img.src = 'imagens/2-crimsonred.png';
});

btn3.addEventListener('click',()=>{
    img.src = 'imagens/3-galaticpurple.png';
});

btn4.addEventListener('click',()=>{
    img.src = 'imagens/4-starlight blue.png';
});

btn5.addEventListener('click',()=>{
    img.src = 'imagens/5-novapink.png';
});*/

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