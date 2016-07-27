class answergenerator{
    static generator(){

        const numbers = [0,1,2,3,4,5,6,7,8,9];

        const result = []
        for(let i=0;i<4;i++){
            const num = parseInt(Math.random()*numbers.length);
            result.push((numbers.splice(num,1))[0]);
        }

        return result.join('');
    }
}

module.exports = answergenerator;