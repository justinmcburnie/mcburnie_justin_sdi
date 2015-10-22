//Justin McBurnie
//10-20-15
//Functions assignment



//variables
var lotName= prompt("please enter which lottery you would like.");
var pb;
var fl;

//functions
function lotValidate(lotName){
    while (lotName === ""){
        console.log("PLease enter something.")
    }

    return lotName;
}

function pbNumGen(){
    var powerball = [];

    for (var i=0; i<5; i++;){
        powerball[i] = math.random()* (max+min) + min;

        powerball[i] = math.round()

    }
}

//function calls

//lotValidate(lotName);//
pb = pbNumGen(53,1);
fl = flNumGen();