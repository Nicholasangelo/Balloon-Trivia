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
var countOne = 15;
var countTwo = 15;
var countThree = 15;
var countFour = 15;
var countFive = 15;

var intervalId;
var incorrect;
var correct;

var currentQuestion = 0;

//SEND VAR TO HTML
$("#countDown").html(incorrect);


//SETS STATUS QUO -- PAGE BEFORE START
statusQ();

// SET TIMEOUTS FOR INCOMING DIVS ((QUESTIONS))
// setTimeout(sixteenSeconds, 16000);
// setTimeout(thirtytwoSeconds, 1000 * 32);
// setTimeout(fortyeightSeconds, 1000 * 48);
// setTimeout(sixtythreeSeconds, 1000 * 63);

// FUNCTION PARTY
function statusQ() {
    $(".questionOne").css("display", "none");
    $(".questionTwo").css("visibility", "hidden");
    $(".questionThree").css("visibility", "hidden");
    $(".questionFour").css("visibility", "hidden");
    $(".questionFive").css("visibility", "hidden");
}

function askQuestionOne() {
    questionOne = $(".questionOne");
    questionOne.css("display", "block");
    //START COUNTDOWN -- CONDISH: IF YOU RUN OUT OF TIME DIV VANISHES && WE ADD ONE TO "INCORRECT"
    countOne--;
    $("#timer").text(countOne);
    $("#firstQ").html(questions[this.currentQuestion].question);
    for (var i = 0; i < questions[this.currentQuestion].choices.length; i++) {
        $("#firstA").append('<button class="userAnswer" id="button"' + questions[this.currentQuestion].choices.length + '</button>');

    }
    if (countOne === -1) {
        questionOne.css("visibility", "hidden");
        stop();
        count = 15;
        incorrect++;
    }
    setTimeout(function () {
        $(".questionTwo").css("display", "block");
        currentQuestion++;
        countTwo--;
        $("#timer").text(countTwo);
        $("#secondQ").html(questions[this.currentQuestion].question);
        for (var i = 0; i < questions[this.currentQuestion].choices.length; i++) {
            $("#secondA").append('<button class="userAnswer" id="button"' + questions[this.currentQuestion].choices.length + '</button>');

            if (countTwo === 0) {
                $(".questionTwo").css("visibility", "hidden");
                stop();
                count = 15;
                incorrect++;
        
            }
        }
    }, 16000);
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
    intervalId = setInterval(startGame, 1000);
    //DISPLAY FIRST DIV ON CLICK -- MOD STATUSQ
    askQuestionOne();

}

