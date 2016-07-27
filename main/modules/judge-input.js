/**
 * Created by chenying on 16-7-27.
 */
class JudgeInput{
    judge(inputs){
        if(inputs.length!=4) {
            return false;
        }
        for(let input of inputs){
           if(inputs.indexOf(input)!=inputs.lastIndexOf(input)){
               return false
           } 
        }
        return true;
    }
}
module.exports=JudgeInput;