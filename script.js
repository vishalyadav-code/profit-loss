var shares=document.querySelector("#no-of-shares");
var price=document.querySelector("#stock-price");
var currentPrice=document.querySelector("#current-price");
var outputBtn=document.querySelector("#output-btn");
var output=document.querySelector("#answer");

outputBtn.addEventListener("click", resultHandler)

function resultHandler(){
    
        var stocks = Number(shares.value);
    var cost = Number(price.value);
    var curCost = Number(currentPrice.value);
    
    if(stocks<1 || cost<1 || curCost<1){
        output.innerText = "Please enter all the fields with more than 0 value"
    }
    else{
    var oldProduct = stocks*cost;
    var newProduct = stocks*curCost;
    console.log("Stocks "+stocks+" Cost "+cost+" CurrentCost "+curCost)
    if(oldProduct<newProduct){
        var diff = newProduct-oldProduct;
        var profitPer = ((curCost-cost)*100)/cost;
        profitPer = profitPer.toFixed(2);
        console.log("Profit ", diff , profitPer);
        output.innerText = "You're in PROFIT with Rs."+diff+" which is "+profitPer+"% 🎉🎆🎊";
    }
    else if (oldProduct>newProduct){
        var lossDiff = oldProduct-newProduct;
        var lossPer = ((cost-curCost)*100)/cost;
        console.log("Loss ", lossDiff , lossPer);
        lossPer = lossPer.toFixed(2);
        output.innerText = "Sorry, you're in loss with Rs."+lossDiff+" which is "+lossPer+"% 😴";
    }
    else{
        output.innerText = "No pain, no gain";
    }

}
}