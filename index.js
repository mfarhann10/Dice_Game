let randomNumber1 = Math.floor(Math.random() *6) + 1;
let randomNumber2 = Math.floor(Math.random() *6) + 1;
let diceImage = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
]



document.querySelector(".img1").setAttribute("src", diceImage[randomNumber1 - 1]);
document.querySelector(".img2").setAttribute("src", diceImage[randomNumber2 - 1]);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}else{
    document.querySelector("h1").innerHTML = "Refresh Me";
}