const read = require('./readjsonfile.js');
const write = require('./writejsonfile.js');

function addCard (filename, card) {
  return read(filename)
  .then(function (fileContents) {
    if (!fileContents) {
      fileContents = { basicCard: [] }
    }
    fileContents.basicCard.push(card)
    return write(filename, fileContents)
  })
}

module.exports = addCard
