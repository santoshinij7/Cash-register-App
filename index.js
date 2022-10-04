const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-Of-notes");

//Array of available notes
const availableNotes = [2000,500,200,100,50,20,10,5,2,1]

//check for validate bill and cash amount
checkButton.addEventListener("click" , function validateBillAndCashAmount(){
   hideMessage();
    console.log(billAmount.value);
    if(billAmount.value > 0 ){
        if(cashGiven >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned)
        } else {  
            showMessage("The cash provided should atleast be equal to the bill amount");
        }
    }else {
        showMessage("Invalid Bill Amount");
    }
});

// logic for calculating numbers
function calculateChange(amountToBeReturned){
    //go over all the available
    for(var i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]);
        //amount to be returned
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        //updating the no of notes in the table for crnt amnt
        noOfNotes[i].innerText = numberOfNotes;
    }
}
function hideMessage(){
    message.style.display = "none";
}
function showMessage(msg) {
    console.log("here");
    message.style.display = "block";
    message.innerText = msg;
}