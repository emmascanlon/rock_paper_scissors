
var opponentChoices = ["rock", "paper", "scissors"]

var selection = undefined;
var opponentChoice = undefined;
var result = undefined;
var wins = 0
var ties = 0
var losses = 0
var totalGames = wins + ties + losses
let winsPercent =  wins / totalGames * 100
var tiesPercent = ties / totalGames * 100 
var lossesPercent = losses / totalGames * 100


var rock = document.getElementById("rock");
rock.addEventListener("click", function(event) {
  selection = "rock";
  opponentChoice = opponentChoices[Math.floor(Math.random() * 3)];
  document.getElementById("selection").innerHTML = selection
  document.getElementById("opponent_choice").innerHTML = opponentChoice

  if (opponentChoice == "rock"){
result = 'tie';
ties += 1;
document.getElementById("ties").innerHTML = ties
}

else if (opponentChoice =="scissors") {
result = 'win';
wins += 1;
document.getElementById("wins").innerHTML = wins}

else {
result = 'loss'
losses += 1;
document.getElementById("losses").innerHTML = losses}

document.getElementById("result").innerHTML = result
totalGames = wins + ties + losses
document.getElementById('wins_percent').innerHTML = (wins/ totalGames * 100).toFixed(2)
  document.getElementById('losses_percent').innerHTML = (losses / totalGames * 100).toFixed(2)
  document.getElementById('ties_percent').innerHTML = (ties / totalGames * 100).toFixed(2)
});



var paper = document.getElementById("paper");
paper.addEventListener("click", function(event) {
  selection = "paper";
  opponentChoice = opponentChoices[Math.floor(Math.random() * 3)];
  document.getElementById("selection").innerHTML = selection
  document.getElementById("opponent_choice").innerHTML = opponentChoice

      if (opponentChoice == "paper"){
  
     result = "tie";
     ties += 1;
     document.getElementById("ties").innerHTML = ties}
    else if (opponentChoice =="rock") {
  
    result = "win";
     wins += 1;
     document.getElementById("wins").innerHTML = wins}
    else {
   
    result = "loss";
     losses += 1;
     document.getElementById("losses").innerHTML = losses}
     document.getElementById("result").innerHTML = result
     totalGames = wins + ties + losses
     document.getElementById('wins_percent').innerHTML = (wins / totalGames * 100).toFixed(2)
  document.getElementById('losses_percent').innerHTML = (losses / totalGames * 100).toFixed(2)
  document.getElementById('ties_percent').innerHTML = (ties / totalGames * 100).toFixed(2)
});



var scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(event) {
  selection = "scissors";
  opponentChoice = opponentChoices[Math.floor(Math.random() * 3)];

  document.getElementById("selection").innerHTML = selection
  document.getElementById("opponent_choice").innerHTML = opponentChoice

      if (opponentChoice == "scissors"){
  
  result = "tie";
     ties += 1;
    document.getElementById("ties").innerHTML = ties}
    else if (opponentChoice =="paper") {
   
  result = "win"
     wins += 1;
    document.getElementById("wins").innerHTML = wins}
    else {
    
  result = "loss";
     losses += 1;
    document.getElementById("losses").innerHTML = losses}
    document.getElementById("result").innerHTML = result
    totalGames = wins + ties + losses
    document.getElementById('wins_percent').innerHTML = (wins / totalGames * 100).toFixed(2)
  document.getElementById('losses_percent').innerHTML = (losses / totalGames * 100).toFixed(2)
  document.getElementById('ties_percent').innerHTML = (ties / totalGames * 100).toFixed(2)
});


var reset = document.getElementById("reset");
reset.addEventListener("click", function(event) {
  wins = 0 
  ties = 0
  losses = 0 
  document.getElementById("wins").innerHTML = wins
  document.getElementById("ties").innerHTML = ties
  document.getElementById("losses").innerHTML = losses
  document.getElementById('wins_percent').innerHTML = winsPercent
  document.getElementById('losses_percent').innerHTML = lossesPercent
  document.getElementById('ties_percent').innerHTML = tiesPercent

});