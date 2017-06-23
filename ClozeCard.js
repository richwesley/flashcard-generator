

exports.ClozeCard = function ClozeCard(front, back){    
  if (this instanceof ClozeCard){        
    this.front = front;        
    this.back = back;        
        
  } else {        
    return new ClozeCard(front, back)
    }   
}   