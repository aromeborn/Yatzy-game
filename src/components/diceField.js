import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"; 
import ShowValue from "./ShowValue";

function DiceField (props) {
    let newDie = props.dice.map((die)=> <ShowValue key ={die.id} id={die.id} value= {die.value} onClick= {props.handleSaveTheDie} saved={die.saved}> </ShowValue>);
        return (
            <Container className= "diceFieldContainer">
                <Grid  container item xs={12} direction="row" justify="center" alignItems="center">
                    {newDie}
                </Grid>
            </Container>
        );
}; 

export default DiceField ; 