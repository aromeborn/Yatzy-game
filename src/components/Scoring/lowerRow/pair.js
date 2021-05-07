let isPair = false; 
let dices = [4,4,2,2,2];
let currentHighestValue = 0;


function checkIfPair () {
const savedDices = dices.reduce((diceHash, value) => {
    diceHash[value] = (diceHash[value] || 0) + 1;
    return diceHash
}, {});

for (const numberOfEyes in savedDices) {
        const numberOfDices = savedDices[numberOfEyes]
        if(numberOfDices > 1 ) {
            
            if (numberOfEyes> currentHighestValue) {
                currentHighestValue = numberOfEyes
            };

        isPair = true;
        };
    console.log (currentHighestValue, isPair) 
}
return (currentHighestValue, isPair)
}; 
export default checkIfPair (); 