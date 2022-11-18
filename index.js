var billAmount=document.querySelector("#bill-amount");
var cashGiven=document.querySelector("#cash-given");
var btnCheck=document.querySelector("#btn-check");
var showMsg=document.querySelector("#show-msg");
var notesReturn=document.querySelectorAll(".notes-return");


var availableNotes=[2000,500,100,50,20,10,5,2,1]

function validate(){
    if(parseInt(cashGiven.value) <0 || parseInt(billAmount.value)<0){
       showMsg.innerHTML="Amount should be positive";
        return false;
    }

    if(parseInt(cashGiven.value)< parseInt(billAmount.value)){
        showMsg.innerHTML="Cash given amount should be greater than Bill Amount"
        return false;
    }
    if(parseInt(cashGiven.value)== parseInt(billAmount.value)){
        showMsg.innerHTML="No change is required."
        return false;
    }
    showMsg.innerHTML="Below are the change details"
    return true;

}

function calculateChange(amountReturn){
    for(i=0;i<availableNotes.length;i++){
        notesTotal=Math.trunc(amountReturn/availableNotes[i])
        amountReturn=amountReturn%availableNotes[i];
        notesReturn[i].innerHTML=notesTotal;
    }

}

function eventHandler(){
    if(!validate()){
        return false;
    };

    var amountReturn=parseInt(cashGiven.value)-parseInt(billAmount.value)
    calculateChange(amountReturn)
}



btnCheck.addEventListener("click",eventHandler);