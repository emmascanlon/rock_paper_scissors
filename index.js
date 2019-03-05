
var opponentChoices = [
  "<img class = 'image' src='https://i0.wp.com/tvoinews.net/wp-content/uploads/2017/09/Fist-1.jpg?fit=495%2C448'/>", 
"<img class = 'image' src='http://www.clker.com/cliparts/Y/t/o/V/q/F/paper.svg'/>", 
"<img class = 'image' src='http://www.hmcoloringpages.com/wp-content/uploads/two_finger_peace_sign_coloring_page_5.gif'/>"]

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
  selection = "<img class = 'image' src='https://i0.wp.com/tvoinews.net/wp-content/uploads/2017/09/Fist-1.jpg?fit=495%2C448'/>"
  opponentChoice = opponentChoices[Math.floor(Math.random() * 3)];
  document.getElementById("selection").innerHTML = selection
  document.getElementById("opponent_choice").innerHTML = opponentChoice

  if (opponentChoice == "<img class = 'image' src='https://i0.wp.com/tvoinews.net/wp-content/uploads/2017/09/Fist-1.jpg?fit=495%2C448'/>"){
result = 'tie';
ties += 1;
document.getElementById("ties").innerHTML = ties
}

else if (opponentChoice =="<img class = 'image' src='http://www.hmcoloringpages.com/wp-content/uploads/two_finger_peace_sign_coloring_page_5.gif'/>") {
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
  selection = "<img class = 'image' src='http://www.clker.com/cliparts/Y/t/o/V/q/F/paper.svg'/>";
  opponentChoice = opponentChoices[Math.floor(Math.random() * 3)];
  document.getElementById("selection").innerHTML = selection
  document.getElementById("opponent_choice").innerHTML = opponentChoice

      if (opponentChoice == selection){
  
     result = "tie";
     ties += 1;
     document.getElementById("ties").innerHTML = ties}
    else if (opponentChoice =="<img class = 'image' src='https://i0.wp.com/tvoinews.net/wp-content/uploads/2017/09/Fist-1.jpg?fit=495%2C448'/>") {
  
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
  selection = "<img class = 'image' src='http://www.hmcoloringpages.com/wp-content/uploads/two_finger_peace_sign_coloring_page_5.gif'/>";
  opponentChoice = opponentChoices[Math.floor(Math.random() * 3)];

  document.getElementById("selection").innerHTML = selection
  document.getElementById("opponent_choice").innerHTML = opponentChoice

      if (opponentChoice == "<img class = 'image' src='http://www.hmcoloringpages.com/wp-content/uploads/two_finger_peace_sign_coloring_page_5.gif'/>"){
  
  result = "tie";
     ties += 1;
    document.getElementById("ties").innerHTML = ties}
    else if (opponentChoice == "<img class = 'image' src='http://www.clker.com/cliparts/Y/t/o/V/q/F/paper.svg'/>") {
   
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
  document.getElementById('wins_percent').innerHTML = 0
  document.getElementById('losses_percent').innerHTML = 0
  document.getElementById('ties_percent').innerHTML = 0

});