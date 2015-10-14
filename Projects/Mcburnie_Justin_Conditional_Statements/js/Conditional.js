/*Justin McBurnie
10-14-15
Conditional Statements*/



var carPrice        =prompt("Please enter car sell price.:");//cars price before taxes and interest
var tax             =prompt("please enter tax rate: ");//tax on vehicle sell
/*var interestRate    =prompt("Please enter interest rate(in decimal)");//Interest rate for the vehicle*/
taxPrice            =(carPrice * tax + carPrice);
carInterest         =(taxPrice);
console.log(taxPrice);