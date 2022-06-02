let splitLeft = 
document.createElement("div");
div.className = "splitLeft";
body.appendChild(splitLeft);

let main =
document.createElement("main");
main.className = "main";
splitLeft.appendChild(splitLeft);

let header = 
document.createElement("header");
header.className = "header";
header.appendChild(main);

//h1, h2, h1

let section = 
document.createElement("section");
section.className = "content";
content.appendChild(main);

let div = 
document.createElement("div");
div.className = "flex-container";
flex-container.appendChild(main);

let div =
document.createElement("div");
div.className = "colortitle";
colortitle.appendChild(flex-container);

let div = 
document.createElement("div");
div.className = "colors";
colors.appendChild(colortitle);

//buttons

let div =
document.createElement("div");
div.className = "quantitytitle";
quantitytitle.appendChild(flex-container);

let div =
document.createElement("div");
div.className = "quantity";
quantity.appendChild(quantitytitle);

//button
//input
//button

let div = 
document.createElement("totalprice");
div.className = "totalprice";
totalprice.appendChild(main);

//h2

let div = 
document.createElement("div");
div.className = "addtocart";
addtocart.appendChild(main);

let div = 
document.createElement("div");
div.className = "splitRight";
splitRight.appendChild(body);

let div = 
document.createElement("div");
div.className = "image";
image.appendChild(splitRight);

//img src
