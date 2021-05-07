import React, {useState} from "react";
import {Grid, Button, Container} from '@material-ui/core/';
import CasinoIcon from '@material-ui/icons/Casino';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Rules from "./rules"
import DiceField from "./diceField"; 

function getModalStyle() {

    return {
      left:"10%"
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: "80%",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
 
function RulesModal() {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="rules">Rules</h2>
        <Rules/>
        <Button  type="button" variant="contained" onClick={handleClose}>
        Close
        </Button>
      </div>
    );

    return (
      <div>
        <Button  type="button" variant="contained" onClick={handleOpen}>
          Rules
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="Rules"
          aria-describedby= "Rules for the yatzy game"
          style={{ overflow: 'scroll' }}
        >
        {body}
        </Modal>
      </div>
    );
  }

function GameView (children) {

    let [count, setCount] = useState (0);
    const [dice, setDice] = useState ([
        {
        id : "die1",
        value : 0,
        saved : false
    }, {
        id : "die2", 
        value : 0,
        saved :false
    }, {
        id : "die3",
        value: 0,
        saved : false
    }, {
        id : "die4",
        value: 0,
        saved : false
    }, {
         id : "die5",
         value: 0,
         saved : false
        }
    ]);

    function handleRoll (e) {
        setCount (++count);
            e.preventDefault ();

        rollTheDice ();

    };
    

    function rollTheDice () {
        function randomNumber () {
            return Math.floor(Math.random() * 6 +1)
        }if (count <= 3) { 
            setDice((previousDice) => 
                previousDice.map ((die) =>  die.saved === false? 
                    {id : die.id,
                    value:randomNumber (),
                    saved : die.saved }
                : die 
                ));
        } else { 
            setDice((previousDice) => 
                previousDice.map ((die) => die ))

        }
    };

    function handleSaveTheDie (e) { 
        saveTheDie (e.target.id);

    };

    function saveTheDie (dieId) {
        setDice ((previousDice) => {
            const savedDieIndex = previousDice.findIndex ((die) => die.id === dieId);
            let savedDie = previousDice[savedDieIndex]; 
            savedDie = {...savedDie, saved: !savedDie.saved};
            previousDice.splice (savedDieIndex,1,savedDie);
            let newDice = []
            newDice = [...previousDice]
            return newDice
        }); 

    };
    return (
        <div className= "centralContainer" >
            <Grid
                container spacing = {4}
                direction="column"
                justify="center"
                alignContent="center"
                margin ="3rem"
                padding="3rem"
            > 
            <Grid
                container spacing = {4}
                direction="row"
                justify="flex-end"
            >
            <RulesModal />
            </Grid>
            <Grid>
            <h1>Click the dice you want to save</h1>
                        <DiceField id="rollDiceField" dice={dice} handleSaveTheDie= {handleSaveTheDie}/>   
                <Container className= "rollButton">
                    <Grid container item xs justify="center">
                        <Button size="large"
                            classes= {{label:"rollButtonActive"}} id="rollTheDiceButton" variant="contained" startIcon={<CasinoIcon/>}
                            onClick={handleRoll}> 
                            Roll the Dice
                        </Button>
                    </Grid>
                </Container>
            </Grid>
            </Grid>
        </div>
    )  
};

export default GameView;


// save for when restarting game (after a player has added their score)
//function startNewRound () {
// setCount (0)
//return ( 
//setDiceValue((previousValue) => 
//previousValue.map ((die) =>
//({ id : die.id,
//value : 0,
//saved : false })
//)
//)
//)};