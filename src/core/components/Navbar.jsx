import React, { Component } from "react";
import Sidebar from "./Sidebar"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";

import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Paper  from '@material-ui/core/Paper';

export default class Navbar extends Component {
  state={
    drawerOpen:false,
    menuOpen :false
  }


   handleToggle=()=>{
     this.setState({menuOpen:!this.state.menuOpen})
   }
   handleClose=()=>{
    this.setState({menuOpen:false})
   }


  handleDrawerOpen = () => {
    this.setState({drawerOpen:true})
  };
  handleDrawerClose = () => {
    this.setState({drawerOpen:false})
  };
  toggleDrawer=()=>{
    this.setState({drawerOpen:!this.state.drawerOpen})
  }
  render() {
    
    return (
    
<div>
    <AppBar position="static">
      <Toolbar >
    <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={()=>this.toggleDrawer()}
      >
        <MenuIcon />
      </IconButton>
      <div className="nav-container">
        <Button color="inherit" component={Link} to='/' variant="outlined" color="secondary"  style={{"margin":"0 5px"}}>      home      </Button>
        
        <Button color="inherit" component={Link} to='/de7'variant="outlined" color="secondary" style={{"margin":"0 7px"}} >  Nerds Room  </Button>
          
        <Button color="inherit"  variant="outlined" color="secondary"
            aria-haspopup="true" onClick={()=>this.handleToggle()}> 
          departments
          </Button>

        <Button color="inherit" onClick={()=>this.props.handleCollapse()}>  <InsertEmoticonIcon /></Button>
      </div>
      </Toolbar>
    </AppBar>
      <Sidebar open={this.state.drawerOpen} closefn={this.handleDrawerClose} todo={this.props.todo} removeFromTodo={this.props.removeFromTodo}/>
     <Popper
          open={this.state.menuOpen}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={()=>this.handleClose()}>
                  <MenuList
                    id="menu-list-grow"
                  >
                    <MenuItem onClick={()=>this.handleClose()}>Profile</MenuItem>
                    <MenuItem onClick={()=>this.handleClose()}>My account</MenuItem>
                    <MenuItem onClick={()=>this.handleClose()}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
          </div>
    );
  }
}
