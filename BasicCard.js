

exports.Card = function Card(front, back){    
  if (this instanceof Card){        
    this.front = front;        
    this.back = back;        
        
  } else {        
    return new Card(front, back)
    }   
}   

