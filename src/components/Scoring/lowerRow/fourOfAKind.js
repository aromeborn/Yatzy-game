let isFourOfAkind = false;
let dices = [4,4,2,2,2];
let currentHighestValue = 0;

function checkIfFourOfAKind(){
    const savedDices = dices.reduce((diceHash, value) => {
        diceHash[value] = (diceHash[value] || 0) + 1;
        return diceHash
    }, {});
    
    for (const numberOfEyes in savedDices) {
            const numberOfDices = savedDices[numberOfEyes]
            if(numberOfDices > 3 ) {
                
                if (numberOfEyes> currentHighestValue) {
                    currentHighestValue = numberOfEyes
                };
    
            isTFourOfAKind = true;
            };
        console.log (currentHighestValue, isFourOfAKind) 
    }
    return (currentHighestValue, isFourOfAKind)
    }; 
    
 return isFourOfAkind
}; 

export default checkIfFourOfAKind; 