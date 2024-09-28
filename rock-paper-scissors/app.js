let choices = document.querySelectorAll(".choices");
let compscoreText = document.querySelector(".computer-score");
let userscoreText = document.querySelector(".player-score");
let statusText = document.querySelector(".status-text");
let compScore = 0;
let userScore = 0;
    
const compchoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let choicesArray = ["rock", "paper", "scissors"];
    return choicesArray[randomNumber];
};
let result = (userChoice) => {
    let compChoice = compchoice();
    if(compChoice === userChoice) {
        statusText.innerText = "It's a draw!"
    } else 
    if(userChoice === "scissors" && compChoice === "paper" || userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock") {
         userScore++;
         statusText.innerText = "Player Won!"
    } else if(userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock" || userChoice === "rock" && compChoice === "paper")  {
         compScore++;
         statusText.innerText = "Computer Won!";
    }
    compscoreText.innerText = compScore;
    userscoreText.innerText = userScore;
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        result(userChoice);
    }); 
});
