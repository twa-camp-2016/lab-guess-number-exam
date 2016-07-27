class Answer {
    static   generate() {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = [];
        let length = 0;
        while (length < 4) {
            const randomNumber = parseInt(Math.random() * digits.length);
            result.push((digits.splice(randomNumber, 1))[0]);
            length++;
        }
        return result.join("");
    }
}

module.exports = Answer;