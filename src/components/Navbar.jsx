import React, { Component } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            <Button color="inherit" component={Link} to='/'>      home      </Button>
            <Button color="inherit" component={Link} to='/signup'>signup    </Button>
            <Button color="inherit" component={Link} to='/login'> login     </Button>
            <Button color="inherit" component={Link} to='/login'> departments</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
