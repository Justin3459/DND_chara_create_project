console.log("HTML works")

// fetch("https://www.dnd5eapi.co/api/classes").then(resp => resp.json()).then(json => console.log(json))
fetch("http://localhost:3000/classes").then(resp => resp.json()).then(classes => createContainer(classes)
)

function createContainer(classes){
        
    const container = document.querySelector("ul#dndClassList")
classes.forEach(dndClass => {
    //class, description, 
    //create element h2 to hold class name 
    //create element to create description of class 
    //create element to list to hold name and des
    // append list to container
    // Stretch: add photos to classes
    
    
    
});}