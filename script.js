const valorInicial = 0;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let valorMudavel = 0;

document.getElementById("contador").innerHTML = valorInicial

btn1.onclick = function(){
    valorMudavel += 1;
    document.getElementById("contador").innerHTML = valorMudavel;
};

btn2.onclick = function(){
  valorMudavel -= 1;
  document.getElementById("contador").innerHTML = valorMudavel;
};

