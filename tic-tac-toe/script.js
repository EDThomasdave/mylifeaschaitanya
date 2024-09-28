let boxes = document.querySelectorAll(".boxes");
let boxContainer = document.querySelector(".box-container");
let body = document.querySelector("body");
let resetButton = document.querySelector(".reset-button");
let game = document.querySelector(".game");
let mainHeading = document.querySelector(".heading");
let currentPlayer = "player1";
let themeArea = document.querySelector(".theme");
let switchArea = document.querySelector(".switch");
let themeButton = document.querySelector(".button");
let currentTheme = "light";

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2]
];

// Theme toggle functionality
themeArea.addEventListener("click", () => {
    if (currentTheme === "light") {
        for (let box of boxes) {
            box.classList.add("boxes-dark");
            box.classList.remove("boxes-light");
        }
        mainHeading.classList.add("heading-text-dark");
        mainHeading.classList.remove("heading-text-light");
        game.classList.add("game-dark");
        game.classList.remove("game-light");
        themeButton.classList.add("light-mode-click", "dark-mode", "switch-dark");
        themeButton.classList.remove("switch-light", "light-mode", "dark-mode-click");
        currentTheme = "dark";
    } else if (currentTheme === "dark") {
        for (let box of boxes) {
            box.classList.add("boxes-light");
            box.classList.remove("boxes-dark");
        }
        game.classList.add("game-light");
        game.classList.remove("game-dark");
        themeButton.classList.remove("light-mode-click");
        themeButton.classList.add("dark-mode-click", "light-mode", "switch-light");
        themeButton.classList.remove("dark-mode", "switch-dark");
        currentTheme = "light";
    }
});

// Game logic for boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (currentPlayer === "player1") {
            box.innerText = "O";
            currentPlayer = "player2";
        } else if (currentPlayer === "player2") {
            box.innerText = "X";
            currentPlayer = "player1";
        }
        box.classList.add("disabled");  
        winnerCheck();
    });
});


let winnerCheck = () => {
    for (let pattern of winPatterns) {
        let positionOne = boxes[pattern[0]].innerText;
        let positionTwo = boxes[pattern[1]].innerText;
        let positionThree = boxes[pattern[2]].innerText;

        if (positionOne !== "" && positionTwo !== "" && positionThree !== "") {
            if (positionOne === positionTwo && positionTwo === positionThree) {
                alert(`Winner is ${positionOne}`);
                for (let box of boxes) {
                    box.classList.add("disabled");  
                }
            }
        }
    }
};

resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.classList.add("drop-animation");
    });


    setTimeout(() => {
        boxes.forEach((box) => {
            box.innerText = ""; 
            box.classList.remove("disabled"); 
            box.classList.remove("drop-animation");
            box.classList.add("fade-in");  

          
            setTimeout(() => {
                box.classList.remove("fade-in");
            }, 500); 
        });

        currentPlayer = "player1"; 
    }, 500); 
});
