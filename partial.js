 
 var question = "Laurel and Hardy farted";
 var cloze = "Hardy";
 
function partial(question, cloze) {

   var clozePostions = clozeDelete(question, cloze);
    console.log (clozePostions);
    this.partial = getPartial(question, clozePostions);
   
    console.log('partial: ' + this.partial);

  
  function getPartial(question, clozePostions) {

    var start = question.slice(0, clozePostions[0]);
    var end = question.slice(clozePostions[1], question.length);
    console.log ('Start: '+ start + 'End: ' + end);
    return start + "_____" + end;
  }

  function clozeDelete(question, cloze) {
    var start = question.indexOf(cloze);
    if (start !== -1) {
      
      return [start, start + cloze.length];
    }
    throw new Error("Cloze deletion not found in input question.");
    
  }
}

var clozeSentence = partial (question, cloze);

