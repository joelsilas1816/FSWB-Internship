const add = document.querySelector(".list-item")
const input = document.querySelector("input")
const ol = document.querySelector("ol")

var chores = []

var insertItems = () => {
    // if(chores.includes(input.value)) console.log("Chore already exists")
    // else{
        const li = document.createElement('li')
        const textnode = document.createTextNode(input.value)
        li.appendChild(textnode)
        ol.appendChild(li)
        // chores.push(input.value) 
    // }
}

add.addEventListener('click', insertItems)