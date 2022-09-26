let dicee1 = document.querySelector(".img1");
let dicee2 = document.querySelector(".img2");
let title = document.querySelector("h1");

function rollDicee(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    dicee1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    dicee2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    
    if(randomNumber1 == randomNumber2) {
        title.innerHTML = "Drawn";
    } else if(randomNumber1 > randomNumber2) {
        title.innerHTML = "Player 1 Wins";
    } else {
        title.innerHTML = "Player 2 Wins";
    }
}

if (window.performance.navigation.type == 1) {
    rollDicee();
}

