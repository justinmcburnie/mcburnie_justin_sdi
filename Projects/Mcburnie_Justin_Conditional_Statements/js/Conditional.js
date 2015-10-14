/*Justin McBurnie
10-14-15
Conditional Statements*/


var budget          =20000
var carPrice        =prompt("Please enter car sell price.:");//cars price before taxes and interest
var tax             =prompt("please enter tax rate: ");//tax on vehicle sell
var interestRate    =prompt("Please enter interest rate(in decimal)");//Interest rate for the vehicle
taxPrice            =Number(carPrice * tax);
carTax              =Number(+carPrice + taxPrice);
carinterest         =Number(+carTax * interestRate);
carTotal            =Number(+ carinterest + carTax);


if(carTotal <= budget){
    console.log("We Can buy the car!");
}else if(carTotal > budget){
    console.log("Look for a cheaper car.");
}
