// ALL HTML NODES
let pokemonDiv = document.getElementById('pokemon')
let form = document.querySelector('.form')
let nameNode = document.querySelector('#pokeName')
let pokemonImageDefault = document.getElementById('pokemonImage-default')
let pokemonImageShiny = document.getElementById('pokemonImage-shiny')
let moveNode = document.getElementById('moveStat')
let weightNode = document.getElementById('weightStat')
let heightNode = document.getElementById('heightStat')
let abilityNode = document.getElementById('abilityStat')
let typeNode = document.getElementById('typeStat')
let bodyNode = document.getElementById('body')
let showMovesBtn = document.getElementById('showMovesBtn')
let allMoves = document.getElementById('allMoves')
let movelist = document.getElementById('movelist')
const modeBtn = document.getElementById('mode')
const GuessContainer = document.getElementById('GuessContainer')
const statsDiv = document.getElementById('statsDiv')
const h3 = document.querySelector('h3')
const score = document.getElementById('numCorrect')
const inputBtn = document.getElementById('inputButton')
const resetbtn = document.getElementById('resetbtn')


//ALL TYPE BACKGROUND IMAGES
let normalBackground = 'url(https://pokemongohub.net/wp-content/uploads/2019/05/Normal-Types-1536x864.jpg)'
let fireBackground = 'url(https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg)'
let waterBackground = 'url(https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
let grassBackground = 'url(https://images.pexels.com/photos/53504/grass-rush-juicy-green-53504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
let electricBackground = 'url(https://iphoneswallpapers.com/wp-content/uploads/2021/06/Thunder-Storm-iPhone-Wallpaper.jpg)'
let iceBackground = 'url(https://images.pexels.com/photos/140234/pexels-photo-140234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
let fightingBackground = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NsmEg3jEIDwZdCVWoLhSTJKvgoizS8Mw_Q&usqp=CAU)'
let poisonBackground = 'url(https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLXM5MS1wYS04ODU0LTAxXzIuanBn.jpg)'
let groundBackground = 'url(https://c.wallhere.com/photos/55/aa/1280x853_px_Desert_Dirt_Dry_Environment_Erosion_ground_nature-1032524.jpg!d)'
let flyBackground = 'url(https://www.printawallpaper.com/wp-content/uploads/2020/07/birds_flying_detail.jpg)'
let psychicBackground = 'url(https://wallpaperaccess.com/full/2825357.png)'
let bugBackground = 'url(https://wallpaperaccess.com/full/4407226.jpg)'
let rockBackground = 'url(https://cdn.wallpapersafari.com/3/44/vhoKjl.jpg)'
let ghostBackground = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOssRymiXX3XKWd18pA1CJySELv4B7s1AUA&usqp=CAU)'
let darkBackground = 'url(https://images.alphacoders.com/294/thumb-1920-294453.jpg)'
let dragonBackground = 'url(https://cdn.wallpapersafari.com/25/88/GvSHn1.jpg)'
let steelBackground = 'url(https://wallpaper.dog/large/20442056.jpg)'
let fairyBackground = 'url(https://wallpaperset.com/w/full/5/9/5/136134.jpg)'


// SWITCH SUBMIT BUTTON FOR YELLOW TO RED
inputBtn.addEventListener('mouseover' , function(e){
    inputBtn.style.backgroundColor = 'red'
    inputBtn.addEventListener('mouseout', function(e){
        inputBtn.style.backgroundColor = 'yellow'
    })
})



//Submit Function - has two different functions depending on set mode
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    // For Pokedex mode, we take the input and request it from the API
    if (modename.textContent === 'Pokedex') {
        let pokemon = e.target.name.value.toLowerCase()
        let pokeObj = await getPoke(pokemon)
        setupPage(pokeObj)
        form.reset()
    } else if (modename.textContent === 'Guess that Pokemon!') { //Functionality for Game mode
        let guess = e.target.name.value.toLowerCase()
        if (guess === pokemonImageDefault.getAttribute('monName')) {
            pokemonImageDefault.classList.add('transition')
            score.textContent = parseInt(+score.textContent + 1)
            pokemonImageDefault.style.opacity = '0'
            nameNode.textContent = 'You got it! Click on the image to keep going :)'
            inputBtn.disabled = true
        } else {
            pokemonImageDefault.classList.add('transition')
            nameNode.innerHTML = `Wrong: It's 
                <span class='fontWrong'>${pokemonImageDefault.getAttribute('monName')}</span>
                . Click on the image to keep going :)`
            pokemonImageDefault.style.opacity = '0'
            inputBtn.disabled = true
        }
        form.reset()
    }
})

//Async Fetch statement
async function getPoke(name) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        let pokemon = await response.json()
        return pokemon
    } catch (error) {
        nameNode.innerHTML = 'Error: Invalid Pokemon/Entry #'
        body.style.backgroundImage = ''
        pokemonImageDefault.src = 'https://www.albionpleiad.com/wp-content/uploads/2016/03/pokemon-logo-vector-400x381.png'
        pokemonImageShiny.src = 'https://www.albionpleiad.com/wp-content/uploads/2016/03/pokemon-logo-vector-400x381.png'
    }
}

resetbtn.addEventListener('click', () => {
    score.textContent = 0
})

//Click function to reveal shiny. IF in gameMode we go to the next image
pokemonImageDefault.addEventListener('click', function (e) {
    if (modename.textContent === 'Pokedex') {
        if (pokemonImageDefault.style.opacity === '0') {
            pokemonImageDefault.style.opacity = '100'
            pokemonImageShiny.style.opacity = '0'
        } else {
            pokemonImageDefault.style.opacity = '0'
            pokemonImageShiny.style.opacity = '100'
        };
    } else {
        pokemonImageDefault.classList.remove('transition')
        gameSetup()
        nameNode.textContent = 'Click image to reroll'
    }
})


//Click function to reveal default
pokemonImageShiny.addEventListener('click', function (e) {
    pokemonImageDefault.style.opacity = '100'
    pokemonImageShiny.style.opacity = '0'
})

//Click function to switch between pokedex and game mode
modeBtn.addEventListener('click', async function (e) {
    let modename = document.getElementById('modename')
    // Switch to game mode
    if (modename.textContent === 'Pokedex') {
        Gameset()
        gameSetup()
    } else { //Switch to Pokedex mode
        Dexset()
    }
})

// changes displays for game mode
const Gameset = async () => {
    pokemonImageDefault.className = ''
    modename.textContent = 'Guess that Pokemon!'
    modeBtn.className = 'gamestyle'
    GuessContainer.style.display = 'block'
    statsDiv.style.display = 'none'
    nameNode.textContent = 'Click image to reroll'
    nameNode.classList.remove('dexstyl2')
    nameNode.classList.add('gamestyl2')
    nameNode.classList.add('fontSmall')
    form.classList.remove('dexstyl1')
    form.classList.add('gamestyl1')
    h3.textContent = 'Enter your guess here:'
}

// changes displays for dex mode
const Dexset = async () => {
    modename.textContent = 'Pokedex'
    modeBtn.className = 'pokedexstyle'
    GuessContainer.style.display = 'none'
    statsDiv.style.display = 'block'
    nameNode.textContent = 'Pokémon'
    nameNode.classList.add('dexstyl2')
    nameNode.classList.remove('gamestyl2')
    nameNode.classList.remove('fontSmall')
    form.classList.add('dexstyl1')
    form.classList.remove('gamestyl1')
    pokemonImageShiny.style.display = 'block'
    pokemonImageDefault.src = 'https://www.albionpleiad.com/wp-content/uploads/2016/03/pokemon-logo-vector-400x381.png'
    pokemonImageShiny.src = pokemonImageDefault.src
    pokemonImageDefault.style.filter=''
    pokemonImageDefault.style.opacity = '100'
    pokemonImageDefault.className = 'transition'
    h3.textContent = 'Enter Pokémon Name or Pokédex #'
    body.style.backgroundImage = ''
    movelist.innerHTML = ''
    inputBtn.disabled = false
}

// setup Game mode html
const gameSetup = async () => {
    // get random pokemon
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIntFromInterval(1, 905)}`)
    let pokemon = await res.json()
    // change the default image(top-image) and turn it black
    pokemonImageDefault.src = await pokemon.sprites['front_default']
    pokemonImageDefault.setAttribute('monName', `${pokemon.name}`)
    pokemonImageDefault.style.opacity = '100'
    pokemonImageDefault.style.filter = 'brightness(0) drop-shadow(0 0 30px white)'
    pokemonImageShiny.src = pokemonImageDefault.src
    pokemonImageShiny.style.opacity = '100'
    //titlecase name
    let type = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)
    setBackground(type)
    // enable input button
    inputBtn.disabled = false
}


//function to generate a random number in a n interval
const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}



//Toggle full move list
showMovesBtn.addEventListener('click', (e) => {
    if (allMoves.style.display === 'none') {
        allMoves.style.display = 'flex'
    } else { allMoves.style.display = 'none' }
})



//Setup page based on pokemon object
const setupPage = (pokemon) => {
    weightNode.innerHTML = pokemon.weight + ' lbs'
    heightNode.innerHTML = parseInt(pokemon.height) / 10 + ' m'
    abilityNode.innerHTML = pokemon.abilities[0].ability.name.charAt(0).toUpperCase() + pokemon.abilities[0].ability.name.slice(1)
    typeNode.innerHTML = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)
    nameNode.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    let type = typeNode.innerHTML
    //Set textcontent of divs
    pokemonImageDefault.src = pokemon.sprites['front_default']
    pokemonImageShiny.src = pokemon.sprites['front_shiny']

    //Added fullmove list and toggle button
    let FullMoveList = pokemon.moves.map((element) => {
        return element.move.name
    })
    movelist.innerHTML = ''
    FullMoveList.forEach(element => {
        let li = document.createElement('li')
        li.textContent = element
        movelist.append(li)
    });
    setBackground(type)
}

//SWITCH STATEMENT FOR BACKGROUND COLOR ACCORDING TO POKEMON
const setBackground = (type) => {

    switch (type) {
        case 'Normal':
            bodyNode.style.backgroundImage = normalBackground
            break;
        case 'Fire':
            bodyNode.style.backgroundImage = fireBackground
            break;
        case 'Water':
            bodyNode.style.backgroundImage = waterBackground
            break;
        case 'Grass':
            bodyNode.style.backgroundImage = grassBackground
            break;
        case 'Electric':
            bodyNode.style.backgroundImage = electricBackground
            break;
        case 'Ice':
            bodyNode.style.backgroundImage = iceBackground
            break;
        case 'Fighting':
            bodyNode.style.backgroundImage = fightingBackground
            break;
        case 'Poison':
            bodyNode.style.backgroundImage = poisonBackground
            break;
        case 'Ground':
            bodyNode.style.backgroundImage = groundBackground
            break;
        case 'Flying':
            bodyNode.style.backgroundImage = flyBackground
            break;
        case 'Psychic':
            bodyNode.style.backgroundImage = psychicBackground
            break;
        case 'Bug':
            bodyNode.style.backgroundImage = bugBackground
            break;
        case 'Rock':
            bodyNode.style.backgroundImage = rockBackground
            break;
        case 'Ghost':
            bodyNode.style.backgroundImage = ghostBackground
            break;
        case 'Dark':
            bodyNode.style.backgroundImage = darkBackground
            break;
        case 'Dragon':
            bodyNode.style.backgroundImage = dragonBackground
            break;
        case 'Steel':
            bodyNode.style.backgroundImage = steelBackground
            break;
        case 'Fairy':
            bodyNode.style.backgroundImage = fairyBackground
            break;

    }
}