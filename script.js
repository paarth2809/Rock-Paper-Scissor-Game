let userScore=0
let compScore=0
const msg=document.querySelector("#msg")
const choices=document.querySelectorAll(".choice")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#computer-score")
const reset=document.querySelector(".reset-btn")

const playGame=(userChoice)=>{
    // generate computer choice
    const computerChoice=generateCompChoice()

    if(userChoice===computerChoice) drawGame()
    else{
        let userWin=true
        if(userChoice==="rock"){
            // scissors,paper
            userWin=computerChoice==="scissor" ? true : false
        }
        else if(userChoice==="scissor"){
            // paper,rock
            userWin=computerChoice==="paper" ? true : false
        }
        else{ //userChoice=="paper"
            // rock,scissor
            userWin=computerChoice=="rock" ? true : false
        }
        showWinner(userWin,userChoice,computerChoice)
    }
}

const generateCompChoice=()=>{
    // rock,paper,scissor
    const options=["rock","paper","scissor"]
    const ranIdx=Math.floor(Math.random()*3)
    const computerChoice=options[ranIdx]
    return computerChoice
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})

const resetGame=()=>{
    msg.innerText="Play your move"
    msg.style.backgroundColor="#081b31"
    userScore=0
    compScore=0
    userScorePara.innerText='0'
    compScorePara.innerText='0'
}

reset.addEventListener("click",resetGame)

const drawGame=()=>{
    msg.innerText="Game was Draw. Play Again."
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){  // you win
        userScore++
        userScorePara.innerText=userScore
        msg.innerText=`You win! Your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor="green"
    }
    else{ // you lose
        compScore++
        compScorePara.innerText=compScore
        msg.innerText=`You lose! Computer ${computerChoice} beats ${userChoice}`
        msg.style.backgroundColor="red"
    }
}