class AnswerGenerator {
    static generator() {
        const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = [];
        for (let i = 0; i < 4; i++) {
            const number = parseInt(Math.random() * numArray.length);
            result.push((numArray.splice(number,1))[0]);
        }
        return result.join('');
    }
}
module.exports = AnswerGenerator;