/*justin mcburnie
week3 worksheet*/

var mpg = prompt("Please enter vehicles MPG:"); //mpg of the vehicle
var gasGauge =prompt("Please enter gasGauge in percent. Write as decimal.:");//current gas gauge with percent writeen as deciaml
var tankCapicity =prompt("Please enter gas tank capacity:");
totalMiles =    (mpg * tankCapicity);//total miles on full tank
milesLeft =     (totalMiles * gasGauge);// total miles left
console.log(milesLeft);
    if(milesLeft <= 200){
        console.log("stop!!!!.");
    }