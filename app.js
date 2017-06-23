const inquirer = require("inquirer");
const fs = require('fs');
const jsonfile = require('./readjsonfile.js');
const prettyjson =require('prettyjson');
 

var BasicCard = require('./BasicCard.js');
var Clozecard = require('./ClozeCard.js');

var fileContents = [];

inquirer.prompt ([
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
       console.log(response.front, response.back); 
       console.log(newBasicCard);
    });


 fs.readFile('CardFile.JSON', function (err, data){
        if (err) {
            throw err;
        }    
        fileContents = JSON.parse(data)
        console.log('Before push' + prettyjson.render(fileContents));
        fileContents.basicCard.push(newBasicCard);
        console.log('After push' + prettyjson.render(fileContents));
    });
       
fs.appendFile('CardFile.JSON', JSON.stringify(fileContents, null, 4), 'utf8', function(err) {
            if (err) {
                console.log(err);         
            } else {
                fs.readFile('CardFile.JSON', function (err, data){
                    fileContents = JSON.parse(data)
                    console.log('before push' + prettyjson.render(fileContents));
                    fileContents.basicCard.push(newBasicCard);
                    console.log('Aftet Push' + prettyjson.render(fileContents));
        
    });
            }
   
});