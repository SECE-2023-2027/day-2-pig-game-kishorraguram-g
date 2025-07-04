var startnewgame = document.querySelector(".newgame");
var hold = document.querySelector(".hold");
var rolldice = document.querySelector(".rolldice");
var dice = document.querySelector(".dice");
var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
var player1score = document.querySelector(".score1");
var player2score = document.querySelector(".score2");
var player1current = document.querySelector(".current-score1");
var player2current = document.querySelector(".current-score2");
var rolbtn = document.querySelector(".rolbtn");
var holdbtn = document.querySelector(".holdbtn");
var player1total = 0;
var player2total = 0;   
var currentplayer = 1;
var current = 0;

var randomNumber = function() {
    return Math.floor(Math.random() * 6) + 1;
};


function updatePlayerStyles() {
    switch(currentplayer) {
        case 1:
            player1.style.backgroundColor = 'rgb(236, 179, 194)'; 
            player2.style.backgroundColor = 'rgb(235, 103, 147)'; 
            break;
        case 2:
            player1.style.backgroundColor = 'rgb(235, 103, 147)'; 
            player2.style.backgroundColor = 'rgb(236, 179, 194)'; 
            break;
    }
}


startnewgame.addEventListener("click", function() {
    player1total = 0;
    player2total = 0;
    currentplayer = 1;
    current = 0;
    player1score.textContent = "0";
    player2score.textContent = "0";
    player1current.textContent = "0";
    player2current.textContent = "0";
    dice.style.display = "none";
    rolbtn.disabled = false;
    holdbtn.disabled = false;
});

function addtotalscore(){
    switch(currentplayer) {
        case 1:
            player1total += current;
            player1score.textContent = player1total;
            console.log("player 1: "+player1total);
            break;
        case 2:
            player2total += current;
            player2score.textContent = player2total;
            console.log("player 2: "+player2total);
    }
}




rolldice.addEventListener("click", function() {
    let temp= randomNumber();
    dice.style.display = "block";
    dice.src = `assets/dice${temp}.png`;
    current+=temp;
    switch(temp){
       case 1:
        current=0;
        switch(currentplayer) {
            case 1:
                player1current.textContent = "0";
                currentplayer = 2;
                break;
            case 2:
                player2current.textContent = "0";
                currentplayer = 1;
                break;
        }
        updatePlayerStyles();
        default:{
             console.log("current: "+current);
            switch(currentplayer) {
                case 1:
                    player1current.textContent = current;
                    break;
                case 2:
                    player2current.textContent = current;
                    break;
            }
    }
}
});

hold.addEventListener("click", function() {
    if(current === 0) {
        alert("You need to roll the dice first!");
        return;
    }
    addtotalscore();
    
    current = 0;
    switch(currentplayer) {
        case 1:
            if(player1total >= 100){
                alert("Player 1 wins!");
                rolbtn.disabled= true;
                holdbtn.disabled= true;
            }
            break;
        case 2:
            if(player2total >= 100){
                alert("Player 2 wins!");
                rolbtn.disabled= true;
                holdbtn.disabled= true;
            }
            break;
    }
    switch(currentplayer) {
        case 1:
            player1current.textContent = "0";
            currentplayer = 2;
            break;
        case 2:
            player2current.textContent = "0";
            currentplayer = 1;
            break;
    }
    updatePlayerStyles();
})





