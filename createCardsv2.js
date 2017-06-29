//"use strict"

const inquirer = require('inquirer');
const fs = require('fs');
const read = require('./readjsonfile.js');
const write = require('./writejsonfile.js');
const prettyjson =require('prettyjson');
const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');


  inquirer.prompt ([
    {
      type: "list",
      name: "menu",
      message: "Which type of card would you like to create?",
      choices: ["Basic Flash Cards", "Cloze Flash Cards", "Quit"]
    }
  ]).then(function (response)  {
      if(response.menu === "Basic Flash Cards") {
        inputBasicCard();
      } else if (response.menu === "Cloze Flash Cards") {
        inputClozeCard();
      } else {
        console.log ('goodbye');
      }
  }, 

    function inputBasicCard () {
      return inquirer.prompt ([
        {
            type: "input",
            name: "front",
            message: "Input the question"
        },
        {
            type: "input",
            name: "back",
            message: "Input the answer"
        }
      ]).then(function(response){
          var newBasicCard = new BasicCard.Card(response.front, response.back);
          return newBasicCard;
      })
    },
  
// Create a new Basic Card and store it in the .JSON file
    Promise.all([
      inputBasicCard(),
      read('basicCards.JSON')
    ])
    .then(function ([card, contents]) {
      if (!contents) {
        contents = { basicCard: [] }
      }
      contents.basicCard.push(card)
      return write('basicCards.JSON', contents);
    })
    .then(function (data) {
      console.log(prettyjson.render(data));
      makeAnother();
      })
    .catch(function (err) {
      console.log('Err', err);
    }))
 
  

//==============================================================

// Create Cloze Cards module 
 
  function inputClozeCard () {
    return inquirer.prompt ([
      {
          type: "input",
          name: "fullSentence",
          message: "Input the full sentance"
      },
      {
          type: "input",
          name: "cloze",
          message: "Input the cloze"
      }
    ]).then(function(response){
        console.log('Your new card reads  ' + response.fullSentence, response.cloze);
        var newClozeCard = new ClozeCard.zCard(response.fullSentence, response.cloze);
        return newClozeCard;   
    })
  }
      Promise.all([
        inputClozeCard(),
        read('clozeCards.JSON')
      ])
      .then(function ([card, contents]) {
        if (!contents) {
          contents = { clozeCard: [] }
        }
        contents.clozeCard.push(card)
        return write('clozeCards.JSON', contents);
      })
      .then(function (data) {
        console.log(prettyjson.render(data));
        makeAnother();

      })
      .then(function (){

      })
      .catch(function (err) {
        console.log('Err', err);
      })
    
     
 
    function makeAnother () {
    return inquirer.prompt ([
      {
          type: "list",
          name: "repeat",
          message: "Make another card?",
          choices: ['Make another basic flash-card', 'Make another cloze flash-card', 'No']
      }
      
    ]).then(function(response){
        if(response.repeat === 'Make another basic flash-card') {
          inputBasicCard();
        } else if (response.repeat === 'Make another cloze flash-card') {
          inputClozeCard();
        }else {
          Console.log ('Have a nice day');
        }
    })
  }
