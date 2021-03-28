var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question(chalk.cyan.bold("What is your name🖐 ? "));
console.log("  ");
console.log(chalk.yellow("Welcome 🙏  " + username));
console.log("    ");
console.log(chalk.yellow("Lets 🧐  see how much you know about me! 😁  "));
console.log("  ");
console.log(chalk.yellow("Type the correct option from options a,b,c"));
console.log("  ");
var score = 0;

var myscore = [
  {
    name: "sohan",
    scor: "20"
  },

  {
    name: "kiwi",
    scor: "18"
  },

  {
    name: "duck",
    scor: "16"
  },

  {
    name: "tiger",
    scor: "14"
  }
]

function game(question, answer) {
  var solution = readlineSync.question(chalk.green(question));

  if (solution === answer) {
    console.log("You are Correct 🎉  ");
    score = score + 2;
  } else {
    console.log("You are Wrong ‍ 😑‍  ");
    console.log(chalk.cyanBright("Correct answer is: ") + chalk.bgMagenta(answer));
    score = score + 0;
  }
  console.log(chalk.cyanBright("Total score: " + score));
  console.log("--------------------------");
}

var questions = [
  {
    question: "1.What is my HomeTown? \na.nagpur \nb.chandrapur \nc.wardha \n",
    answer: "b"
  },

  {
    question: "2.What am I pursuing? \na.BSC \nb.engineering \nc.MBBS \n",
    answer: "b" 
  },

  {
    question: "3.Which is my favourite Movie? \na.Kaho na pyaar hai \nb.Godfather \nc.Avengers \n",
    answer: "b" 
  },

  {
    question: "4.What do i like to do in free time? \na.Sleep \nb.Eat \nc.watch \n",
    answer: "a" 
  },

  {
    question: "5.What is my Favuorite singer? \na.Justin Bieber \nb.Cardi B \nc.Dua Lipa \n",
    answer: "c" 
  },

  {
    question: "6.Which is my favourite Criket Player? \na.Rohit \nb.virat \nc.dhoni \n",
    answer: "b"
  },

  {
    question: "7.What food i like the most? \na.Chinese \nb.Nonveg \nc.Sweet \n",
    answer: "a"
  },

  {
    question: "8.What is my Birthdate? \na.25March \nb.24March \nc.26March \n",
    answer: "a"
  },

  {
    question: "9.What is my favourite social media? \na.linkedin \nb.instagram \nc.twitter \n",
    answer: "a"
  },

  {
    question: "10.What is my favourite actor? \na.pankaj tripathi \nb.sumeet vyas \nc.jitendra kumar \n",
    answer: "c" 
  }
]

for (var i = 0; i < questions.length; i++) {
  var current = questions[i];
  game(current.question, current.answer);
}
console.log(chalk.bold.blueBright("Your final Score is: " + score));
console.log("   ");


//Comparing scores
  for(var j = 0; j<myscore.length ; j++){
    if(score == myscore[j].scor){
      j = j + 1;
      console.log(chalk.blueBright("🥳   Congratulations You have became the " + j + " highest scorer of game 🔥"));
      console.log("  ");
    console.log(chalk.blueBright("Send your screenshot on my social account for updation of leaderboard 🙌  😁 "));
    console.log("  ");
    }
  }
   if(score < myscore[3].scor ){
      console.log(chalk.blueBright("Try again to improve your score 😄"));
    }

   //Scoreboard
    console.log(chalk.keyword('orange').bold("\n*****Check out Leaderboard*****"));
    for(var k = 0; k<myscore.length ; k++){
      console.log(myscore[k].name + " ➜ " + myscore[k].scor);
    }
