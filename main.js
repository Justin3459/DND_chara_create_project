console.log("HTML works")

fetch("https://www.dnd5eapi.co/api/classes").then(resp => resp.json()).then(json => console.log(json))
fetch("http://localhost:3000/classes").then(resp => resp.json()).then(json => console.log(json))