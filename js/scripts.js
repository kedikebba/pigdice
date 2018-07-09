//Business Logic
function Player() {
  this.playerName;
  this.rollScore = 0;
  this.rollTotal = 0;
  this.totalScore = 0;

}
Player.prototype.rolling = function() {
  if (this.rollScore === 1) {
    this.rollTotal = 0;

  } else {
    this.rollTotal = this.rollTotal + this.rollScore;
  }
}
Player.prototype.holding = function() {
  this.totalScore += this.rollTotal;
  this.rollTotal = 0;

}
var randomNumber = function() {
  return Math.floor((Math.random() * 6)) + 1;
}
var player1 = "";
var player2 = "";


//User Logic
$(document).ready(function() {

  $("button#submitDetails").click(function(event) {
    event.preventDefault();
    player1 = new Player(true);
    player2 = new Player(false);
    $("#gameDetails").show();
    $("#playerDetails").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);
    $(".player1Name").val("");
    player1.playerName = player1Name;

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);
    $(".player2Name").val("");
    player2.playerName = player2Name;

  });

  $("button#rollButtonPlayer1").click(function(event) {
    event.preventDefault();
    player1.rollScore = randomNumber();
    $("#roll1Score").text(player1.rollScore);
    player1.rolling();
    $("#roll1Total").text(player1.rollTotal);
  });
  $("button#holdButtonPlayer1").click(function(event) {
    event.preventDefault();
    player1.holding();
    $("#total1Score").text(player1.totalScore);
    $("#roll1Total").empty();
    $("#roll1Score").empty();
  });
  $("button#rollButtonPlayer2").click(function(event) {
    event.preventDefault();
    player2.rollScore = randomNumber();
    $("#roll2Score").text(player2.rollScore);
    player2.rolling();
    $("#roll2Total").text(player2.rollTotal);
  });

  $("button#holdButtonPlayer2").click(function(event) {
    event.preventDefault();
    player2.holding();
    $("#total2Score").text(player2.totalScore);
    $("#roll2Total").empty();
    $("#roll2Score").empty();
  });

});
