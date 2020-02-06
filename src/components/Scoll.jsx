import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const styles = {
  absolute: {
    position: "fixed",
    opacity: "0.3",
    bottom: "1vh",
    right: "1vw"
  },
  border: {
    border: "1px solid #88b",
    borderRadius: "50%",
    cursor: "pointer",
    display: "block",
    margin: "4px",
    zIndex: "10000"
  }
};

function Scoll({ classes }) {
  return (
    <div className={classes.absolute}>
      <div>
        <ArrowDropUpIcon
          color="primary"
          className={`${classes.border} updowm`}
          onClick={() =>
            window.scrollBy({top:-window.innerHeight ,left:0 ,behavior:"smooth"})
          }
        />
        <ArrowDropDownIcon
          color="primary"
          className={`${classes.border} updowm`}
          onClick={() => window.scrollBy({top:window.innerHeight ,left:0 ,behavior:"smooth"})}
        />
      </div>
    </div>
  );
}
export default withStyles(styles)(Scoll);
