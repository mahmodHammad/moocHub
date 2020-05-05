import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { makeStyles } from "@material-ui/core/styles";
import { goToAnchor } from "react-scrollable-anchor";

const styles = makeStyles(theme => ({
  absolute: {
    position: "fixed",
    opacity: "0.4",
    bottom: "1vh",
    right: "0.5vw",
    zIndex: "100",
    "&:hover": {
      opacity: "0.8"
    }
  },
  border: {
    border: `1px solid #999`,
    borderRadius: "50%",
    cursor: "pointer",
    display: "block",
    margin: "4px",
    zIndex: "10000",
    "&:hover": {
      background: "#fff"
    }
  }
}));

function handleScroll(opened, isDown = true, At, setAt) {
  isDown
    ? At === opened.length - 1
      ? (At = 0)
      : At++
    : At === 0
    ? (At = opened.length - 1)
    : At--;
  if (At < opened.length) {
    goToAnchor(opened[At].id);
  }
  setAt(At);
}

export default function Scoll({ opened, At, setAt }) {
  const classes = styles();

  return (
    <div className={classes.absolute}>
      {opened.length ? (
        <div>
          <span onClick={() => handleScroll(opened, false, At, setAt)}>
            <ArrowDropUpIcon
              color="secondary"
              className={`${classes.border} updowm `}
            />
          </span>

          <span onClick={() => handleScroll(opened, true, At, setAt)}>
            <ArrowDropDownIcon
              color="secondary"
              className={`${classes.border} updowm `}
            />
          </span>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}
