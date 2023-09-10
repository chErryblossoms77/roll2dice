var n = Math.floor(Math.random() * 6) + 1; 

var new1 = "./images/dice" + n + ".png"; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", new1);


var m = Math.floor(Math.random() * 6) + 1;

var new2 = "./images/Dice" + m + ".jpeg";

document.querySelectorAll("img")[1].setAttribute("src", new2);

