
import {useState} from "react"
function PlayerGenerator() {
        const scores = [
        //calculateScoreFromDice: (dice) => 1
        {fieldScore: null, id:"ones",name: "Ones", place:"upperRow"},
        {fieldScore: null, id:"twoes",name: "Twoes", place:"upperRow"},
        {fieldScore: null, id:"threes",name: "Threes", place:"upperRow"},
        {fieldScore: null, id:"fours",name: "Fours", place:"upperRow"},
        {fieldScore: null, id:"fives",name: "Fives", place:"upperRow"},
        {fieldScore: null, id:"sixes",name: "Sixes", place:"upperRow"},
        {fieldScore: null, id:"topBonus",name: "TopBonus", place:"topBonus"},
        {fieldScore: null, id:"onePair",name: "One Pair", place:"lowerRow"},
        {fieldScore: null, id:"twoPairs",name: "Two Pairs", place:"lowerRow"},
        {fieldScore: null, id:"threeOfAKind",name: "Three of a Kind", place:"lowerRow"},
        {fieldScore: null, id:"fourOfAKind",name: "Four of a Kind", place:"lowerRow"},
        {fieldScore: null, id:"fullHouse",name: "Full House", place:"lowerRow"},
        {fieldScore: null, id:"smallStraight",name: "Small Straight", place:"lowerRow"},
        {fieldScore: null, id:"largeStraight",name: "Large Straight", place:"lowerRow"},
        {fieldScore: null, id:"chance",name: "Chance", place:"lowerRow"},
        {fieldScore: null, id:"yatzy",name: "Yatzy", place:"lowerRow"},
        {fieldScore: null, id:"total",name: "Total", place:"total"},
    ];


// const fieldScores = scores.map ((score)=> )
let fieldScores = ""; 
  const [players, setPlayers] = useState([
      {
        name: "Eva",
        id: "player1",
        picture:"picture",
        scores: {fieldScores}}, 
        {
            name: "Anna",
            id: "player2",
            picture:"picture",
            scores: {fieldScores}
        }
    ]);

    return players

};

export default PlayerGenerator; 