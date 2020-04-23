import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Sports from "@material-ui/icons/Bookmark";
import { makeStyles } from "@material-ui/core/styles";
import  Icon  from "@material-ui/core/Icon";
const useStyles = makeStyles(theme => ({
  logo: {
    flexGrow: 1,
    justifyContent: "left",
    fontWeight: "bold"
  },
  study: {
    padding: " 2px 8px",
    fontSize: "0.7rem"
  },
  wiki: {
    marginLeft:"5px",
    color:"#fff"
  }
}));

// will be deprecated XXX
let year = "2nd";
let department = "Electrical";
// XXXXXXXXXXXXXXXXXXXXXX

export default function Navbar({
  todo,
  removeFromTodo,
  communities,
  getCommunity
}) {
  const [open, setopen] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setopen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <Button color="inherit" component={Link} to="/" size="large">
              <Typography align="left" color="inherit">
                {year}
              </Typography>
              <Typography color="secondary"> {department} </Typography>
            </Button>
          </div>
          <Button
            size="small"
            className={classes.study}
            variant="outlined"
            color="secondary"
            component={Link}
            to="/nerds"
          >
            Study Room
          </Button>
          <Icon
            size="small"
            className={classes.wiki}
            component={Link}
            to="/wiki"
          >
            <Sports  />
          </Icon>
        </Toolbar>
      </AppBar>

      <Sidebar
        open={open}
        setopen={setopen}
        todo={todo}
        removeFromTodo={removeFromTodo}
        communities={communities}
        getCommunity={getCommunity}
      />
    </div>
  );
}
