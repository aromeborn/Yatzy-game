/* const dices = [2,3,4,2,3,2,3,4,5,5,4,3,4,3,3,2,4,5,4,3,3,4,5,6]
let currentHighestValue = 0

 const savedDices = dices.reduce((diceHash, value) => {
    diceHash[value] = (diceHash[value] || 0) + 1;
    return diceHash
}, {})

for (const number in savedDices) {
    const numberOfDices = savedDices[number]
    if(numberOfDices > 2) {
        if (number> currentHighestValue) {
        currentHighestValue = number
        }
        
    };
    return currentHighestValue; 
}; */