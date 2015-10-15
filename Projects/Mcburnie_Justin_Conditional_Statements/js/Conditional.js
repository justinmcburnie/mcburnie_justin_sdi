/*Justin McBurnie
10-14-15
Conditional Statements*/


var budget          =prompt("Please enter budget.:");
var carPrice        =prompt("Please enter car sell price.:");//cars price before taxes and interest
var tax             =prompt("please enter tax rate: ");//tax on vehicle sell
var interestRate    =prompt("Please enter interest rate(in decimal)");//Interest rate for the vehicle
var purchase   =prompt("are you happy with your purchase?");
taxPrice            =Number(carPrice * tax);
carTax              =Number(+carPrice + taxPrice);
carinterest         =Number(+carTax * interestRate);
carTotal            =Number(+ carinterest + carTax);

if (budget === ""){
    budget = prompt("Please enter Budget amount.");
}if (carPrice === ""){
    carPrice = prompt("Please enter Price of car.");
}if (tax === ""){
    tax = prompt("Please enter tax percentage.");
}if (interestRate === ""){
    interestRate = prompt("Please enter interest rate.");
}if (purchase === ""){
    purchase = prompt("Please answer question.");
}


(purchase) ? "Enjoy": "Keep looking";
console.log(purchase);




if(carTotal <= budget){
    console.log("We Can buy the car!");
    if(carTotal< budget) {
        console.log("we can also buy accessories for the new car. ")
    }

}else if(carTotal > budget){
    console.log("Look for a cheaper car.");
}




