//Business logic
var Player = function(name, score, totalScore) {
  this.name = name;
  this.score = score;
  this.total = totalScore;
}
var randomNumber = function() {
  var randomScore = Math.floor((Math.random() * 6)) + 1;
  return randomScore;
}
var score = 0;
var totalScore = 0;



//UserLogic

$(document).ready(function() {


  $("#rollPlayer1").click(function() {

    var randomScore = randomNumber();

    if (randomScore > 1) {
      score = score + randomScore;
      totalScore = totalScore + score;
      $("#currentScore1").append(totalScore)
    }



  })









})
