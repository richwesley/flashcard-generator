
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
   
