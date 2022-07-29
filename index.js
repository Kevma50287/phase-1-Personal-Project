let pokemonDiv = document.getElementById('pokemon')

async function getPoke() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/snorlax');
    let pokemon = await response.json();
    // POKEMON STATS DECLARING VARIABLES
    let randomMoves = pokemon.moves[Math.floor(Math.random()*pokemon.moves.length)]
    let weight = pokemon.weight
    let name = pokemon.name
    let height = pokemon.height
    console.log(pokemon.abilities)
    console.log(height)
    console.log(name)
    console.log(weight)
    console.log(randomMoves)
    console.log(pokemon)
}
getPoke()