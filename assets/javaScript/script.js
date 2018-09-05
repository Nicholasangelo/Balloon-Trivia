questions = [{
    question: "Which was NOT a passenger on the first Hot Air Balloon?",
    choices: ["A Rooster", "A Duck", "An Ape", "A Sheep"],
    correct: 2
}, {
    question: "True or Flase: Latex Balloons are biodegradable?",
    choices: ["True", "False"],
    correct: 0

}, {
    question: "The Rubber Balloon was invented in:",
    choices: ["1791", "1802", "1690", "1824"],
    correct: 3

}, {
    question: "Which is the only short film ever nominated for an Oscar other than BEST SHORT FILM?",
    choices: ["The Red Dragon", "The Red Shoes", "The Red Balloon", "The Red Violin"],
    correct: 2

}, {
    question: "___ is not a common material in modern day balloons",
    choices: ["Graphene", "Rubber", "Latex", "Nylon"],
    correct: 0

}, {
    question: "The song '99 Luftballons was written in response to:",
    choices: ["Latex killing Sea Turtles", "A drunk clown at the singers wedding", "Cold War paranoia", "A sick acid trip"],
    correct: 2
}];

//VARS
var count = 15;
var intervalId;
var incorrect;
var correct;
var currentQuestion = 0;


//SEND VAR TO HTML
$("#countDown").html(incorrect);

//SETS STATUS QUO -- PAGE BEFORE START
statusQ();

// SET TIMEOUTS FOR INCOMING DIVS ((QUESTIONS))
// setTimeout(askQuestionTwo, 16000);
// setTimeout(thirtytwoSeconds, 1000 * 32);
// setTimeout(fortyeightSeconds, 1000 * 48);
// setTimeout(sixtythreeSeconds, 1000 * 63);

// ----------FUNCTION PARTY--------------------------------------------
function statusQ() {
    $(".questionOne").css("display", "none");
    $(".questionTwo").css("display", "none");
    $(".questionThree").css("visibility", "hidden");
    $(".questionFour").css("visibility", "hidden");
    $(".questionFive").css("visibility", "hidden");
}
//START COUNTDOWN
function startTimer() {
    count--;
    $("#timer").text(count);
}
//ASK QUESTION ONE
function askQuestionOne() {
    questionOne = $(".questionOne");
    //questions balloon appears on screen && displays question and answers
    questionOne.css("display", "block");
    $("#firstQ").html(questions[currentQuestion].question);
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        $("#firstA").append('<button class="userAnswer" id="button">' + questions[currentQuestion].choices[i] + '</button>');
    };
    //if the correct answer is not chosen the balloon will "pop" && if the correct answer IS chosen the balloon will pop
    if (count <= 0) {
        questionOne.css("display", "none");
        stop();
        currentQuestion++;
        count = 15;
        incorrect++;
    }

}
//ASK QUESTION TWO
function askQuestionTwo() {
    setTimeout(function (askQuestionTwo) {
        $(".questionTwo").css("display", "block");
        $("#secondQ").html(questions[currentQuestion].question);
        for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
            $("#secondA").append('<button class="userAnswer" id="button">' + questions[currentQuestion].choices[i] + '</button>');
        }
    }, 16000);
    if (count === -1) {
        $(".questionTwo").css("visibility", "hidden");
        stop();
        currentQuestion++;
        count = 15;
        incorrect++;
    }
}





// function questionThree() {
//     setTimeout(thirtytwoSeconds, 1000 * 32);
//     $(".questionThree").css("visibility", "visible");
//     count--;
//     $("#timer").text(count);
//     if (count === 0) {
//         $(".question").css("visibility", "hidden");
//         incorrect++;
//     }
// }
// function questionFour() {
//     setTimeout(fortyeightSeconds, 1000 * 48);
//     $(".questionFour").css("visibility", "visible");
//     count--;
//     $("#timer").text(count);
//     if (count === 0) {
//         $(".question").css("visibility", "hidden");
//         incorrect++;
//     }
// }
// function questionFive() {
//     setTimeout(sixtythreeSeconds, 1000 * 63);
//     $(".questionFive").css("visibility", "visible");
//     count--;
//     $("#timer").text(count);
//     if (count === 0) {
//         $(".question").css("visibility", "hidden");
//         incorrect++;
//     }
// }



//START GAME
function startGame() {
    // CLEAR INTERVAL TO PREVENT MULTIPLE CLICKS -- SET INTERVAL TO 1 SECOND
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
    //DISPLAY FIRST DIV ON CLICK -- MOD STATUSQ
    startTimer();
    askQuestionOne();
    askQuestionTwo();

}

