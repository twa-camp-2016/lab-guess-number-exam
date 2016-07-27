class AnswerGenerate{
  static getRandom(){
    let array = [];
    
    while(array.length<4){
      let number = Math.floor(Math.random()*10);
      
      if(array.indexOf(number) === -1){
        array.push(number);
      }
    }
    
    return array.join('');
  }
}

module.exports = AnswerGenerate;