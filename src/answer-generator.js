class AnswerGenerator {
    static generate() {
        const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        const result = [];
        for (let i = 0; i < 4; i++) {
            const number = parseInt(Math.random() * digit.length);
            result.push(digit.splice(number, 1)[0]);
        }

        return result.join('');
    }
}

module.exports = AnswerGenerator;