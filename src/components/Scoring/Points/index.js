import upperRowSum from  "../upperRow/upperRowSum";
import checkIfTopBonus from "../../Gamelogic/upperRow/upperRowBonus";
import lowerRowSum from "./lowerRow/lowerRowSum";

function getPoints (player) {
    const totalScore = [
    
    upperRowSum (player),
    checkIfTopBonus (),
    lowerRowSum () ]

return totalScore
}

export default totalScore