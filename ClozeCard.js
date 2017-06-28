
exports.zCard = function zCard(fullSentence, cloze){    
  if (this instanceof zCard){        
    this.fullSentence = fullSentence;        
    this.cloze = cloze;        
        
  } else {
      function partial(fullSentence, cloze) {

        var start = fullSentence.indexOf(cloze);
        if (start !== -1) {
            var start = fullSentence.slice(0, cloze[0]);
            var end = fullSentence.slice(cloze[1], fullSentence.length);
            this.clozeSentence = start + ' ___ ' + end;
           return (this.clozeSentence);
        } else {
            throw new Error("Cloze deletion not found in input fullSentence.");
          }
    }
      partial(this.clozeSentence, this.cloze);
     
    console.log(this.clozeSentence);
    return new zCard(clozeSentence, cloze)
  }  
}   
   

// var czCard = function (fullSentence, cloze){    
//   this.fullSentence = fullSentence;
//   this.cloze = cloze;
  // return new zCard(fullSentance, cloze);
    // this.partial = function () {
    //   if(this.fullSentence.includes(this.cloze)) {
    //     // var partialCloze = string.replace(this.cloze, '[  ]');
    //     console.log(partialCloze);
    //      return new Card(fullSentence, cloze);
    //   } else {
    //     console.log ("You did not contruct your cloze card correcly")
    //   }
    // }
// }        
// module.exports = czCard;      
  
