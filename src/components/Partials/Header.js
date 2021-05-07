import React from "react";
import {Link} from "@reach/router";
import MenuIconRounded from '@material-ui/icons/MenuRounded';

 

function Header ({children}) {

    return (
    <div className= "header">
        
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <Link class="navbar-brand" to="/"><h1>Yatzy</h1></Link>
        <div class="headerContainer ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <MenuIconRounded style={{ color:"rgb(0,57,166)"}} fontSize="large" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav row sm-auto">
      <li class="nav-item active col-4">
      <Link to="/"><h2>Home</h2></Link>
      </li>
      <li class="nav-item col-4">
      <Link to="/LogIn"><h2>Login</h2></Link>
      </li>
      <li class="nav-item col-4">
      <Link to="/About"><h2>About</h2></Link>
      </li>
      <li class="nav-item col-4">
      <Link to="../game"><h2>Game</h2></Link>
      </li>
      </ul>

    </div>
    </div>
    



        </nav>
    </div>
    )


}
export default Header; 