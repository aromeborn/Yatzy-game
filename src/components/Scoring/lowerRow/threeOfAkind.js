
let isThreeOfAKind = false; 
let dices = [4,4,2,2,2];
let currentHighestValue = 0;

function checkIfThreeOfAKind(){
    const savedDices = dices.reduce((diceHash, value) => {
        diceHash[value] = (diceHash[value] || 0) + 1;
        return diceHash
    }, {});
    
    for (const numberOfEyes in savedDices) {
            const numberOfDices = savedDices[numberOfEyes]
            if(numberOfDices > 2 ) {
                
                if (numberOfEyes> currentHighestValue) {
                    currentHighestValue = numberOfEyes
                };
    
            isThreeOfAKind = true;
            };
        console.log (currentHighestValue, isThreeOfAKind) 
    }
    return (currentHighestValue, isThreeOfAKind)
    }; 
    
export default checkIfThreeOfAKind; 
