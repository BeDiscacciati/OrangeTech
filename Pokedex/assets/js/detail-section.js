const pokemonDetail = document.getElementById('pokemonDetail')
const pokemonID = document.getElementById('goToDetail').getAttribute("pokeId") //Aqui a busca pelo atributo está retornando Null
const idDetails = pokemonID - 1 // Aqui preciso fazer essa subtração, pois o offset é o ID - 1

pokeAPI.getPokemons(idDetails, 1)
.then((pokemons = []) => {
    pokemonDetail.innerHTML += pokemons.map(convertDetailToLi).join('') 
})

function convertDetailToLi(pokeDetail){
    return `
        <section class="${pokeDetail.type}" id="mainInfo">
            <span class="nameDetail">${pokeDetail.name}</span>
            <span class="numberDetail">#${pokeDetail.id}</span>
            <ol class="typesDetail">
                ${pokeDetail.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokeDetail.image}" alt="${pokeDetail.name}">
        </section>
        <section id="details">
            <li class="stats">
                <ol class="stat">
                    <span class="statName">HP</span>
                    <span class="statNumber">${pokeDetail.hp}</span>
                    <span class="line"></span>
                </ol>
                <ol class="stat">
                    <span class="statName">Attack</span>
                    <span class="statNumber">${pokeDetail.attack}</span>
                    <span class="line"></span>
                </ol>
                <ol class="stat">
                    <span class="statName">Defense</span>
                    <span class="statNumber">${pokeDetail.defense}</span>
                    <span class="line"></span>
                </ol>
                <ol class="stat">
                    <span class="statName">Sp. Atk</span>
                    <span class="statNumber">${pokeDetail.specialAttack}</span>
                    <span class="line"></span>
                </ol>
                <ol class="stat">
                    <span class="statName">Sp. Def</span>
                    <span class="statNumber">${pokeDetail.specialDefense}</span>
                    <span class="line"></span>
                </ol>
                <ol class="stat">
                    <span class="statName">Speed</span>
                    <span class="statNumber">${pokeDetail.speed}</span>
                    <span class="line"></span>
                </ol>
                
            </li>
        </section>    
    `
}

