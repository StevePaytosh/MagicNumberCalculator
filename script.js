
var MagicNumberCalculatorViewModel = function()
{
	this.totalGames = ko.observable("Total Games");
	this.teamAWins = ko.observable("wins");
	this.teamALosses = ko.observable("losses");
	this.teamBWins= ko.observable("wins");
	this.teamBLosses=ko.observable("losses");
	this.teamAName=ko.observable("Team A");
	this.teamBName=ko.observable("Team B");
	this.magicNumberDisplay=ko.observable("");
	this.readyToCalculate=ko.observable(true);
	
	this.calculate = function(){ calculateMagicNumber(this);};
	this.clear = function() { clear(this); };
	
}

$(document).ready(function(){
  
  ko.applyBindings(new MagicNumberCalculatorViewModel() );
 
});  

function calculateMagicNumber(vm)
{ 
	if(validate(vm))
	{
		var res=vm.teamAName()+"'s Magic Number is "+(vm.totalGames()-vm.teamAWins()-vm.teamBLosses()+1);
		vm.magicNumberDisplay(res);  
	}
}

function clear(vm)
{
 vm.totalGames("Total Games");
 vm.teamAWins("wins")
 vm.teamALosses("losses");
 vm.teamBWins("wins");
 vm.teamBLosses("losses");
 vm.teamAName("Team A");
 vm.teamBName("Team B");
 vm.magicNumberDisplay("");
 vm.readyToCalculate(true);
}

function validate(vm)
{
	if(isNaN(vm.totalGames()) ) {vm.magicNumberDisplay("Invalid Input: "+ vm.totalGames()); return false;}
	if(isNaN(vm.teamAWins()) ) {vm.magicNumberDisplay("Invalid Input: "+ vm.teamAWins()); return false;}
	if(isNaN(vm.teamBLosses()) ) {vm.magicNumberDisplay("Invalid Input: "+ vm.teamBLosses()); return false;}
	
	return true;
}
