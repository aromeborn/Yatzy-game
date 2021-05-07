import PlayerGenerator from "./player";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Grid from "@material-ui/core/Grid";


function handleAddScore () {
    PlayerGenerator (); 

}

function ScoreLable (props){
    const scores = [
        {name: "Ones", place:"upperRow"},
        {name: "Twoes", place:"upperRow"},
        {name: "Threes", place:"upperRow"},
        {name: "Fours", place:"upperRow"},
        {name: "Fives", place:"upperRow"},
        {name: "Sixes", place:"upperRow"},
        {name: "TopBonus", place:"topBonus"},
        {name: "One Pair", place:"lowerRow"},
        {name: "Two Pairs", place:"lowerRow"},
        {name: "Three of a Kind", place:"lowerRow"},
        {name: "Four of a Kind", place:"lowerRow"},
        {name: "Full House", place:"lowerRow"},
        {name: "Small Straight", place:"lowerRow"},
        {name: "Large Straight", place:"lowerRow"},
        {name: "Chance", place:"lowerRow"},
        {name: "Yatzy", place:"lowerRow"},
        {name: "Total", place:"total"},
    ];
    const players = PlayerGenerator (); 
    const playerScore = players.map ((player)=> player.scores );
    const scoreLables =  scores.map ((score, index)=>
    score.place === props.place && 
    <Grid container item spacing ={3} direction="row" xs={12} id={score.index} className= {score.place} justify="flex-start" alignItems="center">
        <Grid container item spacing ={3} direction="column" xs={6} id={score.index} className= {score.place}  justify="flex-start">
        <Grid item xs={6} direction="row">
        <p className= "scoreBoardText">{score.name}</p>
        <Button id={score.name} color="primary" onClick={handleAddScore}>
        <AddIcon titleAccess="Add Score"/>
        </Button>   
        </Grid>
        </Grid>
        <Grid container item spacing ={3} direction="column" xs={6} alignItems="center">
            <Grid item xs={3} direction="row">
            <p className= "scoreBoardText"> {playerScore.indexOf(index)}</p>
            </Grid>
        </Grid>
    </Grid>)
    return scoreLables
    }; 
    export default ScoreLable