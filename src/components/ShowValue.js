import React from "react";
import Dice from "./dice";
import Grid from "@material-ui/core/Grid";
function ShowValue (props) {
    if (props.saved === true) {
        return (
        <Grid container item xs >
        <Dice
        className="savedDie"
        number = {props.value} 
        alt= {props.value} 
        id={props.id} 
        onClick= {props.onClick} 
        />
        </Grid>)
    } else {
        return (
        props.value === 0 ? 
        <Grid container item xs />: 
        <Grid container item xs >
            <Dice 
            className="unsavedDie"
            number = {props.value} 
            alt= {props.value} 
            id={props.id} 
            onClick= {props.onClick} 
            />
        </Grid>
        )
    };

};



export default ShowValue;