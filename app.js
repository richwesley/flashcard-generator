const inquirer = require('inquirer');
const fs = require('fs');
const read = require('./readjsonfile.js');
const write = require('./writejsonfile.js');
const prettyjson =require('prettyjson');
var BasicCard = require('./BasicCard.js');
var Clozecard = require('./ClozeCard.js');

var fileContents = [];

function promptCard () {
  return inquirer.prompt ([
    {
        type: "input",
        name: "front",
        message: "Input front of card"
    },
    {
        type: "input",
        name: "back",
        message: "Input back of card"
    }
  ]).then(function(response){
      var newBasicCard = new BasicCard.BasicCard(response.front, response.back);
      return newBasicCard;
  })
}

Promise.all([
  promptCard(),
  read('CardFile.JSON')
])
.then(function ([card, contents]) {
  if (!contents) {
    contents = { basicCard: [] }
  }
  contents.basicCard.push(card)
  return write('CardFile.JSON', contents);
})
.then(function (data) {
  console.log(prettyjson.render(data));
})
.catch(function (err) {
  console.log('Err', err);
});
