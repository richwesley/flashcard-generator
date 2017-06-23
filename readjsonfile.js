const fs = require('fs');
const jsonfile = require('./readjsonfile.js');

function readfile (filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, data){
        if (err) {
          reject(err)
        } else {
          try {
            var fileContents = JSON.parse(data)
            resolve(fileContents)
          } catch (err) {
            reject({ message: 'Invalid JSON cannot read file ' + filename  })
          }
        }
    });
  })
}

module.exports = readfile;
