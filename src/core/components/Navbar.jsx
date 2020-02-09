import React, { Component } from "react";
import Sidebar from "./Sidebar"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

export default class Navbar extends Component {
  state={
    drawerOpen:false
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
            <Button color="inherit" component={Link} to='/'>      home      </Button>
            {/* <Button color="inherit" component={Link} to='/signup'>signup    </Button> */}
            {/* <Button color="inherit" component={Link} to='/login'> login     </Button> */}
            <Button color="inherit" component={Link} to='/login'> departments</Button>
            <Button color="inherit" onClick={()=>this.props.handleCollapse()}>  <InsertEmoticonIcon /></Button>
          </div>
          </Toolbar>
        </AppBar>
          <Sidebar open={this.state.drawerOpen} closefn={this.handleDrawerClose} todo={this.props.todo} removeFromTodo={this.props.removeFromTodo}/>
      </div>
    );
  }
}
