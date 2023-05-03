console.log("HTML works")

// fetch("https://www.dnd5eapi.co/api/classes").then(resp => resp.json()).then(json => console.log(json))
fetch("http://localhost:3000/classes").then(resp => resp.json()).then(classes => createCardElement(classes))

function createCardElement(classes){
     //creating div
    let cardFront= document.createElement("div")
    cardFront.classList.add("classCard")

    let h2 = document.createElement("h2")
    h2.textContent=classes.classes //create class name for card

    //insert image to card
    let img = document.createElement("img")
    img.src = classes.image

    let p = document.createElement("p")
    p.textContent = ""// insert desc

    cardFront.append(p, img, h2)
    document.getElementById("class-card").appendChild(cardFront)


//     const container = document.querySelector("ul#dndClassList")
// classes.forEach(dndClass => {
    //class, description, 
    //create element h2 to hold class name 
    //create element to create description of class 
    //create element to list to hold name and des
    // append list to container
    // Stretch: add photos to classes
    
    
    
};