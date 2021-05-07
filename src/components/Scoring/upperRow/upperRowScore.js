


function makeCheckIfNumber(number) {
    return (die) => {
        return die === number
    }   
};

function makeGetIfNumber (number) {
    return (dice) => {
        return dice.some(makeCheckIfNumber)
    }
};

function  makeGetScore (number) {
    return (dice) => {
        const NumberDice = dice.filter(makeCheckIfNumber)
        return (NumberDice.length * number)
    }
};

const oneGetScore = [makeGetScore(1),makeGetIfNumber (1),makeCheckIfNumber(1)];
const twoGetScore = [makeGetScore(2),makeGetIfNumber (2),makeCheckIfNumber(2)];
const threeGetScore = [makeGetScore(3),makeGetIfNumber (3),makeCheckIfNumber(3)];
const fourGetScore = [makeGetScore(4),makeGetIfNumber (4),makeCheckIfNumber(4)];
const fiveGetScore = [makeGetScore(5),makeGetIfNumber (5),makeCheckIfNumber(5)];
const sixGetScore = [makeGetScore(6),makeGetIfNumber (6),makeCheckIfNumber(6)];

export {
    oneGetScore, twoGetScore, threeGetScore, fourGetScore,fiveGetScore,sixGetScore
};