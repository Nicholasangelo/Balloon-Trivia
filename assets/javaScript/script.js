// questions = [{
//     question: "Which was NOT a passenger on the first Hot Air Balloon?",
//     choices: ["A Rooster", "A Duck", "An Ape", "A Sheep"],
//     correct: 2
// }, {
//     question: "True or Flase: Latex Balloons are biodegradable?",
//     choices: ["True", "False"],
//     correct: 0

// }, {
//     question: "The Rubber Balloon was invented in:",
//     choices: ["1791", "1802", "1690", "1824"],
//     correct: 3

// }, {
//     question: "Which is the only short film ever nominated for an Oscar other than BEST SHORT FILM?",
//     choices: ["The Red Dragon", "The Red Shoes", "The Red Balloon", "The Red Violin"],
//     correct: 2

// }, {
//     question: "___ is not a common material in modern day balloons",
//     choices: ["Graphene", "Rubber", "Latex", "Nylon"],
//     correct: 0

// }, {
//     question: "The song '99 Luftballons was written in response to:",
//     choices: ["Latex killing Sea Turtles", "A drunk clown at the singers wedding", "Cold War paranoia", "A sick acid trip"],
//     correct: 2
// }];



//VARS
var count = 15;
var intervalId;
var incorrect = 0;
var correct;

//SEND VAR TO HTML
$("#countDown").text(incorrect);

// SET TIMEOUTS FOR INCOMING DIVS ((QUESTIONS))
setTimeout(sixteenSeconds, 1000 * 16);
setTimeout(thirtytwoSeconds, 1000 * 32);
setTimeout(fortyeightSeconds, 1000 * 48);
setTimeout(sixtythreeSeconds, 1000 * 63);

//SETS STATUS QUO -- PAGE BEFORE START
statusQ();

//START GAME
function startGame() {
    // CLEAR INTERVAL TO PREVENT MULTIPLE CLICKS -- SET INTERVAL TO 1 SECOND
    clearInterval(intervalId);
    intervalId = setInterval(startGame, 1000);
    //DISPLAY FIRST DIV ON CLICK -- MOD STATUSQ
    $(".questionOne").css("display", "block");
    //START COUNTDOWN -- CONDISH: IF YOU RUN OUT OF TIME DIV VANISHES && WE ADD ONE TO "INCORRECT"
    count--;
    $("#timer").text(count);
    if (count === -1) {
        $(".questionOne").css("visibility", "hidden");
        stop();
        incorrect++;
    }
}





// enter text


// FUNCTION PARTY
// AT START
function statusQ() {
    $(".questionOne").css("display", "none");
    //     $(".questionTwo").css("visibility", "hidden");
    //     $(".questionThree").css("visibility", "hidden");
    //     $(".questionFour").css("visibility", "hidden");
    //     $(".questionFive").css("visibility", "hidden");
}

// function questionOne() {


// }

// function questionTwo() {
//     setTimeout(sixteenSeconds, 1000 * 16);
//     $(".questionTwo").css("visibility", "visible");
//     count--;
//     $("#timerTwo").text(count);
//     if (count === 0) {
//         $(".questionTwo").css("visibility", "hidden");
//         incorrect++;
//     }
// }
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


// function startGame() {
//     intervalId = setIntervalId(count, 1000);
//     questionOne();
//     questionTwo();
//     questionThree();
//     questionFour();
//     questionFive();



