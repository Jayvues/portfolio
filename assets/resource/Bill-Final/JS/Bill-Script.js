//<!-- Code by JAY -->
//POP UP
function popUp() {
    //To introduce a player//
    var playerName1 = document.getElementById("p1").value;
    document.getElementById("welcomeplayer1").innerHTML =
        "Bonjour - <b>" + playerName1;
    document.getElementById("1").innerHTML = playerName1;
    var playerName2 = document.getElementById("p2").value;
    document.getElementById("welcomeplayer2").innerHTML =
        "Bonjour - <b>" + playerName2;
    document.getElementById("2").innerHTML = playerName2;
    document.getElementById('ac-wrapper').style.display = "none";
}

///To shift the players/////
function setidElement14() {
    document.getElementById("b15").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b10").disabled = true;
    document.getElementById("b11").disabled = true;
    document.getElementById("b12").disabled = true;
    document.getElementById("b17").disabled = true;
}

function setidElement15() {
    document.getElementById("b14").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b16").disabled = true;
}

function setidElement16() {
    document.getElementById("b15").disabled = false;
    document.getElementById("b7").disabled = false;
    document.getElementById("b8").disabled = false;
    document.getElementById("b9").disabled = false;
    document.getElementById("b10").disabled = false;
    document.getElementById("b11").disabled = false;
    document.getElementById("b12").disabled = false;
    document.getElementById("b17").disabled = false;
}

function setidElement17() {
    document.getElementById("b14").disabled = false;
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b6").disabled = false;
    document.getElementById("b16").disabled = false;
}

/////To write the score and result////
let defaultballs = 12;
localStorage.setItem('deaultballs', defaultballs);
let player1balls = 0;
let player2balls = 0;
let score1 = 0;
let score2 = 0;

/////Actions for player 1////
function setidElement1() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 2 GAGNE !');
    } else {
        score1 = score1 + player1balls + 1
        document.getElementById('player1nbr').innerHTML = score1;
    }
    document.getElementById("img10").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
    document.getElementById("b1").style.visibility = "hidden";
}

function setidElement2() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 2 GAGNE !');
    } else {
        score1 = score1 + player1balls + 1;
        document.getElementById('player1nbr').innerHTML = score1;
    }
    document.getElementById("img9").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
    document.getElementById("b2").style.visibility = "hidden";
}

function setidElement3() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 2 GAGNE !');
    } else {
        score1 = score1 + player1balls + 1;
        document.getElementById('player1nbr').innerHTML = score1;
    }
    document.getElementById("img8").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
    document.getElementById("b3").style.visibility = "hidden";
}

function setidElement4() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 2 GAGNE !');
    } else {
        score1 = score1 + player1balls + 1;
        document.getElementById('player1nbr').innerHTML = score1;
    }
    document.getElementById("img7").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
    document.getElementById("b4").style.visibility = "hidden";
}

function setidElement5() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 2 GAGNE !');
    } else {
        score1 = score1 + player1balls + 1;
        document.getElementById('player1nbr').innerHTML = score1;
    }
    document.getElementById("img6").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
    document.getElementById("b5").style.visibility = "hidden";
}

function setidElement6() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 2 GAGNE !');
    } else {
        score1 = score1 + player1balls + 1;
        document.getElementById('player1nbr').innerHTML = score1;
    }
    document.getElementById("img5").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
    document.getElementById("b6").style.visibility = "hidden";

}


//////Aactions for player 2
function setidElement7() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 1 GAGNE !');
    } else {
        score2 = score2 + player2balls + 1
        document.getElementById('player2nbr').innerHTML = score2;
    }
    document.getElementById("img4").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>";
    document.getElementById("b7").style.visibility = "hidden";
}

function setidElement8() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 1 GAGNE !');
    } else {
        score2 = score2 + player2balls + 1;
        document.getElementById('player2nbr').innerHTML = score2;
    }
    document.getElementById("img3").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>";
    document.getElementById("b8").style.visibility = "hidden";

}

function setidElement9() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 1 GAGNE !');
    } else {
        score2 = score2 + player2balls + 1;
        document.getElementById('player2nbr').innerHTML = score2;
    }
    document.getElementById("img2").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>";
    document.getElementById("b9").style.visibility = "hidden";
}

function setidElement10() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 1 GAGNE !');
    } else {
        score2 = score2 + player2balls + 1
        document.getElementById('player2nbr').innerHTML = score2;
    }
    document.getElementById("img1").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>";
    document.getElementById("b10").style.visibility = "hidden";
}

function setidElement11() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 1 GAGNE !');
    } else {
        score2 = score2 + player2balls + 1
        document.getElementById('player2nbr').innerHTML = score2;
    }
    document.getElementById("img11").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>";
    document.getElementById("b11").style.visibility = "hidden";

}

function setidElement12() {
    defaultballs = defaultballs - 1;
    if (defaultballs < 1) {
        alert('GAME OVER, JOUEUR 1 GAGNE !');
    } else {
        score2 = score2 + player2balls + 1
        document.getElementById('player2nbr').innerHTML = score2;
    }
    document.getElementById("img12").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>";
    document.getElementById("b12").style.visibility = "hidden";

}

////Function to play again
function playAgain() {
    location.reload();
}