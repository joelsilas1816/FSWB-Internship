// const listItem = document.querySelector("li")
const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")
// const ol = document.querySelector("ol")

var chores = []

const insertItems = () => {
    if(chores.includes(input.value)) console.log("Chore already exists")
    else{
        const listItem = document.createElement('li')
        const textnode = document.createTextNode(input.value)
        listItem.appendChild(textnode)
        list.appendChild(listItem)
        chores.push(input.value) 
    }
}

button.addEventListener('click', insertItems)