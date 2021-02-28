document.getElementById("heading").innerHTML = "Lets see who got that luck!";
var name1 = prompt("First player's name: ");
var name2 = prompt("Second player's name: ");
var p=0;var h=0;var t=0;
document.getElementById("playername1").innerHTML = name1;
document.getElementById("playername2").innerHTML = name2;

function diceroll() {
  var x = Math.ceil(Math.random() * 6);
  var z = Math.ceil(Math.random() * 6);
  if (x === 1) {
    document.getElementById("player1").setAttribute("src", "dice1.png");
  } else if (x === 2) {
    document.getElementById("player1").setAttribute("src", "dice2.png");
  } else if (x === 3) {
    document.getElementById("player1").setAttribute("src", "dice3.png");
  } else if (x === 4) {
    document.getElementById("player1").setAttribute("src", "dice4.png");
  } else if (x === 5) {
    document.getElementById("player1").setAttribute("src", "dice5.png");
  } else {
    document.getElementById("player1").setAttribute("src", "dice6.png");
  }
  if (z === 1) {
    document.getElementById("player2").setAttribute("src", "dice1.png");
  } else if (z === 2) {
    document.getElementById("player2").setAttribute("src", "dice2.png");
  } else if (z === 3) {
    document.getElementById("player2").setAttribute("src", "dice3.png");
  } else if (z === 4) {
    document.getElementById("player2").setAttribute("src", "dice4.png");
  } else if (z === 5) {
    document.getElementById("player2").setAttribute("src", "dice5.png");
  } else {
    document.getElementById("player2").setAttribute("src", "dice6.png");
  }
  if (x > z) {
    document.getElementById("heading").innerHTML = name1 + " wins"; p++;
  } else if (x < z) {
    document.getElementById("heading").innerHTML = name2 + " wins"; h++;
  } else {
    document.getElementById("heading").innerHTML = "Its a tie !..Try another spin"; t++;
  }
document.getElementById("scores").innerHTML=name1+"'s score: "+p+" , "+name2+"'s score: "+h+" , "+"Tie count: "+t;




}
