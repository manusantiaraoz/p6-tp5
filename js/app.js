const formulario = document.querySelector("#form");
let barra = document.querySelector(".progress-bar");
let progreso = window.getComputedStyle(barra).getPropertyValue("width");

let hora = Math.floor(document.querySelector("#hs").value * 3600);
 let minutos = Math.floor(document.querySelector("#min").value * 60);
 let segundos = 0;



let iniciar = () => {
  segundos=hora + minutos + document.querySelector("#seg").value;
  let x = setInterval(function () {
    
    console.log(segundos);

    let cuarto = Math.floor((segundos * 25) / 100);
    let cuartodos = Math.floor((segundos * 50) / 100);
    let cuartotres = Math.floor((segundos * 75) / 100);
    let cuartocuatro = Math.floor((segundos * 100) / 100);

    if (segundos == cuarto) {
      progreso = "25%";
    } else if (segundos == cuartodos) {
      progreso = "50%";
    } else if (segundos == cuartotres) {
      progreso = "75%";
    } else if (segundos == cuartocuatro) {
      progreso = "100%";
    }

    segundos--;

    if (segundos <= 0) {
      clearInterval(x);
    }
  }, 1000);
};

formulario.addEventListener("submit", iniciar);

//btnSartStop.addEventListener("click", startStop);
//btnreset.addEventListener("click",reset)
