$(document).ready(function () {
    window.onload = welcome;
    function welcome() {
        alert("TRIVIA!! Click OK to start!");


    }
    var answerRight = 0;
    var answerWrong = 0;
    var timer = 10;
    $("#score").text("Answers Right: " + answerRight + " Answers Wrong: " + answerWrong);
    $(".rightAnswer").on("click", addScore);
    // $(".rightAnswer").on("click", function () {
    //     console.log($(this).attr("class"));
    // });
    $(".wrongAnswer").on("click", addScore);
    // $(".wrongAnswer").on("click", function () {
    // console.log(this);
    // });
    var interval = setInterval(function () {
        timer--;
        if (timer <= 0) {
            endGame()


        } else {
            $("#time").text(timer);
        }
    }, 1000);

    function endGame() {

        alert("Your time is up! Answers Right: " + answerRight + ". Answers Wrong: " + answerWrong);


        reset();
    }

    function reset() {
        timer = 10
        welcome();
        answerRight = 0;
        answerWrong = 0;
        $(".answer").show();
    }

    $(".1").on("click", hide1);
    $(".2").on("click", hide2);
    $(".3").on("click", hide3);
    $(".4").on("click", hide4);
    $(".5").on("click", hide5);



    function hide1() {
        $(".1").hide();

    }
    function hide2() {
        $(".2").hide();

    }
    function hide3() {
        $(".3").hide();

    }
    function hide4() {
        $(".4").hide();

    }
    function hide5() {
        $(".5").hide();

    }

    function addScore() {
        if ($(this).attr("class") === "rightAnswer") {
            answerRight++
            $("#score").text("Answers Right: " + answerRight + "Answers Wrong: " + answerWrong + ".");
        }
        else {
            answerWrong++;
            $("#score").text("Answers Right: " + answerRight + "Answers Wrong: " + answerWrong + ".");
        }
    }



});
