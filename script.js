const block = document.querySelector(".block")
const character = document.querySelector(".character")

function jump(){
    if(block.classList != "animate"){
        block.classList.add("animate")}
    setTimeout(function(){
        block.classList.remove("animate")
    }, 500)}

let checkDead = setInterval(function(){
    let blockTop =
    parseInt(window.getComputedStyle(block).getPropertyValue("top"))
    let characterLeft =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"))

    if(characterLeft<20 && characterLeft>0 && blockTop>280){
        character.style.animation = "none"
        character.style.display = "none"
        alert("You Lose!")
    }
})


/*let checkDead = setInterval(function(){
    let blockTop =
    parseInt(window.getComputedStyle(block).getPropertyValue("top"))
    var characterLeft =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"))

    if(characterLeft<20 && characterLeft>0 %% blockTop>300){
        character.style.animation = "none"
        character.style.display = "none"
        alert("You Lose!")
    }
})*/