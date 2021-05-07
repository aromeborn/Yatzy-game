import React from "react"; 
import _ from "lodash"; 

let isSmallStraight = false; 
let dices = [1,2,3,4,5];

function checkIfSmallStraight(){
    const sortedDices= dices.sort (); 
    const smallStraight = [1,2,3,4,5]; 

   isSmallStraight = _.isEqual(sortedDices, smallStraight);
    return (isSmallStraight) 
console.log (isSmallStraight); 
};



export default checkIfSmallStraight; 