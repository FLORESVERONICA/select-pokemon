const container = document.querySelector(".container");
const form = document.querySelector(".pokemon-form");
const select = document.getElementById("pokemon-select");
const boton = document.getElementById("get-pokemon");
function traerpokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response=>{
        if(!response.ok){
            throw new Error("hay un error en el envio")
        }
        return response.json()

    }).then(data =>{
        console.log(data);
        let imagen = data.sprites.other.home.front_default
        let nombre = data.name
        let peso = data.weight
        let altura = data.height
        let tipo = data.types[0].type.name
        console.log(imagen)
        console.log(nombre)
        console.log(altura)
        console.log(peso)
        console.log(tipo)
        let plantilla = `<p><span class = "plantilla">nombre: </span>${nombre}</p>
        <p><span class = "plantilla">altura: </span>${altura}</p>
        <p><span class = "plantilla">peso: </span>${peso}</p>
        <p><span class = "plantilla">tipo: </span>${tipo}</p>`
        let contenedor2 = document.createElement("div")
        contenedor2.classList.add("contenedor2")
        container.appendChild(contenedor2)
        contenedor2.appendChild(imagen)
       


        
         
    }).catch(error=>{
    console.log("ha habido un error en la llegada de datos")
    })

}

traerpokemon("bulbasaur")