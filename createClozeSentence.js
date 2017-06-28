 
 // Example data which would be input from the clozeCards.JSON file during game play
 var fullSentence = "Differential and integral calculus are related by the fundamental theorem of calculus";
 var cloze = "theorem";
 
function partial(fullSentence, cloze) {

    var start = fullSentence.indexOf(cloze);
    var end = start + cloze.length;
    var clozepositions = [start, end]
   
    
    if (start !== -1) {
        let start = fullSentence.slice(0, clozepositions[0]);
        let end = fullSentence.slice(clozepositions[1], fullSentence.length);
        this.clozeSentence = start + ' _____ ' + end;
        return (this.clozeSentence);
       
    } 
    else {
        throw new Error("Cloze deletion not found in input question.");
    }
  }

//module.exports = this.clozeSentence;

var clozeSentence = partial (fullSentence, cloze);
console.log(clozeSentence);
