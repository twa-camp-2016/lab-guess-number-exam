class Answer {
  static getRandomNumber() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomNumbers = [];
    for (let i = 0; i < 4; i++) {
      const number = parseInt(Math.random()*digits.length);
      randomNumbers.push(digits.splice(number,1)[0]);
    }
    return randomNumbers.join('');
  }
}

module.exports = Answer;