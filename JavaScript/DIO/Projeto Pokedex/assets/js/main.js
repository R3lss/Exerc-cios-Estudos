const pokemonlist = document.getElementById('pokemonlist')
const loadMoreButton = document.getElementById("loadMoreButton")
const maxrecords = 151
const limit = 10
let offset = 0;

function convertpokemontoli(pokemon){
    return ` 
    <li class="pokemon ${pokemon.type}" >
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}"></div>
</li>`
}

function loadmoreitens(offset, limit){
    PokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonlist.innerHTML += pokemons.map(convertpokemontoli).join('')
    })
}
loadmoreitens(offset, limit)
loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecord = offset + limit

    if (qtdRecord >= maxrecords){
        const newlimit = maxrecords - offset
        loadmoreitens(offset, newlimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadmoreitens(offset, limit)
    }
})