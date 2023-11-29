const formulario = document.querySelector("#form");
let barra = document.querySelector(".progress-bar");

let hora =  document.querySelector("#hs");
 let minutos = document.querySelector("#min");
 let segundos = document.querySelector("#seg");
let h;
let m;
let s;
let conversion;

 let iniciar = (e) => { 
   e.preventDefault();
   if( isNaN(parseInt(hora.value)) ){
     h=0;
  }else{
    h= parseInt(hora.value);
  }
   if( isNaN(parseInt(minutos.value)) ){
     m=0;
  }else{
    m= parseInt(minutos.value);
  }
   if( isNaN(parseInt(segundos.value)) ){
     s=0;
  }else{
    s= parseInt(segundos.value);
  }

  conversion=h * 3600 + m * 60 + s ;

  
  let cuarto = Math.floor((conversion * 25) / 100);
  let cuartodos = Math.floor((conversion * 50) / 100);
  let cuartotres = Math.floor((conversion * 75) / 100);
  let cuartocuatro = Math.floor((conversion * 100) / 100);
  
  let x = setInterval(function () {
    
    console.log(conversion);
    if (conversion === cuartocuatro) {
      barra.style.width = "25%";
    } else if (conversion === cuartotres) {
      barra.style.width = "50%";
    } else if (conversion === cuartodos) {
      barra.style.width = "75%";
    } else if (conversion === cuarto) {
      barra.style.width = "100%";
    }

    conversion--;

    if (conversion <= 0) {
      clearInterval(x);
      barra.style.width="0%"
    }
  }, 1000);
};

formulario.addEventListener("submit", iniciar);

//btnSartStop.addEventListener("click", startStop);
//btnreset.addEventListener("click",reset)
