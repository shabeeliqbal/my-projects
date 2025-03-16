const button = document.getElementById("button");

constresult = document.getElementById("result");
let number; 

button.onclick = function ()
{
  number = Math.floor(Math.random()*6)+1;

  console.log(number);
  
  if(number==1){
    result.innerHTML = `<img src="./img/1.jpg" class="img">`;
  }else if(number==2){
    result.innerHTML = `<img src="./img/2.jpg" class="img">`;
  }else if(number==3){
    result.innerHTML = `<img src="./img/3.jpg" class="img">`;
  }else if(number==4){
    result.innerHTML = `<img src="./img/4.jpg" class="img">`;
  }else if(number==5){
    result.innerHTML = `<img src="./img/5.jpg" class="img">`;
  }else{
    result.innerHTML = `<img src="./img/6.jpg" class="img">`;
  }
}




