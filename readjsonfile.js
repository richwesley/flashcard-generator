 
 var fs = require('fs');
 var prettyjson =require('prettyjson');

exports.readfile = function readfile () {
 fs.readFile('CardFile.JSON', function (err, data){
        if (err) {
            throw err;
        }    
        var fileContents = JSON.parse(data)
        console.log('current json file contents' + fileContents);
        console.log(prettyjson.render(fileContents));
        // return fileContents;
    });
    
} 
