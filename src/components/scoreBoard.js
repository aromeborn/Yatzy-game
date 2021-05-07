import React from "react";
import { Container, Grid } from "@material-ui/core";
import ScoreLable from "./scoreBoardLable";
import PlayerGenerator from "./player"

function scoreBoard () { 
    const players = PlayerGenerator (); 
return (
    <Container maxWidth="sm">
        <Grid container spacing ={3} direction="column" xs={12}>
            <Grid container item spacing ={1} direction="row" className= "scoreBoard" xs={12}  justify="flex-start" alignItems="center">
                <Grid container item spacing ={1} direction="row" xs={12}  alignItems="flex-start">
                    <Grid container item spacing ={1} direction="row"  xs={6}  alignItems="center" >
                        <Grid item  xs={3}> 
                        <h1>ScoreBoard</h1>
                        </Grid>
                    </Grid> 
                    <Grid container item spacing ={1} direction="row"  xs={6}  alignItems="center">
                        <Grid container item spacing ={1} direction="row" xs={3} > 
                            <Grid item xs={3} >
                            <div></div>
                            <p>{players[0].name}</p>
                            </Grid>
                        </Grid>
                        <Grid container item spacing ={1} direction="row" xs={3}  alignItems="center">  
                            <Grid item xs={3} >
                            <div></div>
                            <p>{players[1].name}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12}  direction="row" className= "scoreBoard" xs={12}>
                    <ScoreLable place="upperRow"/> 
                </Grid>
                <Grid container item xs={12}  direction="row" className= "scoreBoard" xs={12}>
                    <ScoreLable place="topBonus"/>
                </Grid>
                <Grid container item xs={12}  direction="row" className= "scoreBoard" xs={12}>
                    <ScoreLable place="lowerRow"/>
                </Grid>
                <Grid container item xs={12} direction="row"  className= "scoreBoard" xs={12}>
                    <ScoreLable place="total"/>
                </Grid>
            </Grid>
        </Grid>
    </Container>

)}; 

export default scoreBoard; 