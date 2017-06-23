const fs = require('fs');
const prettyjson =require('prettyjson');

function writefile (filename, fileContents) {
  return new Promise(function (resolve, reject) {
    try {
      fs.writeFile(filename, JSON.stringify(fileContents, null, 4), 'utf8', function (err, data){
        if (err) {
          reject({ message: 'Invalid JSON Cannot Write To ' + filename })
        } else {
          resolve(fileContents)
        }
      });
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = writefile;
