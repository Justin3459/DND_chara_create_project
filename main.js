// fetch("https://www.dnd5eapi.co/api/classes").then(resp => resp.json()).then(json => console.log(json))
fetch("http://localhost:3000/classes")
.then(resp => resp.json())
.then(classes => createCardElement(classes))
.catch(error => console.log("failed to get"))
// .then(classes => console.log(classes, element))
//when element arguement is passed the page does not load
function createCardElement(classes){
    classes.forEach(element => {
        createFandBDivs(element)
    });
function createFandBDivs(element){
    let card = document.createElement("div")
    card.classList = "card"

    let cardFront = document.createElement("div")
    cardFront.classList = "cardFront"

    let desFront = document.createElement("p")
    desFront.textContent = element.description
    cardFront.append(desFront)

    let h2 = document.createElement("h2")
    h2.id = "class-name"
    h2.textContent=element.name
    cardFront.append(h2)

    let img = document.createElement("img")
    img.src = element.image
    h2.append(img)

    let cardBack = document.createElement("div")
    cardBack.classList = "cardBack"

    let desBack = document.createElement("p")
    // console.log(desBackInfo)
    //need to create function to get information on the back
    desBack.textContent = getJsonData(element, levelSelect.value)
    cardBack.append(desBack)

    card.append(cardBack, cardFront)
    document.getElementById("container")
        .append(card)
}

    cardFlip()

function cardFlip(){
    const cards = document.querySelectorAll('.card')
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        this.classList.toggle('flipped');
      });
    });
}
};

function getJsonData(obj, element){
    let jsonString = JSON.stringify(obj)
    let jsonParse = JSON.parse(jsonString)
    let levelData = jsonParse.level[0][element] 
    //need to iterate through nested object
    if (typeof levelData === "object"){
    console.log(levelData)
        return JSON.stringify(leveldata)
    }
    else {
        return levelData
    }  
}   

const levelSelect = document.getElementById("level-select")
levelSelect.addEventListener("change", (e) => updateLevelInfo(e))
//function to get level number from drop down
function updateLevelInfo(e){
    const selectedLevel = e.target.value
    console.log(selectedLevel)
    const cards = document.querySelectorAll('.card')
    //iterate through classes
    cards.forEach(returnDesDetail(element))
    const selectedObj = document.getElementById("class-select").value
}
//how to get nested object informantion. **
function returnDesDetail(element){
    let desBack = element.querySelector('.cardBack p')
    let className = element.querySelector('.cardFront h2').textContent
    //iterate through json to make a string then 
    desBack.textContent = getJsonData(classes.find(c => c.name === className), selectedLevel)
}
 
