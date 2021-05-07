import {oneGetScore, twoGetScore, threeGetScore, fourGetScore,fiveGetScore,sixGetScore} from "./upperRowScore"

const upperRowNumbers = getUpperRowNumbersScore();

const dice = [1,2,3,4,5]

upperRowNumbers[1,2,3,4,5,6].getUpperRowScore(dice)

function getUpperRowNumbersScore (player) {
    return  [
        oneGetScore,
        twoGetScore,
        threeGetScore,
        fourGetScore,
        fiveGetScore,
        sixGetScore
    ]
};


export default upperRowNumbers
