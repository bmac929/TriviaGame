console.log("loading js");

window.onload = welcome;
function welcome() {
    alert("TRIVIA!! Click OK to start!");


}
var answerRight = 0;
var answerWrong = 0;
var timer = 10;
var interval = setInterval(function () {
    timer--;
    if (timer <= 0) {
        endGame()


    } else {
        $("#time").text(timer);
    }
}, 1000);

function endGame() {

    alert("Too Long!! Your time is up!");


    reset();
}

function reset() {
    timer = 10
    welcome();
}

$("#right").on("click", hide1);

function hide1() {
    $(".answer 1").hide();

}