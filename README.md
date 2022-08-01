# Phase-1-Project

Our Pokedex is a Single Page Application that will return the stats, data, and possible moveset of the desired Pokemon.

## Functionality

1. When the page loads the user gets a default picture with the Pokemon logo
2. There is a input field under the logo where a user can input a certain name
3. Under the input field will display a few stats of the certain pokemon
        STATS
        1. Random Move Generated
        2. Weight Stat
        3. Height Stat
        4. Ability Stat
        5. Type Stat
4. When a certain Pokemon name is entered the html color of the background will be changed depending on the certain type stat of the Pokemon
5. When a certain Pokemon name is entered the Pokemon logo in the middle will be changed to the picture of the Pokemon also the stats will be changed according to the 
specific stats of the Pokemon
6. A mouse over event will be put when the User hovers over the image of the selected Pokemon which will pull up a Pokemon card of the specific pokemon showing its stats.


## Sources

THE API IS FROM https://pokeapi.co/api/v2/pokemon/

Example API return:


`
{abilities: Array(3), base_experience: 189, forms: Array(1), game_indices: Array(20), height: 21, …} 
abilities: (3) [{…}, {…}, {…}]
base_experience: 189
forms: [{…}]
game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
height: 21
held_items: (2) [{…}, {…}]
id: 143
is_default: true
location_area_encounters: "https://pokeapi.co/api/v2/pokemon/143/encounters"
moves: (129) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
name: "snorlax"
order: 235
past_types: []
species: {name: 'snorlax', url: 'https://pokeapi.co/api/v2/pokemon-species/143/'}
sprites: {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/143.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', …}
stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
types: [{…}]
weight: 4600
[[Prototype]]: Object
`


# Bugfixes/Improvements
As we progressed through the project, we encountered both inspiration for features and annoyance from bugs. The following represents a list of some of the bugs we encountered and how they were subsequently resolved.

1. On wrong user-input, the screen would freeze and there was no response to notify the user. As a result we added an error message to notify users when a request to the API fails.

2. Fix the flashing Pikachu. Originally we had a mouseover event listener to switch between shiny and default sprites. However, because several requests are being to the server on each hover, there may be a delay between switching sprites which allowed, for a brief second, the old sprite to be displayed. To correct this, we implemented a new solution of loading both sprites into two separate divs and overlaying them. Isntead of the mouseover, we used a click event to alter the z-index of the images, and alter what gets displaye on the surface
3. Get rid of the random move and just have the move list: Just a minor improvement. No need to give them a random move if we are already providing the whole move list.

# Stretch Goals
1. What's that pokemon? Create a game mode to guess the pokemon the sprite represents
2. Random Pokemon - For the pokemon game, get a random pokemon from the API
3. Pokemon Bucket - Purely for aesthetics. In the pokemon game we'll create a bucket. Everytime a pokemon is guessed correctly, an animation will play that shows the pokemon dropping into the bucket from the top of the screen

