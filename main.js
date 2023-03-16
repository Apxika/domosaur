let messWithMe = document.querySelector(".mess-with-me")
messWithMe.style.fontSize = "40px"

let messClass = document.querySelector("p.mess-with-me")
messClass.style.background = "green"

function makeInviz(x){
    let hideMe = document.querySelector(x)
    hideMe.style.visibility = "hidden"
}

makeInviz("#hide-me")

let triImage = document.querySelector("#triceratops")
triImage.style.width = "324px"

messWithMe.addEventListener("click", function(){
    messWithMe.style.color = "orange"
})

triImage.addEventListener("click", function(){
    triImage.style.border = "2px solid red"
})

let feather = document.querySelector("#feathers")
feather.addEventListener("click", function(){
    feather.style.opacity = "0.5"
})

let button = document.querySelector("#toggle")
let row = document.querySelector("#row")
button.addEventListener("click", function(){
    row.style.background = "blue"
})

let biggify = document.querySelector("#biggify")
biggify.addEventListener("mouseenter", function(){
    biggify.style.width = "200px"
})

biggify.addEventListener("mouseout", function(){
    biggify.style.width = "162px"
})

