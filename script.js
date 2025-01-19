
let tipoCombustivel = "etanol";
let valorGasolina = 5.69;
let valorEtanol = 4.29;
let kmPorLitroGasolina = 12.3;
let kmPorLitroEtanol = 6.93;


const btn = document.querySelector("#send");

document.getElementById("send").onclick = function() {
      var radios = document.getElementsByName("combustivel");
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          console.log("Tipo de combustivel " + radios[i].value);
          const combustivel = radios[i].value;
          
          const kmInicial = document.querySelector("#kminicial");
          const valueKmInicial = kmInicial.value;

          const kmFinal = document.querySelector("#kmfinal");
          const valueKmFinal = kmFinal.value;

          const kmPercorrido = valueKmFinal - valueKmInicial;

          var reg = JSON.parse(localStorage.getItem("reg"));

          if (reg == null){
            localStorage.setItem("reg", "[]");
            reg = [];
          }
          

          if (combustivel === "gasolina") {
            let litrosGasto = kmPercorrido / kmPorLitroGasolina;
            let valorGasto = litrosGasto * valorGasolina;
            console.log(valorGasto.toFixed(2));
            document.getElementById('resultado').value = valorGasto.toFixed(2);
             
            
            hist1 = valorGasto.toFixed(2);

            document.getElementById('historico1').innerHTML = ("R$: " + hist1);
            document.getElementById('kmrodado').innerHTML = ("Km percorrido: " + kmPercorrido);
            document.getElementById('litros').innerHTML = ("Litros: " + litrosGasto.toFixed(2));
            document.getElementById('kmporlitro').innerHTML = ("Km por Litro: " + kmPorLitroEtanol + "Km/L");

          } else if ( combustivel === "etanol" ) {
            let litrosGasto = kmPercorrido / kmPorLitroEtanol;
            let valorGasto = litrosGasto * valorEtanol;
            console.log(valorGasto.toFixed(2));
            document.getElementById('resultado').value = valorGasto.toFixed(2);
            hist1 = valorGasto.toFixed(2);
            document.getElementById('historico1').innerHTML = ("R$: " + hist1);
            document.getElementById('kmrodado').innerHTML = ("Km percorrido: " + kmPercorrido);
            document.getElementById('litros').innerHTML = ("Litros: " + litrosGasto.toFixed(2));
            document.getElementById('kmporlitro').innerHTML = ("Km por Litro: " + kmPorLitroEtanol + "Km/L");
          } 
        }
        
      }
    }


