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
  logo: {
    flexGrow: 1,
    justifyContent: "left",
    fontWeight: "bold",
  },
  logo1:{
    // paddingLeft:"0"
  },
  study:{
    padding:" 2px 9px",
    fontSize:"0.7125rem"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  contact: {
    position: "relative",
    "&:hover": {
      color: "green"
    },
    marginLeft: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  contactbtn: {
    fontSize: "0.7rem"
  }
}));
// handleSelect = community => {
//   this.handleClose();
//   window.localStorage.setItem(
//     "community",
//     `/${community.name}/${community.id}`
//   );
//   this.props.getCommunity();
// };

export default function Navbar({ todo, removeFromTodo, communities }) {
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
            <Button color="inherit" component={Link} to="/" size="large"  className={classes.logo1}>
              <Typography align="left" color="inherit">
                Asu
              </Typography>
              <Typography color="secondary">Engineer </Typography>
            </Button>
          </div>
          <div>
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
          </div>
        </Toolbar>
      </AppBar>

      <Sidebar
        open={open}
        setopen={setopen}
        todo={todo}
        removeFromTodo={removeFromTodo}
      />
    </div>
  );
}
