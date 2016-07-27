class CompareNumber{
    static getCompareResult(input, answer){

        const inputArr = input.split('');
        const answerArr = answer.split('');

        const sameNumbers = answerArr.filter(answer => inputArr.find(input => input === answer));

        const result = inputArr.map(i => {
            if (inputArr.indexOf(i) === answerArr.indexOf(i)){
                return 'A';
            } else {
                return 'B';
            }
        });

        const countA = result.filter(i => i === 'A').length;
        const countB = sameNumbers.length - countA;

        return `${countA}A${countB}B`;

    }
}

module.exports = CompareNumber;
