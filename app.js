const choices = document.querySelectorAll(".choice")
const msg =document.querySelector(".winner-msg")
let userPoint = document.querySelector(".user-score")
let compPoint = document.querySelector(".comp-score")
let resetBtn = document.querySelector(".reset-btn")
let userScore = 0;
let compScore = 0;
const resetGAme = () => {
    userScore = 0;
    compScore = 0;
     userPoint.innerHTML = `<div class="user-score">${userScore} <h4>user</h4> </div>`
   compPoint.innerHTML = `<div class="user-score">${compScore} <h4>user</h4> </div>`
}
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
       
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green";
        userPoint.innerHTML = `<div class="user-score">${userScore} <h4>user</h4> </div>`
    } else {
        compScore++;
         msg.innerText = `You lose!${compChoice} beats your ${userChoice}`
         msg.style.backgroundColor ="red";
         compPoint.innerHTML = `<div class="user-score">${compScore} <h4>user</h4> </div>`
    }
}
const drawGame = () => {
     msg.innerText = "Game was draw! play again ."
     msg.style.backgroundColor ="black";
}
const genCompChoice = () => {
    Options = ["rock", "paper", "scisser"];
    let rndInx = Math.floor(Math.random() * 3)
    return Options[rndInx]
}
const Process = (userChoice) => {
    console.log("user choice =", userChoice);
    let compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }else{
    let userWin = true;

    if (userChoice === "rock") {
        if (compChoice === "paper") {
            userWin = false;
        } else {
            userWin = true;
        }
    }
    else if (userChoice === "paper") {
        if (compChoice === "scisser") {
            userWin = false;
        } else {
            userWin = true;
        }
    }
    else if (userChoice === "scisser") {
        if (compChoice === "rock") {
            userWin = false;
        } else {
            userWin = true;
        }
    }
    showWinner(userWin,userChoice,compChoice);
};
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        Process(userChoice);
    })
})
resetBtn.addEventListener("click",resetGAme)