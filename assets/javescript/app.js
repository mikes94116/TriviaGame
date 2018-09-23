$(document).ready(function() {

var counter = 0;
var timeLeft = 60;


$(".quizReveal").hide();

$("button").click(function(){
    $(".quizReveal").show();
    $(".welcome").hide();
});

var time = $("#timer");
time.html(convertTime(timeLeft - counter));

function convertTime(s) {

    var min = floor(s/60);
    //modulus...
    var sec = s % 60;
    return min + ":" + sec;

}

function timeIt() {
    
    counter++;
    time.html(convertTime(timeLeft - counter));

}

setInterval(timeIt, 1000);

// function timer() {

//     time = Date.now();
    
// }

// console.log(time);


});
