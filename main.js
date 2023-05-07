console.log("HTML works")

// fetch("https://www.dnd5eapi.co/api/classes").then(resp => resp.json()).then(json => console.log(json))
fetch("http://localhost:3000/classes")
.then(resp => resp.json())
.then(classes => createCardElement(classes))
// .then(classes => console.log(classes))
.catch(error => console.log("failed to get"))

function createCardElement(classes){
    classes.forEach(element => {
        createFandBDivs(element)
    });
    

    // console.log(classes)
    
    
    //     const container = document.querySelector("ul#dndClassList")
    // classes.forEach(dndClass => {
        //class, description, 
        //create element h2 to hold class name 
        //create element to create description of class 
        //create element to list to hold name and des
            // append list to container
            // Stretch: add photos to classes  
            cardFlip()
        };

function cardFlip(){
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        this.classList.toggle('flipped');
      });
    });
}
function createFandBDivs(element){
        //create card div
            let card = document.createElement("div")
            card.classList = "card"
            
        //create cardFront
            let cardFront = document.createElement("div")
            cardFront.classList = "cardFront"
        //create p in card front
            let desFront = document.createElement("p")
            desFront.textContent = element.description
            cardFront.append(desFront)
        //create classname in card Front as h2
            let h2 = document.createElement("h2")
            h2.id = "class-name"
            h2.textContent=element.name
            cardFront.append(h2)
        //create img and append to h2
            let img = document.createElement("img")
            img.src = element.image
            h2.append(img)
            // cardFront.textContent = element.name
            // cardFront.image = element.image

            //create cardBack
            let cardBack = document.createElement("div")
            cardBack.classList = "cardBack"

            let desBack = document.createElement("p")
            const desBackInfo = json.stringify(element)
            console.log(desBackInfo)
            desBack.textContent = "desBackInfo"
            cardBack.append(desBack)

            //return just barbarianinfo
            // const barbarianInfo = element.level[0]
            // const barbarianInfoHTML = barbarianInfo.features
            //     .map(feature =>{`<li>${feature.name}: ${feature.description}</li>`})
            //     .join('')
            // cardBack.append(barbarianInfoHTML)
            //display level information appended to back. 
                //how to extract just level1
                //use value of dropdown menu?
            const levelSelect = document.getElementById("level-select")
            //dropdown menu eventlistener=>change
        //     levelSelect.addEventListener("change", updateLevelInfo)
            card.append(cardBack, cardFront)
            document.getElementById("container").append(card)
        //function to create cardBack information
    }

    //     function updateLevelInfo(){
        //         const selectedLevel = levelSelect.value;
        //         const levelInfo = element.level[0][selectedLevel]
                
                
                
        //         // const selectedLevel = parseInt(levelSelect.value)
        //         // const levelData = element.level[selectedLevel - 1]
        //         // cardBack.append(levelData)
        //     }
        //     

        // }
        function displayLevelInfo(level) {
            const levelData = element.level[level.toString()];
            const levelInfoHTML = Object.values(levelData[0]).map((info) => {
              return `<li>${info}</li>`;
            });
            const levelListHTML = `<ul>${levelInfoHTML.join('')}</ul>`;
            document.getElementById('cardBack').append(levelListHTML)
        }