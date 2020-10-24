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
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import BarChart from "@material-ui/icons/BarChart";


const useStyles = makeStyles(theme => ({
  logo: {
    flexGrow: 1,
    justifyContent: "left",
    fontWeight: "bold",
    marginLeft:-5
  },
  study: {
    padding: "2px 8px",
    fontSize: "0.7rem",
    marginRight:3
  },
  wiki: {
    marginLeft: 3,
    color: "#eee",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Linux Libertine Georgia Times serif"
  },
  Icon:{
    color: "#eee",
    marginRight: -4,

  },
  "@media (max-width: 600px)": {
    study: {
      fontSize: "0.6rem",
      padding: "2px 6px"
    },
    logoText: { fontSize: "0.8rem" },
    logo:{
      marginLeft:-10
    }  
  }
}));

// will be deprecated XXX
let year = "Asu";
let department = "Engineer";
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
  // useEfect will not help , it will not takeEfect if the user selected his dof3a,
  // because there's no rerendering on the selection action
  let comm = localStorage.getItem("community");
  if (comm) {
    let dof = comm.split("/")[1];
    let dofsp = dof.split(" ");
    year = dofsp[0];
    department = dofsp[1];
  }

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
                <Typography
                  align="left"
                  color="inherit"
                  className={classes.logoText}
                >
                  {year}
                </Typography>
                <Typography color="secondary" className={classes.logoText}>
                  {department}
                </Typography>
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
            {/* <IconButton
              size="small"
              className={classes.wiki}
              component={Link}
              to="/wiki"
            >
              W
            </IconButton>
            <IconButton
              size="small"
              className={classes.Icon}
              component={Link}
              to="/scholar"
            >
              <FormatQuoteIcon />
            </IconButton>
            <IconButton
              size="small"
              className={classes.Icon}
              component={Link}
              to="/pali"
            >
              <BarChart/>
            </IconButton> */}
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
