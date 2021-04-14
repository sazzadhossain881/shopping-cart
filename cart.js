document.getElementById("addCase").addEventListener('click',function(){
   handleProductChange(true);
})

document.getElementById("sub-case").addEventListener('click',function(){
   
    handleProductChange(false);
})

function handleProductChange(isIncrease){
    var caseInput=document.getElementById("caseCount");
    var caseCount=parseInt(caseInput.value);
    var caseNewCount=caseCount;
    if(isIncrease==true){
        caseNewCount=caseCount+1;
    }
    if(isIncrease==false && caseCount>0){
        caseNewCount=caseCount-1;
    }
    caseInput.value=caseNewCount;
    var caseTotal=caseNewCount*59;
    document.getElementById("caseTotal").innerText='$'+caseTotal;
    totalPrice();
}

document.getElementById("add-phone").addEventListener('click',function(){
  handleProductChangePhone(true);

})

document.getElementById("sub-phone").addEventListener('click',function(){
  handleProductChangePhone(false);
})

function handleProductChangePhone(isDecrease){
    var phoneInput=document.getElementById("phone-count");
    var phoneCount=parseInt(phoneInput.value);
    var phoneNewCount=phoneCount;
    if(isDecrease==true){
        phoneNewCount=phoneCount+1;
    }
    if(isDecrease==false && phoneCount>0){
        phoneNewCount=phoneCount-1;
    }
    phoneInput.value=phoneNewCount;
    var phoneTotal=phoneNewCount*1219;
    document.getElementById("phoneTotal").innerText='$'+ phoneTotal;
    totalPrice();
}

function totalPrice(){
    var phoneInput=document.getElementById('phone-count');
    var phoneCount=parseInt(phoneInput.value);

    var caseInput=document.getElementById("caseCount");
    var caseCount=parseInt(caseInput.value);

    var totalPrice=phoneCount*1219+caseCount*59;
    document.getElementById("total-price").innerText='$'+totalPrice;

    var tax=Math.round(totalPrice*0.1);
    document.getElementById("tax-amount").innerText='$'+tax;

    var grandTotal=totalPrice+tax;
    document.getElementById("grand-total").innerText='$'+grandTotal;


}