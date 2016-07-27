class CompareNumber{

    static compare(input,answer){
        const inputArray = input.split('');
        const answerArray = answer.split('');
        const y = inputArray.filter(elememt=>answerArray.includes(elememt)).length;
        const x = inputArray.filter((element,index,array)=>{
            return array.indexOf(element) === answerArray.indexOf(element);
        }).length;

        return `${x}A${y - x}B`;
    }
}
module.exports = CompareNumber;