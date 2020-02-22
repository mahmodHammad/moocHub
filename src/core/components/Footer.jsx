import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
 footer:{
     position:"absolute",
     bottom:"0",
     width:"100%",
     hight:"20px",
     background:"#000"
 }
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <AppBar position="static" >
        <Toolbar variant="regular">
          <div >
            <Button color="inherit"  size="large">
              <Typography align="left" color="inherit">
                ContactUs
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
 
    </div>
  );
}
