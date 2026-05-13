const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const lastGuess = document.querySelector(".previousInfo");
const attempts = document.querySelector(".remaining");
const result  = document.querySelector(".result");
const playAgain = document.querySelector(".again");
const lostMSG = document.querySelector(".lostMsg");

//random Number generator 
let randomNum =()=> { 

    return Math.floor(Math.random()* 100)+1;
}

// Number of Guess

let Guesses = 10;

//previous guesses Arrays

const previousGuess = [];

lostMSG.classList.add("hide");

playAgain.classList.add("hide");

//input Checking
btn.addEventListener("click" , ()=> {
    Guesses--;
    previousGuess.push(input.value)
    lostMSG.classList.add("hide");
    
    if ( input.value == randomNum && Guesses != 0){
        
        result.innerText = `You won The Game \nGuess was :${randomNum}`
        lastGuess.classList.add("hide");
        attempts.classList.add("hide");
        playAgain.classList.remove("hide");
    } else if ( Guesses == 0 )  {
        result.classList.remove("hide")
        result.innerText = `You lost Game\nNumber was ${randomNum()} \n Remaining Guesses : 0`;
        lastGuess.classList.add("hide");
        attempts.classList.add("hide");
        playAgain.classList.remove("hide");
       
    }else {
        lostMSG.classList.remove("hide");
        lostMSG.innerText = "Nah, Think anyother Number"
        input.value = "";
        lastGuess.innerHTML = `Prevoius Guesses : ${previousGuess}`;
        attempts.innerText = `Guesses remaining : ${Guesses}`
    }
    input.value = "";
})

// Play Agin Button

playAgain.addEventListener("click", ()=> {  
        randomNum();
        previousGuess.length = 0
        Guesses = 10;
        lastGuess.classList.remove("hide");
        lastGuess.innerHTML = `Prevoius Guesses : ${previousGuess}`;
        attempts.classList.remove("hide");
        attempts.innerText = `Guesses remaining : ${Guesses}`;
        result.classList.add("hide");
        playAgain.classList.add("hide");
})