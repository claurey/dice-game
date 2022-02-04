function randomNumber1(){

    let randomNumber=Math.ceil(Math.random()*6);

    return randomNumber;
}


function whoIsWinner(){
    let player1 = randomNumber1();
    let player2 = randomNumber1();
    let winnerIs;
    document.querySelector(".img1").setAttribute("src",`images/dice${player1}.png`);
    document.querySelector(".img2").setAttribute("src",`images/dice${player2}.png`);
    
    if(player1>player2)winnerIs="🚩 Player 1 Wins!";
    else if (player2>player1)winnerIs="Player 2 Wins! 🚩";
    else winnerIs="Draw!";

    document.querySelector("h1").innerText=winnerIs;
}

whoIsWinner();



