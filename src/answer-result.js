class Answer {
    static putAnswer() {
        const degits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = [];
        for (let i = 0; i < 4; i++) {
            const randomNumber = parseInt(Math.random()*10);
            result.push(degits.splice(randomNumber,1));
        }
        return result.join('');
    }
}
module.exports = Answer;