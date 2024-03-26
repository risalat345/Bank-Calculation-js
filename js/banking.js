function getInput(inputId){
    const depositInput=document.getElementById(inputId);
    const depositInputText=depositInput.value;
    const depositInputNum=parseFloat(depositInputText);
    depositInput.value="";  
    return depositInputNum;
}
function getCurrentBalance(depositInputNum,balanceId){
    const currentDeposit=document.getElementById(balanceId);
    const currentDepositText=currentDeposit.innerText;
    const currentDepositNum=parseFloat(currentDepositText);
    currentDeposit.innerText=depositInputNum + currentDepositNum;
}
function getBalance(){
    const mainBalance=document.getElementById("main-balance")
    const mainBalanceText=mainBalance.innerText;
    const mainBalanceNum=parseFloat(mainBalanceText);
    return mainBalanceNum;
}
function getMainBalance(depositInputNum,isAdd){
    const mainBalance=document.getElementById("main-balance")
 const mainBalanceNum=getBalance();
    if(isAdd==true){
        mainBalance.innerText=mainBalanceNum+depositInputNum;
    }
    else{
        mainBalance.innerText=mainBalanceNum-depositInputNum;
    }
    return mainBalanceNum;
}
document.getElementById("deposit-button").addEventListener("click",function(){
     // get deposit input number
   const depositInputNum= getInput("deposit-input")
    // showing deposit balance
    if(depositInputNum>0){
        getCurrentBalance(depositInputNum,"deposit-ammount")
        // update main balance
        getMainBalance(depositInputNum,true)
    } 
})
document.getElementById("withdraw-button").addEventListener("click",function(){
    // get withdraw input
   const withdrawInputNum= getInput("withdraw-input")
// showing withdraw balance
const currentBalance=getBalance()
if(withdrawInputNum>0 && withdrawInputNum < currentBalance){
    getCurrentBalance(withdrawInputNum,"withdraw-ammount")
// update main Balance
getMainBalance(withdrawInputNum,false);
}
})