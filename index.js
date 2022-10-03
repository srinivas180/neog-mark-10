var billAmountHTML = document.querySelector("#bill-amount");
var cashHTML = document.querySelector("#cash-given");
var billAmount, cash;

var btnCheck = document.querySelector("#btn-check");
var currencies = [2000, 500, 100, 20, 10, 5, 1];
var noOfNotes = [];

function getChange() {
    var returnAmount = cash - billAmount;
    noOfNotes = [];
    for(var i = 0; i < currencies.length; i++) {
        var noOfCurrentNotes = Math.floor(returnAmount / currencies[i]);
        noOfNotes.push(noOfCurrentNotes);
        returnAmount = returnAmount - (currencies[i] * noOfCurrentNotes);
    }
}

function fillNoOfNotesInHTML() {
    var notesHTML = document.querySelectorAll(".notes");
    notesHTML.forEach((note, index) => {
        note.innerHTML = noOfNotes[index];
    });
}

function clickHandler() {
    billAmount = parseInt(billAmountHTML.value);
    cash = parseInt(cashHTML.value);

    if(isNaN(billAmount) || isNaN(cash)) {
        console.log("Enter bill amount and cash given in edit boxes");
    }
    else if(billAmount > cash) {
        console.log("Enter valid cash or bill amount. Bill Amount mush be lesser than or equal to cash given.");
    }
    else {
        getChange();
        fillNoOfNotesInHTML();
    }
}

btnCheck.addEventListener("click", clickHandler);