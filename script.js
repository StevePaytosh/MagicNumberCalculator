//var leading_team="A";

var MagicNumberCalculatorViewModel = function()
{
	this.totalGames = ko.observable("163");
	this.teamAWins = ko.observable("wins");
	this.teamALosses = ko.observable("losses");
	this.teamBWins= ko.observable("wins");
	this.teamBLosses=ko.observable("losses");
	this.teamAName=ko.observable("Team A");
	this.teamBName=ko.observable("Team B");
	this.magicNumberDisplay=ko.observable("");
	this.readyToCalculate=ko.observable(true);
	this.shouldShowResults=ko.observable(false);
	
	this.calculate = function(){ this.magicNumberDisplay(calculateMagicNumber());};
}

$(document).ready(function(){
  
  ko.applyBindings(new MagicNumberCalculatorViewModel() );
 
});  



function calculateMagicNumber()
{
	/*
  console.log("total games: " + values[0]);
  console.log("Team A Wins: "+ values[1]);
  console.log("Team B Losses: "+ values[4]);
  return values[0]-values[1]-values[4]+1; 
  */
  return "Magic Number is x";
}

function runTest(){
  document.getElementById("total_games").value=162;
  document.getElementById("team_a_wins").value=83;    
  document.getElementById("team_a_losses").value=59;  
  document.getElementById("team_b_wins").value=76;
  document.getElementById("team_b_losses").value=66;
};