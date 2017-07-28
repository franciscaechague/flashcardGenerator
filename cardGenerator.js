//================================================ Variables =====================================


var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");
var cardCounter = 0;

var basicCardsArray = [];
var clozeCardsArray = [];

var card1 = new BasicCard ("What color is the sky?", "blue");
basicCardsArray.push(card1);
var card2 = new BasicCard ("What color are the trees?", "green");
basicCardsArray.push(card2);
var card3 = new ClozeCard ("george washington was the first US president.", "george washington");
clozeCardsArray.push(card3);
var card4 = new ClozeCard ("christopher columbus discovered America.", "christopher columbus");
clozeCardsArray.push(card4);

//================================================ Game logic =====================================


startGame();


//================================================ Functions =====================================



function startGame(){
  inquirer.prompt([
    {
      type: 'list',
      name: 'gameStart',
      message: 'What kind of questions do you want?',
      choices: ['Basic Cards', 'Cloze Cards']
    }
  ]).then(function (answers){
    if (answers.gameStart === 'Basic Cards') {
      askBasicCards();
    } else {
      askClozeCards();
    }
  });
}



function askBasicCards(){
  if(cardCounter<basicCardsArray.length) {
    if (basicCardsArray[cardCounter].front) {
    inquirer.prompt([
      {
        type: 'input',
        name: 'userInput',
        message: basicCardsArray[cardCounter].front
      }
    ]).then(function (answers) {
      if (answers.userInput === basicCardsArray[cardCounter].back) {
        console.log("That's correct!");
      }else{
        console.log("Better luck next time!");
      }
    cardCounter++;
    askBasicCards();
    });
   }
  } else {
    inquirer.prompt([
      {
        type: 'confirm',
        name: 'restart',
        message: 'Do you want to play again?'
      }
    ]).then(function (answers){
      if (answers.restart === true){
        startGame();
      } else {
        console.log("Ok, bye bye");
        process.exit();
      }
    });
  }
}






function askClozeCards(){
  if(cardCounter<clozeCardsArray.length) {
  if (clozeCardsArray[cardCounter].partial){
    inquirer.prompt([
      {
        type: 'input',
        name: 'userInput',
        message: clozeCardsArray[cardCounter].partial
      }
    ]).then(function (answers) {
      if (answers.userInput === clozeCardsArray[cardCounter].cloze) {
        console.log("That's correct!");
      }else{
        console.log("Better luck next time!");
      }
    cardCounter++;
    askClozeCards();
    });
  }

  }else {
    inquirer.prompt([
      {
        type: 'confirm',
        name: 'restart',
        message: 'Do you want to play again?'
      }
    ]).then(function (answers){
      if (answers.restart === true){
        startGame();
      } else {
        console.log("Ok, bye bye");
        process.exit();
      }
    });
  }
}
