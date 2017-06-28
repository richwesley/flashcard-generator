 
 
//Sample input actual input would be read in from the JSON file during actual gameplay

 var fullSentence = "Differential and integral calculus are related by the fundamental theorem of calculus";
 var cloze = "theorem";
 
function partial(fullSentence, cloze) {

    var clozePostions = clozeDelete(fullSentence, cloze);
    this.partial = getPartial(fullSentence, clozePostions);
    console.log (this.partial);
    function getPartial(fullSentence, clozePostions) {

      var start = fullSentence.slice(0, clozePostions[0]);
      var end = fullSentence.slice(clozePostions[1], fullSentence.length);
      return start + "_____" + end;
  }

    function clozeDelete(fullSentence, cloze) {
      var start = fullSentence.indexOf(cloze);
      if (start !== -1) {
      
      return [start, start + cloze.length];
    }
    throw new Error("Cloze deletion not found in input fullSentence.");   
  }
}

var clozeSentence = partial (fullSentence, cloze);

