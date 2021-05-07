import React from "react";
import {useState, useEffect} from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import AppleIcon from '@material-ui/icons/Apple';
import { Container, Input, FormGroup, ButtonGroup, IconButton,Button, Grid } from "@material-ui/core";
import ProfileImage from "../logIn/profileImage";
import  RandomWords from "random-words";
import {Link} from "@reach/router";

class LogIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            profile: {
                name:"",
                id:"", 
                key:"",
                imgUrl:"random", 
            },
            game: {
                code:"", 
                url:"game/", 
                key:"",
            }
        }
    }

    
    componentDidMount() {
    }

    setProfile = (nextProfile) => {
        this.setState({ profile: nextProfile })
    }

    setGame = (nextGame) => {
        this.setState({ game: nextGame })
    }

    render(
        
    ) {
        
        

        let changeButtonColor = "secondary"
        
        const { profile, game } = this.state

            const handleProfile =  (e) => {
            const {name, value} = e.target;
            this.setProfile (({...profile, [name]: value})); 
            }; 
    

            const handleGameCode = (e) => {
            const {name, value} = e.target;
            this.setGame (({...game, [name]: value})); 
            };  

            let placeholderText= "Have a Room Code? Enter it here."

            const handleCreateGame = () => {
            let randomCode = RandomWords ({ exactly: 5, join: '', maxLength:4 }) 
                this.setGame (({...game, [game.code]: randomCode}));
                changeButtonColor= "primary"; 
                
               placeholderText= ("Your gameCode is " + game.code);

            return (placeholderText)
            };


            const handleStartGame = () => {

            }
             const handleImageChange =  (imgUrl) => {
                this.setProfile (({...profile, imgUrl }));    
            };
       return ( 
        <Container className="logInContainer">
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >  
                <Grid
                item
                >
                <h1>Welcome to play Yatzy!</h1>
                </Grid>
                <Grid
                item
                >
                    <br/>
                    <FormGroup>
                        <Grid item >
                            <ProfileImage  name={profile.name} imgUrl={profile.imgUrl} onImageChange={handleImageChange}/>
                            <br/>
                        </Grid>
                        <p>Name</p>
                            <Input 
                                onChange={handleProfile}
                                name="name"
                                value={profile.name}
                                placeholder="Enter Your Name"
                            />
                            <br/>
                            <p>Room Code</p>
                            <br/>
                            <Input
                                onChange={handleGameCode}
                                name="code"
                                value={game.code}
                                placeholder={placeholderText}
                            />
                            <ButtonGroup orientation="vertical" aria-label="button group">
                            <Button size="small" onClick={handleCreateGame} variant="contained" color="primary" id="newGameButton">New Game Room</Button>
                            <Button size="small" variant="contained" color={changeButtonColor}  id="playButton"><Link to="/game/23j4">Let's play</Link></Button>
                        </ButtonGroup>
                        <br/>
                        <p>Log in or sign up to save your games.</p>
                        <br/>
                        <ButtonGroup orientation="vertical" aria-label="button group">
                            <Button size="small" variant="outlined" color="primary" startIcon={<EmailIcon/>} id="googleButton">Continue with google</Button>
                            <Button size="small" variant="outlined" color="primary" startIcon={<FacebookIcon/>} id="facebookButton">Continue with facebook</Button>
                            <Button size="small" variant="outlined" color="primary" startIcon={<AppleIcon/>} id="appleButton">Continue with appleId</Button>
                        </ButtonGroup>
                    </FormGroup>
                </Grid>
                
            </Grid>
        </Container>
        ) }; 
};

export default LogIn 