class AnswerGenerator {
    static generator (){
        const result = [];
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i=0;i<4;i++) {
            const randomNumber = parseInt(Math.random() * digits.length);
            result.push(digits[randomNumber]);
            digits.splice(randomNumber, 1);
        }
        return result.join('');
    }
}

module.exports = AnswerGenerator;