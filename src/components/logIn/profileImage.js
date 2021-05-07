import React from "react"; 
import {Grid, IconButton} from "@material-ui/core";
import CachedIcon from '@material-ui/icons/Cached';

function multiavatar (avatarId) {
    return "https://api.multiavatar.com/" + avatarId + ".png"
}
function randomNumber () {
    return Math.floor(Math.random() * 100 +1)
}


function ProfileImage (props){
    let imgUrl = props.imgUrl;
    let imgSrc = multiavatar((imgUrl));
   
    function handleImageChange () {
    
    randomNumber ();
    
    imgUrl === "random" ? imgUrl = "random": imgUrl =props.name
    imgSrc = multiavatar((imgUrl+ randomNumber()));
        props.onImageChange (imgSrc);
    }
    return (<div>
        <Grid item >
        <img className="profileImg" src={imgSrc} alt="randomPicture"/>
        </Grid> 
        <br/>
        <Grid item >
        <IconButton size="small" onClick={handleImageChange} variant="outlined" color="primary" id="randomImageButton">
        <CachedIcon titleAccess="Get new random profile image"/>
        </IconButton>
        </Grid>
    </div>)


};

export default ProfileImage;