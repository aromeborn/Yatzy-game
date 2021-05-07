import React from "react";



function Dice (props) {



return (

    <img className={props.className} src= {"/images/dice/die" + props.number + ".png"} alt={props.alt}  id= {props.id} onClick={props.onClick} /> 
);

}; 
export default Dice; 