const button1 = document.getElementById("button1-50");
const button2 = document.getElementById("button");
const button3 = document.getElementById("button51-100");
const h1 = document.getElementById("h1");
let number; 


button1.onclick = function (){
    number = Math.floor(Math.random()*50)+1;
    h1.textContent=number;
}

button2.onclick = function (){
  number = Math.floor(Math.random()*101);
  h1.textContent=number;
}

button3.onclick = function (){
  number = Math.floor(Math.random()*(100-51)+52);
  h1.textContent=number;
}

