var readlinesync =require("readline-sync")
var chalk=require("chalk")
var score=0;

var highscorer=[ 
  
  {name:"Milan",
   score:5},
   {
     name:"Devang",
     score:4
   }
]

function welcome(){
     var useranswer= readlinesync.question(chalk.yellow("Do you know Harry Potter? "))
    
    if(useranswer==="yes"){
         var useranswer=readlinesync.question(chalk.blue("What's your name "))
         console.log("Hii "+ chalk.yellowBright(useranswer))
            console.log(chalk.bgBlue("So let's begin the Quiz About the Harry Potter"))

            console.log(chalk.green("There will two levels if you got atleast 4 points then only you will get entry for level 2"))
    
    



function play(options,question,right){

 var useranswer=readlinesync.keyInSelect(options);
       if(useranswer+1===right){
         console.log(chalk.bgGreenBright("Hurray you are right"))
         score++;

       }
       else{

         console.log(chalk.red("You are wrong"))
         console.log(chalk.yellowBright("The right answer is "+ right))
       }
        
         console.log (chalk.bgGreen("The current score is "+  score))
         
}

var questions=[
{ question:"A wizard who cannot do magic is known as a",

options:["Bleaker","Squib","Duddle","Wizont"],

right:  2 ,
},

{
   question:"How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",

   options:["He transfigures into a shark",
"He kisses a mermaid",
"He eats gillyweed",
"He performs a bubble-head charm"],

right: 3  ,
},

{
  question:"Who played Lord Voldemort in the movies?",
  options:["Jeremy Irons",
"Tom Hiddleston",
"Gary Oldman",
"Ralph Fiennes"],
right: 4 ,
},

{
 question:"From what King’s Cross platform does the Hogwarts Express leave?",
 options:["Eight and One-quarter",
"Nine and Three-quarters",
"Five and a Half",
"Eleven"],
 right: 2 ,
},

{

question:"Who has given Harry Potter the Invisibility cloak?",
options:["Dumbledore",
"Mad-eye Moody",
"Professor Snape",
"Dobby"],
right: 1 ,
}
]



function game(){

   for( var i=0;i<questions.length;i++){

      var currentquestion=questions[i];
      console.log(chalk.bgBlue(currentquestion.question))
       play(currentquestion.options,currentquestion.question,currentquestion.right)
   }




}


   function showscore(){
console.log(chalk.yellowBright("Your final score is ")+score)
 console.log(chalk.bgRed("Highscorers are:"))
for(var j=0;j<highscorer.length;j++){
   var currenthighscorer=highscorer[j];
        console.log(chalk.yellowBright(currenthighscorer.name)+":"+chalk.cyan(currenthighscorer.score))
 }
}

function checking(){

if(score>=4){
  console.log(chalk.green.underline("Hurrah! you are highscorer ."))
  //console.log(chalk.blackBright("Please send me the screen shot of your score and i will update my highscorer list"))
}
else if(score<4 && score>=2){
  console.log(chalk.magenta("You are moderate you can retry this quiz once again."))
}
else{
  console.log(chalk.magentaBright.red("You are not a Harry Potter's Fan Sorry."))
}
}

game()
showscore()
checking()

    }
else  {
           console.log(chalk.red("Sorry i will come up with a different topic for you next time"))
    }

   } 

welcome()


// //Level 2

var highscorer=[{name:"Devang",
                  score:10},
                  {name:"Yukta",
                  score:9,
                  }
                  ]

if(score>=4){
  console.log(chalk.green(" Hurrray")+chalk.red("!") +chalk.bgMagenta("You are eligible for level 2 "))



function play(options,question,right){

 var useranswer=readlinesync.keyInSelect(options);
       if(useranswer+1===right){
         console.log(chalk.bgGreenBright("Hurray you are right"))
         score++;

       }
       else{

         console.log(chalk.red("You are wrong"))
         console.log(chalk.yellowBright("The right answer is "+ right))
       }
        
         console.log (chalk.bgGreen("The current score is "+  score))
         
}

var questions=[
{ question:"What does Hermione use to defeat the Devil’s Snare plant?",

options:["Fire",
"Expelliarmus!",
"Wind",
"A Reducto Charm"],

right:  1,
},

{
   question:"How many Weasley siblings are there?",

   options:["5",
"7",
"10",
"3"],

right:2  ,
},

{
  question:"Who has been stealing Harry’s letters from Ron and Hermione at the beginning of ‘Harry Potter and the Chamber of Secrets’?",
  options:["Dumbledore",
"Draco Malfoy",
"Dobby",
"The Dursleys"],
right: 3 ,
},

{
 question:"The three kinds of balls used in Quidditch are Bludgers, Snitches, and…",
 options:["Quaffles",
"Wiffles",
"Boccis",
"Foozles"],
 right:1 ,
},

{

question:"Where does Dumbledore’s Army meet in ‘Harry Potter and the Order of the Phoenix’?",
options:["The Room of Requirement",
"The Gryffindor Common Room",
"Hagrid’s House",
"The Shrieking Shack"],
right:1  ,
}
]



function game(){

   for( var i=0;i<questions.length;i++){

      var currentquestion=questions[i];
      console.log(chalk.bgBlue(currentquestion.question))
       play(currentquestion.options,currentquestion.question,currentquestion.right)
   }




}


   function showscore(){
console.log(chalk.bgGreen("Your final score is ")+score)
 console.log(chalk.bgRed("Highscorers are:"))
for(var j=0;j<highscorer.length;j++){
   var currenthighscorer=highscorer[j];
        console.log(chalk.yellowBright(currenthighscorer.name)+":"+chalk.cyan(currenthighscorer.score))
 }
}

function checking(){
console.log(chalk.bgGreen("Your Final Score is: "+score))
if(score>=9){
  console.log(chalk.green.underline("Hurrah! you are highscorer ."))
  console.log(chalk.blackBright("Please send me the screen shot of your score and i will update my highscorer list"))
}
else if(score<=8 && score>=5){
  console.log(chalk.magenta("You are moderate you can retry this quiz once again."))
}
else{
  console.log(chalk.magentaBright.bgBlueBright("You are not a Harry Potter's Fan Sorry."))
}
}


game()
showscore()
checking()
}
