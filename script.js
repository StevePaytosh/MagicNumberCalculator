//var leading_team="A";

var MagicNumberCalculatorViewModel = function()
{
	this.totalGames: ko.observable("162");
}

$(document).ready(function(){
  
  ko.applyBindings(new MagicNumberCalculatorViewModel() );
  
  /*
  $("#calculate").on("click", function(){
     
  var values=getFormValues();
  var results=calculateMagicNumber(values);
    
    
    $("#result").html("Magic Number <br>" + "Team " + leading_team + ": "  + results);
  })
  
   $("#clear").on("click", function(){
    $("#result").html("");
  })
 	*/
  
});  

function getFormValues()
{
    var values=[];
    values.push( document.getElementById("total_games").value);
    values.push( document.getElementById("team_a_wins").value);
    values.push( document.getElementById("team_a_losses").value);
    values.push( document.getElementById("team_b_wins").value);
    values.push( document.getElementById("team_b_losses").value);
  return values;
}

function getElementValue(elementID)
{
  return document.getElementById(elementID).value;
}

function calculateMagicNumber(values)
{
  console.log("total games: " + values[0]);
  console.log("Team A Wins: "+ values[1]);
  console.log("Team B Losses: "+ values[4]);
  return values[0]-values[1]-values[4]+1; 
}

function runTest(){
  document.getElementById("total_games").value=162;
  document.getElementById("team_a_wins").value=83;    
  document.getElementById("team_a_losses").value=59;  
  document.getElementById("team_b_wins").value=76;
  document.getElementById("team_b_losses").value=66;
};