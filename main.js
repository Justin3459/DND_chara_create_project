let classes;
// let name = "user input character name"
// let attributes ={
//     strength : 0,
//     dexterity : 0,
//     constitution : 0,
//     intelligence : 0,
//     wisdom : 0,
//     charisma : 0
// }

// let savingThrows = {
//     strength: 0,
//     dexterity:0,
//     constitution:0,
//     intelligence:0,
//     wisdom:0,
//     charisma:0
// //modifiers are per 2 levels +-1 modifier
// }

// let skills = {
//     acrobatics: "dex mod",
//     animalHandling: "wis mod",
//     arcana:"int mod",
//     athletics: "str mod",
//     deception: "cha mod",
//     history: "int mod",
//     insight: "wis mod",
//     intimidation: "cha mod",
//     investigation: "int mod",
//     medicine: "wis mod",
//     nature: "int mod",
//     perception: "wis mod",
//     performance: "cha mod",
//     persuasion: "cha mod",
//     religion: "int mod",
//     sleightOfHand: "dex mod",
//     stealth: "dex mod",
//     survival: "wis mod"
// }
// let passivePerception = "8 + proficientcy + perception"
// let armorClass = "10+dex or armor. maybe use user input unless i want to build a json with base items"
// let initiative = "dex mod. use user input? unless add feat json"
// let speed = "user input. unless json feat + race."
//let currentHitPoints = "user input. class determined. classes Json needs to be modified"
//let tempHitPoints = "user input"
//let hitDice = "user input. classes Json needs to be modified"
//let deathDice = "user input. not needed for character create?"
//let melee = "user input or json of weapon, modifier, attack bonus, range?"
//let range = "user input or json of weapon, modifier, attack bonus, range"
//let spellCast = "user input. spells json?"
//let gold = {cp:,sp:,gp:,ep:} "user input"
//let equipment = "user input. equipment json"
//let language = "user input. race, class, and background affected"
//let feats = "user input. feat json"
//let personalityTrait = "user input"
//let ideals = "user input"
//let bonds = "user input"
//let flaws  = "user input"
// let level = "user selected level from level-select"
//let background = "user input? background json. backgrounds add some bonuses"
//let faction = "user input"
//let race = "user input. race json. races add bonuses"
//let alignment = "user input. maybe dropdown select"
//let experience = "user input"
// 

const levelSelect = document.getElementById("level-select")

fetch("http://localhost:3000/classes")
.then(resp => resp.json())
.then(data => {
    classes = data
    createCardElement(classes)})
.catch(error => console.log("failed to get"))

function createCardElement(classes){
    classes.forEach(element => {
        createFandBDivs(element)
    })

    cardFlip()
}

function createFandBDivs(element){
    let card = document.createElement("div")
    card.classList = "card"

    let cardFront = document.createElement("div")
    cardFront.classList = "cardFront"

    let h2 = document.createElement("h2")
    h2.id = "class-name"
    h2.textContent=element.name
    cardFront.append(h2)

    let img = document.createElement("img")
    img.src = element.image
    h2.append(img)

    let desFront = document.createElement("p")
    desFront.textContent = element.description
    cardFront.append(desFront)

    let cardBack = document.createElement("div")
    cardBack.classList = "cardBack"

    //create list. UL to LI?
    let ul = document.createElement('ul')
    let desBack = document.createElement("p")
    desBack.textContent = getJsonData(element, levelSelect.value)
    cardBack.append(desBack)

    //add button to bottom of the card. cardFront and cardBack.
    //button text is "create adventurer"
    let button = document.createElement("button")
    button.textContent = "Create Adventurer"
    // //add eventListener to push selected card to array/nest object
    // button.addEventListener('click' , )

    // cardBack.appendChild(button)
    cardFront.append(button)
    card.append(cardBack, cardFront)
    document.getElementById("container")
        .append(card)
}

function cardFlip(){
    const cards = document.querySelectorAll('.card')
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        this.classList.toggle('flipped')
      })
    })
}

function getJsonData(obj, element){
    let jsonString = JSON.stringify(obj)
    let jsonParse = JSON.parse(jsonString)
    let levelData = jsonParse.level[0][element] 
    if (typeof levelData === "object"){
        return JSON.stringify(levelData)
    }
    else {
        return levelData
    }  
}   

levelSelect.addEventListener("change", (e) => {
    const selectedLevel = e.target.value
    const cards = document.querySelectorAll('.card')
    cards.forEach(function(card) {
        let desBack = card.querySelector('.cardBack p')
        let element = card.querySelector('.cardFront h2').textContent
        desBack.textContent = getJsonData(classes.find(c => c.name ===element), selectedLevel)
    })
})

//desBack information should be displayed as a li 
//do i need to contain it in a ul?
//use levelSelect? to display each item in selectedLevel as an li then append to desBack 

