// Justin McBurnie
//10-7-15
//Expression Assignments


var wage          =14.15; // wage of employee
var hoursWorked  = 40;  // hours in one week worked
var taxes        =.15; //taxes taken out of gross pay
var monthlyGrossPay       =[566, 566, 566, 566];// pay for one month based off of gross results


grossResults     =(wage * hoursWorked);//one week gross pay
taxResults       =(grossResults * taxes);// the pay before taxes times the tax
netResults       =(grossResults - taxResults);//gross wage minus the taxes taken out
monthTotal     = monthlyGrossPay[0] + monthlyGrossPay[1] + monthlyGrossPay[2] + monthlyGrossPay[3];// month total before taxes
monthTaxes     =(monthTotal * taxes);// monthy total tiems the 15% tax
monthResults     =(monthTotal - monthTaxes); //total taxes taken out minus total gross pay
console.log("Pay after taxes is"+" "+ netResults +" "+ "for one week and" +" "+ monthResults +" "+ "for one month.");//Finally result in your net pay for one week and one month

//
