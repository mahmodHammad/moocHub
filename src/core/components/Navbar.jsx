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
const useStyles = makeStyles(theme => ({
  logo: {
    flexGrow: 1,
    justifyContent: "left",
    fontWeight: "bold"
  },
  study: {
    padding: " 2px 9px",
    fontSize: "0.7125rem"
  }
}));

// will be deprecated XXX
let year = "2nd";
let department = "Electrical";
// XXXXXXXXXXXXXXXXXXXXXX

let defaultTheme = changeTheme => {
  changeTheme(
    "#333",
    "#1e88e5",
    "radial-gradient(ellipse at top,#fff,rgb(250, 250, 255),#bfeefa)"
  );
};
export default function Navbar({
  todo,
  removeFromTodo,
  communities,
  getCommunity,
  changeTheme
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
            <Button
              color="inherit"
              component={Link}
              to="/"
              size="large"
              onClick={() => defaultTheme(changeTheme)}
            >
              <Typography align="left" color="inherit">
                {year}
              </Typography>
              <Typography color="secondary"> {department} </Typography>
            </Button>
          </div>
          <Button
            // onClick={() => defaultTheme(changeTheme)}
            size="small"
            className={classes.study}
            variant="outlined"
            color="secondary"
            component={Link}
            to="/nerds"
          >
            Study Room
          </Button>
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
