var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ")


console.log("Hello " + userName + "!")
console.log("How well do you know about Marvel? Let's check it")
console.log("*******************")
console.log("INSTRUCTION")
console.log("All answers in small letter and only in chars")
console.log("for every right answer you get +1 and else you get -1")
console.log("*******************")

function play(question, answer){
var userAnswer = readlineSync.question(question)

if (userAnswer === answer){
  console.log("Right");

  score = score + 1
} else {
  console.log("Wrong");

}
console.log("Your score is: ", score);
}

var questions = [{
  question: "What was the first Marvel movie? ",
  answer: "iron man"
},{
  question: "How many avengers films are there? ",
answer: "four"

},{
  question: "Who plays Iron Man? ",
  answer: "robert downey jr."
},
 {
 question:"What is Phase 4 of Marvel called?",
    answer:"the multiverse saga"
 },
{
  question:"How many stones does Thanos have",
  answer:"six"
}
                ];

for (var i=0; i<questions.length; i++){
var currentQuestion = questions[i];
play(currentQuestion.question, currentQuestion.answer)
}
