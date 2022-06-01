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
    img.src = 'https://images2.imgbox.com/6e/82/QmqwBBx7_o.png';
});

btn2.addEventListener('click',()=>{
    img.src = 'https://images2.imgbox.com/1c/ae/2lVlS84F_o.png';
});

btn3.addEventListener('click',()=>{
    img.src = 'https://images2.imgbox.com/67/21/iEKYlNNf_o.png';
});

btn4.addEventListener('click',()=>{
    img.src = 'https://images2.imgbox.com/b3/6f/sGpsSwFk_o.png';
});

btn5.addEventListener('click',()=>{
    img.src = 'https://images2.imgbox.com/5d/cd/kElME2uf_o.png';
});

//image repository
//https://imgbox.com/g/SMbfrUCMOv

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