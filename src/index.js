import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import {Grid} from "@material-ui/core"; 
import App from './components/App';
import GameView from "./components/Gameview";
import ScoreBoard from "./components/scoreBoard";
import LogIn from "./components/logIn/logIn";
import About from "./about";
import Rules from "./components/rules"; 


let Home = ({children}) => (
  <div>
    {children}
  </div>
);

let Game = ({children}) => (
  <div>
    {children}
  </div>
); 

let GameBoard = props => (
    <div>
    <Grid container direction="row" sm= {12}>
    <Grid item sm={8}>
    <h1> Game {props.gameCode}</h1>
    </Grid>
    <Grid item sm={8}>
    <GameView path = "gameView" />
    </Grid>
    <Grid item sm={4}>
    <ScoreBoard path= "scoreBoard"/>
    </Grid>
    </Grid>
    </div>
);




const NotFound = () => (
  <div><h1>Sorry, nothing here.</h1></div>
);

render (
  <div>
<Router>

  <Home path = "/">
    <App path = "/" >
    <LogIn path = "LogIn"/>
    <About path ="About"/>
    <Rules path="Rules"/>
    </App>
  </Home>
  <Game path= "game">
    <App path= "/">
    <GameBoard path = "/:gameCode"/>
    </App>
  </Game>

  <NotFound default/>

</Router>
  </div>
,document.getElementById('root')
);