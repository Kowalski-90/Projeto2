'use strict';

var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById('counter').innerText = data;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById('counter').innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById('counter').innerText = data;
}