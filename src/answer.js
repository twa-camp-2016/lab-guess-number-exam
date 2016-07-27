class Answer {
    
    static generate(){
    const digits = [1,2,3,4,5,6,7,8,9,0];
        const result = [];
        let length = 0;
        while(length < 4){
            const random = parseInt(Math.random() * digits.length).length;
            result.push((digits.splice(random,1))[0]);
            length++;
        }
        return result.join("");
    }
}

module.exports = Answer;