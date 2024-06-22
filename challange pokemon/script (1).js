
const container2 = document.querySelector(".container")
const POKEMON_FORM = document.querySelector(".pokemon-form")
const POKEMON_SELECT = document.getElementById("pokemon-select")
let elemento = document.createElement("div")

const BOTON = document.getElementById("get-pokemon");


function fetchPokemon (pokemon) {
    elemento.innerHTML = "";
  
    
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud.`);
          }
          return response.json();
        })
        .then((data) => {
            console.log(data)
            console.log(data.sprites.other.home.front_default)
            let fuente = data.sprites.other.home.front_default
            
            elemento.classList.add("contenedor1");
            let elemento2 = document.createElement("div")
            elemento2.classList.add("contenedor2")
            let imagen = document.createElement("img");
            imagen.src = fuente;
            
            let template1 = `<p><span class="plantilla">Nombre: </span>${data.name}.</p>
                             <p><span class="plantilla">Tipos: </span>${data.types[0].type.name}.</p>
                             <p><span class="plantilla">Altura: </span>${data.height} centimetros.</p>
                             <p><span class="plantilla">Peso: </span>${data.weight} gramos.</p>`

            container2.appendChild(elemento);
            elemento.appendChild(imagen);
            elemento.appendChild(elemento2);
            elemento2.innerHTML = template1
           
        })
        .catch((error) => {
          console.log(`Error en el envio.`);
        });
        
    }



BOTON.addEventListener("click", () => {
  if (POKEMON_SELECT.value === "bulbasaur") {
    fetchPokemon("bulbasaur");
  }
  else if (POKEMON_SELECT.value === "charmander") {
    fetchPokemon("charmander");
  }
  else {
    fetchPokemon("squirtle");
  }
})

