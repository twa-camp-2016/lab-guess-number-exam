class CompareNumber{
    static compare(input, answer){
        const userNums = input.split('');
        const answers = answer.split('');

        const A = () => {
          return userNums.map((userNum, index) => {
              return userNum === answers[index] ? 1 :0;
          }).reduce((a,b) => a+b);
        };

        const B = () => {
            return userNums.map((userNum, index) => {
                return userNum != answers[index] && answers.includes(userNum) ? 1 :0;
            }).reduce((a,b) => a+b);
        };

        return `${A()}A${B()}B`;
    }
}

module.exports = CompareNumber;