//get four buttons as crystals
var startBtn = $("#start-btn");
var crystal1= $("#crystal1");

var crystal2= $("#crystal2");
var crystal3= $("#crystal3");
var crystal4= $("#crystal4");
var targetDiv = $("#target-number");
var targetNo;
var userNoDiv = $("#user-number");
var winDiv = $("#wins");
var loseDiv = $("#losses");
var userNo;
var crystal1Val;
var crystal2Val=crystal2.val();
var crystal3Val=crystal2.val();
var crystal4Val=crystal2.val();

var winCount= 0;
var lossCount= 0;

function findRandom(x,y){
    return Math.floor(Math.random() * x + y)
}
$(".crystal-btn").prop("disabled", true);
console.log(targetNo)
//generate a random target number

startBtn.on("click", function(){
    userNoDiv.attr("class", "")
    loseDiv.text(lossCount);
    winDiv.text(winCount);
    targetNo = findRandom (40,35);
    $(".crystal-btn").prop("disabled", false);
    crystal1Val = findRandom(5,1)
    
    do{
        crystal2Val = findRandom(16, 5);
    }while( crystal1Val==crystal2Val)
    do{
        crystal3Val = findRandom(25, 1);
    }while( crystal1Val==crystal3Val || crystal2Val==crystal3Val)
    do{
        crystal4Val = findRandom(15, 1);
    }while( crystal1Val==crystal4Val || crystal2Val==crystal4Val||crystal3Val==crystal4Val)
    
    crystal1.attr("value", crystal1Val);
    crystal2.attr("value", crystal2Val);
    crystal3.attr("value", crystal3Val);
    crystal4.attr("value", crystal4Val);

    console.log(crystal1Val + ' and ' + crystal2Val + ' and ' + crystal3Val + ' and ' +crystal4Val)
    console.log(targetNo)
    userNo = 0;
    userNoDiv.text(userNo)
    targetDiv.text(targetNo)
    $(this).prop("disabled", true);
       
})

$(".crystal-btn").on("click" , function(){
    console.log($(this).val())
    userNo +=  parseInt($(this).val());
    userNoDiv.text(userNo);
    checkWin();

})

function checkWin(){
    if (userNo == targetNo){
        winCount ++;
        winDiv.text(winCount);
        $(".crystal-btn").prop("disabled", true);
        startBtn.prop("disabled", false);
        reset();
        userNoDiv.attr("class", "win-text")
    } else if (userNo>targetNo){
        lossCount ++;
        loseDiv.text(lossCount);
        $(".crystal-btn").prop("disabled", true);
        startBtn.prop("disabled", false);
        reset();
        userNoDiv.attr("class", "lose-text")

    }
}

function reset(){
crystal1Val="";
crystal2Val="";
crystal3Val="";
crystal4Val="";

}
//assign crystals random values

//update player score on each crystal click

// if their score matches the traget number add to their win

//restart the game

