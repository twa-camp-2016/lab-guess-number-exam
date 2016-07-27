/**
 * Created by chenying on 16-7-27.
 */
class CompareNumber {
    static compare(inputs, answer) {
        let inputsArray = inputs.split('');
        let answerArray = answer.splice('');

        const getACount = ()=> {
            return inputsArray.map((inputArray, index)=>answerArray[index] === inputArray ? 1 : 0).reduce((a, b)=>a + b);
        }
        const getBCount = ()=> {
            return inputsArray.map((inputArray, index)=>answerArray[index] != inputArray && answerArray
                .some(answerArrays=>answerArrays === inputArray ? 1 : 0)).reduce((a, b)=>a + b);
        }
        const positionA = getACount();
        const positionB = getBCount();

        return `${positionA}A${positionB}B`;
    }
}
module.exports=CompareNumber;