$(document).ready(function() {

var counter = 0;
var timeLeft = 33;
var correct
var incorrect


$(".quizReveal").hide();

$("button").click(function(){
    $(".quizReveal").show();
    $(".welcome").hide();
});

// var time = $("#timer");

function timeIt() {
    counter;
    counter++;
    $("#timer").html(timeLeft - counter);
    
}

var timerId = setInterval(timeIt, 1000)

// after 10 seconds stop
setTimeout(() => 
{ clearInterval(timerId); 
    alert('stop... time is up... you scored ' + correct + ' correct... and ' + incorrect + ' incorrect'); 

    }, 
    33000);


$(function(){

    correct = 0;
    incorrect = 0;


    $(".correct1").click(function() {
    correct++;
    });
    $(".correct2").click(function() {
    correct++;
    });
    $(".correct3").click(function() {
    correct++;
    });

    $(".incorrect").click(function(){
    incorrect++;
    });
});


// setInterval(function() {
//     counter++;
//      if (counter >= 0) {
//         time.html(timeLeft - counter);
//      }
//      if (counter === 0) {
//         alert('sorry, out of time');
//         clearInterval(counter);
//       }
//      1000;
// });


// correct += $('input[name="data[user_type]"]:radio').val();

// function convertTime(s) {

//     var min = math.floor(s/60);
//     //modulus...
//     var sec = s % 60;
//     return min + ":" + sec;

// }


});
