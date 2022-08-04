# Phase-1-Project

Our Pokedex is a Single Page Application that will return the stats, data, and possible moveset of the desired Pokemon.

## Planning
<img src="./images/Figma Screenshot.png" alt="Figma Screenshot" width="1200px" />
<br>
The image above shows the basic concept of how we intend the MVP to look.
<br>
<br>
<img src="./images/Kanban Board.png" alt="Kanban" width="1200px" />
<br>
This image shows our Kanban board along with the necessary steps listed with corresponding due dates. Nested in each ticket are the tasks required to complete the ticket.
<br>
<br>

---

## Functionality (MVP Steps 1-7, Stretch Goals 8-12)

#### MVP - Pokedex
1. When the page loads the user gets a default picture with the Pokemon logo
2. There is button that switches the app from Pokedex mode (See #3. - #7.) to Game Mode (See #8. - #12.)
3. There is a input field under the logo where a user can input a certain name
4. Under the input field will display a few stats of the certain pokemon
        STATS
        1. Weight Stat
        2. Height Stat
        3. Ability Stat
        4. Type Stat
        5. Move List
5. When a certain Pokemon name is entered the html color of the background will be changed depending on the certain type stat of the Pokemon
6. When a certain Pokemon name is entered the Pokemon logo in the middle will be changed to the picture of the Pokemon. Also the stats will be changed according to the 
specific stats of the Pokemon
7. Clicking on the image of the Pokemon to switch between default and shiny forms.

## Stretch Goal - Who's that Pokemon?
8. FOR GAME MODE (Who's that Pokemon?): After clicking on the button to switch to game mode, a counter will appear in the top right corner to track the number of correct guesses, and a blocked out image of a random pokemon will be generated
9. Background images still change to give hint to players as to the type of pokemon
10. Submission to the form will now check if the inserted guess (not case-sensitive) matches the name of the pokemon. If correct, counter goes up one.
11. Instead of displaying the pokemon name above the form, it will provide instructions on how to proceed with the game
12. Clicking on the image of the pokemon will reroll the image

---

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

---

## Bugfixes/Improvements
As we progressed through the project, we encountered both inspiration for features and annoyance from bugs. The following represents a list of some of the bugs we encountered and how they were subsequently resolved.

1. On wrong user-input, the screen would freeze and there was no response to notify the user. As a result we added an error message to notify users when a request to the API fails.

2. Fix the flashing Pikachu. Originally we had a mouseover event listener to switch between shiny and default sprites. However, because several requests are being to the server on each hover, there may be a delay between switching sprites which allowed, for a brief second, the old sprite to be displayed. To correct this, we implemented a new solution of loading both sprites into two separate divs and overlaying them. Isntead of the mouseover, we used a click event to alter the z-index of the images, and alter what gets displaye on the surface

3. Get rid of the random move and just have the move list: Just a minor improvement. No need to give them a random move if we are already providing the whole move list.

---

## Stretch Goals
1. What's that pokemon? Create a game mode to guess the pokemon the sprite represents
2. Random Pokemon - For the pokemon game, get a random pokemon from the API
3. Pokemon Bucket - Purely for aesthetics. In the pokemon game we'll create a bucket. Everytime a pokemon is guessed correctly, an animation will play that shows the pokemon dropping into the bucket from the top of the screen

