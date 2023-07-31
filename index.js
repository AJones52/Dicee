var randomNumber1 = Math.floor(Math.random() * 6) + 1; /*Chooses a random side of dice 1*/

var randomDiceImage = "dice" + randomNumber1 + ".png"; 

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; /*Chooses a random side of dice 2*/

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); /*Selects and assigns a value*/

if (randomNumber1 > randomNumber2) //If Player 1 wins
  {
    document.querySelector("h1").innerHTML = "🫲 Victor: Player 1!";
  }

else if (randomNumber2 > randomNumber1)
 {
   document.querySelector("h1").innerHTML = "🫱 Victor: Player 2!";
 }

else
  {
    document.querySelector("h1").innerHTML = "✌️Tie!";
  }
