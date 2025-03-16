let num =0;

document.getElementById("minus").onclick = function count (){
  num -= 1;
  document.getElementById("h1").textContent=num;
}

document.getElementById("plus").onclick = function (){
  num += 1;
  document.getElementById("h1").textContent=num;
}

document.getElementById("reset").onclick = function (){
  num = 0;
  document.getElementById("h1").textContent=num;
}
