"use strict"

const inquirer = require('inquirer');
const fs = require('fs');
const read = require('./readjsonfile.js');
const write = require('./writejsonfile.js');
const prettyjson =require('prettyjson');
const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');

//================ Menu ===================


  inquirer.prompt ([
    {
      type: "list",
      name: "menu",
      message: "Which type of card would you like to create?",
      choices: ["Basic Flash Cards", "Cloze Flash Cards"]
    }
  ]).then(function (response)  {
      if(response.menu === "Basic Flash Cards") {



// ================ Basic Card Method =================        

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
    }
  // Run the function to create a new card with the BasicCard module and read the JSON file with the
  // readjsonfile module.  After theses promises are met, then push the new card into object containing
  // the JSON file contents. Then call the writejsonfile to re-write to the JSON file with new card and
  //display the JSON file to the console. 

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
      })
    .catch(function (err) {
      console.log('Err', err);
    });




//======== Cloze Card Method ==================
 
} else

{ 
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
      })
      .catch(function (err) {
        console.log('Err', err);
      });
    }
      })