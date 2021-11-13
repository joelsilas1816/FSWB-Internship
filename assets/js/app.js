// const listItem = document.querySelector("li")
const list = document.querySelector("ul")
const input = document.querySelector("input")
const add = document.querySelectorAll("button")[0]
const changeBackground = document.querySelectorAll("button")[1]
const layout = document.querySelector('body')

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

        listItem.addEventListener('click' , e =>{
         chores.splice(chores.indexOf(e.target.innerHTML),1)
         e.target.remove()

        } )
    }
    input.value = ""
}

add.addEventListener('click', insertItems)
changeBackground.addEventListener('click',() => {
        layout.classList.toggle('dark')
})