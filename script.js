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