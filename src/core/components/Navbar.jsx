import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

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
    marginLeft: 7,
    marginBottom: 4,
    color: "#eee",
    fontSize: 15,
    fontWeight: "bold"
  }
}));

// will be deprecated XXX
let year = "2nd";
let department = "Electrical";
// XXXXXXXXXXXXXXXXXXXXXX

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({
  todo,
  removeFromTodo,
  communities,
  getCommunity,
  props
}) {
  const [open, setopen] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar>
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
              W
            </Icon>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

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
