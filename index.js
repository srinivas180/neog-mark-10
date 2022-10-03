var billAmount = 243;
var cash = 2000;

var currencies = [2000, 500, 100, 20, 10, 5, 1];
var noOfNotes = [];

var returnAmount = cash - billAmount;
for(var i = 0; i < currencies.length; i++) {
    var noOfCurrentNotes = Math.floor(returnAmount / currencies[i]);
    noOfNotes.push(noOfCurrentNotes);
    returnAmount = returnAmount - (currencies[i] * noOfCurrentNotes);
    console.log(noOfNotes)
}