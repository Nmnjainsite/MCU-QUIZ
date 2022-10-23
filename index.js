var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ")


console.log("Hello " + userName + "!")
console.log("How well do you know about Marvel? Let's check it")
console.log("*******************")
console.log("INSTRUCTION")
console.log("there are 4 options each and you just have to choose the correct one")
console.log("for every right answer you get +1 and else you get -1")
console.log("*******************")

function play(question, answer,option){
  console.log(question)
var userAnswer = readlineSync.question(option)

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
  option:"a. iron man b.the hulk c.captain america d.thor  ",
  answer: "a"
},{
  question: "How many avengers films are there? ",
    option:"a.three b.eight c.four d.nine   ",
answer: "c"

},{
  question: "Who plays Iron Man? ",
    option:"a.robert downey jr. b.chris evans c.amitabh bachhan d.salman khan   ",
  answer: "a"
},
 {
 question:"What is Phase 4 of Marvel called?",
   option:"a.infinity saga b.mutliverse saga c.armor wars d.untitled eternals sequel   ",
    answer:"b"
 },
{
  question:"How many stones does Thanos have",
    option:"a.two b.nine c.ten d.six   ",
  answer:"d"
}
                ];

for (var i=0; i<questions.length; i++){
var currentQuestion = questions[i];
play(currentQuestion.question, currentQuestion.answer,currentQuestion.option)
}
