//Justin McBurnie
//October 3, 2015
//Expressions Worksheet


//DOG AGE

var actualAge =1; //actual age of dog
var dogYears  =7; //dog years
var results   =actualAge * dogYears; //Actual age times years in dog years

console.log("Sparky is" + " "+ actualAge +" "+"human years old" +" "+ "which is"+" "+results +" "+ "in dog years"); //Output


//Slices of Pizza

var slicePerPizza =8; //Number of slices per pizza
var people        =10;//Number of people at the party
var numPizzas     =5;//Number of pizzas order for party
var results       =(slicePerPizza * numPizzas / people); //slice per pizzs times the number of pizzas divided by the num of people.

console.log("Each person ate"+" "+ results +" "+ "slices of pizza at the party."); // results output

//Slices of Pizza 2


var slicePerPizza =8;//Number of slices per pizza
var people        =10;//Number of people at the party
var numPizzas     =5;//Number of pizzas order for party
results       =(slicePerPizza * numPizzas / people);//slice per pizzs times the number of pizzas divided by the num of people.
sparkyResults  =(results % 1); //results % 1 gives us 0 slices of pizza sparky gets
console.log("Sparky got"+" "+ sparkyResults +" "+ "slices of pizza.");// output


//Average shopping Bill

var groceryBill  =[25, 30, 28, 38, 50];// array of weekly totals
var groceryTotal =groceryBill[0] + groceryBill[1] + groceryBill[2] + groceryBill[3] + groceryBill[4];//total spent on weekly groceries
var weeklyAverage =(groceryTotal / 5); // the average of a weeks of grocery shopping.
console.log("you have spent a total of" +" "+ "$"+ groceryTotal+" "+ "on groceries over 5 weeks." +" "+ "That is an average of" +" "+ "$"+weeklyAverage+"."); // console output of both results.
