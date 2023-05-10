let classes;
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

    let desBack = document.createElement("p")
    desBack.textContent = getJsonData(element, levelSelect.value)
    cardBack.append(desBack)

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

    

