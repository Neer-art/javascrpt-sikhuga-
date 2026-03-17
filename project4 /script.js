// random numnber generate krvane hai between 1 and 100 
let randomNumber = parseInt(Math.random()*100 +1)

const userinput = document.querySelector("#guessField")
const submit = document.querySelector("#subt")
const guessslot = document.querySelector(".guesses")
const remianing = document.querySelector(".lastResult")
const loworhi = document.querySelector(".loworhi")
const startover = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1 

let playgame = true
if(playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess) || guess < 1 || guess >100){
        alert("Please enter a valid number")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over random number was ${randomNumber}`)
            endgame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guess it right`)
        endgame()
    }else if ( guess < randomNumber){
        displayMessage("Number is too low")
    }else if (guess > randomNumber){
        displayMessage("number is too high")
    }

}

function displayGuess(guess){
    userinput.value = ""
    guessslot.innerHTML += `${guess} `
    numGuess++
    remianing.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userinput.value= ""
    userinput.setAttribute('disabled',"")
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`
    startover.appendChild(p)
    playgame = false 
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 +1)
        prevGuess = []
        numGuess = 1 
        guessslot.innerHTML = ""
        remianing.innerHTML = `${11- numGuess}`
        userinput.removeAttribute("disabled","")
        startover.removeChild(p)
        playgame = true 

    })
}