
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



//ALL TYPE BACKGROUND IMAGES
let normalBackground = 'url(https://pokemongohub.net/wp-content/uploads/2019/05/Normal-Types-1536x864.jpg)'
let fireBackground = 'url(https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg)'
let waterBackground = 'url(https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
let grassBackground = 'url(https://images.pexels.com/photos/53504/grass-rush-juicy-green-53504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
let electricBackground = 'url(https://iphoneswallpapers.com/wp-content/uploads/2021/06/Thunder-Storm-iPhone-Wallpaper.jpg)'
let iceBackground = 'url(https://images.pexels.com/photos/140234/pexels-photo-140234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
let fightingBackground = 'url(https://rare-gallery.com/thumbs/560343-boxing-gloves.jpg)'
let poisonBackground = 'url(https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLXM5MS1wYS04ODU0LTAxXzIuanBn.jpg)'
let groundBackground = 'url(https://c.wallhere.com/photos/55/aa/1280x853_px_Desert_Dirt_Dry_Environment_Erosion_ground_nature-1032524.jpg!d)'
let flyBackground = 'url(https://www.printawallpaper.com/wp-content/uploads/2020/07/birds_flying_detail.jpg)'
let psychicBackground = 'url(https://wallpaperaccess.com/full/2825357.png)'
let bugBackground = 'url(https://wallpaperaccess.com/full/4407226.jpg)'
let rockBackground = 'url(https://cdn.wallpapersafari.com/3/44/vhoKjl.jpg)'
let ghostBackground = 'url(https://updatenaw.com/wp-content/uploads/2021/09/Ghost-Skulls-Halloween-Night-Wallpaper-for-iPhone.jpg)'
let darkBackground = 'url(https://images.alphacoders.com/294/thumb-1920-294453.jpg)'
let dragonBackground = 'url(https://cdn.wallpapersafari.com/25/88/GvSHn1.jpg)'
let steelBackground = 'url(https://wallpaper.dog/large/20442056.jpg)'
let fairyBackground = 'url(https://wallpaperset.com/w/full/5/9/5/136134.jpg)'

//Submit Function
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    let pokemon = e.target.name.value.toLowerCase()
    let pokeObj = await getPoke(pokemon)
    setupPage(pokeObj)
    form.reset()
})

//Async Fetch statement
async function getPoke(name) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let pokemon = await response.json();
    return pokemon
}

//Mouseover function to reveal shiny
pokemonImageDefault.addEventListener('click', function (e) {
    pokemonImageDefault.style.zIndex = 1 
    pokemonImageShiny.style.zIndex = 2
    
})

//Click function to reveal default
pokemonImageShiny.addEventListener('click', function (e) {
    pokemonImageDefault.style.zIndex = 2 
    pokemonImageShiny.style.zIndex = 1
})

//Toggle full move list
showMovesBtn.addEventListener('click', (e) => {
    if (allMoves.style.display === 'none') {
        allMoves.style.display = 'flex'
    } else { allMoves.style.display = 'none' }
})


//setup page based on pokemon object
const setupPage = (pokemon) => {
    weightNode.innerHTML = pokemon.weight
    heightNode.innerHTML = pokemon.height
    abilityNode.innerHTML = pokemon.abilities[0].ability.name
    typeNode.innerHTML = pokemon.types[0].type.name
    nameNode.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    let typeBackground = typeNode.innerHTML

    //set textcontent of divs
    pokemonImageDefault.src = pokemon.sprites['front_default']
    pokemonImageShiny.src = pokemon.sprites['front_shiny']

    //SWITCH STATEMENT FOR BACKGROUND COLOR ACCORDING TO POKEMON TYPE
    switch (typeBackground) {
        case 'normal':
            bodyNode.style.backgroundImage = normalBackground
            break;
        case 'fire':
            bodyNode.style.backgroundImage = fireBackground
            break;
        case 'water':
            bodyNode.style.backgroundImage = waterBackground
            break;
        case 'grass':
            bodyNode.style.backgroundImage = grassBackground
            break;
        case 'electric':
            bodyNode.style.backgroundImage = electricBackground
            break;
        case 'ice':
            bodyNode.style.backgroundImage = iceBackground
            break;
        case 'fighting':
            bodyNode.style.backgroundImage = fightingBackground
            break;
        case 'poison':
            bodyNode.style.backgroundImage = poisonBackground
            break;
        case 'ground':
            bodyNode.style.backgroundImage = groundBackground
            break;
        case 'flying':
            bodyNode.style.backgroundImage = flyBackground
            break;
        case 'psychic':
            bodyNode.style.backgroundImage = pshycicBackground
            break;
        case 'bug':
            bodyNode.style.backgroundImage = bugBackground
            break;
        case 'rock':
            bodyNode.style.backgroundImage = rockBackground
            break;
        case 'ghost':
            bodyNode.style.backgroundImage = ghostBackground
            break;
        case 'dark':
            bodyNode.style.backgroundImage = darkBackground
            break;
        case 'dragon':
            bodyNode.style.backgroundImage = dragonBackground
            break;
        case 'steel':
            bodyNode.style.backgroundImage = steelBackground
            break;
        case 'fairy':
            bodyNode.style.backgroundImage = fairyBackground
            break;

    }

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
}
