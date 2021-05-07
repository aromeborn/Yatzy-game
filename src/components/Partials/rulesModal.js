import React from "react";
import {useState} from "react"; 
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Rules from "../rules"; 

  function getModalStyle() {

    return {
      top: `auto`,
      left: `auto`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'relative',
      width: "80%",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  export default function RulesModal(props) {
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
        <RulesModal />
      </div>
    );
  
    return (
      <div>
        <button type="button" onClick={handleOpen}>
          Rules
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="Rules"
          aria-describedby= "Rules for the yatzy game"
        >
          {body}
        </Modal>
      </div>
    );
  }