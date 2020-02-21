import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  absolute: {
    position: "fixed",
    opacity: "0.3",
    bottom: "1vh",
    right: "0.5vw",
    zIndex:"100"
  },
  border: {
    border: "1px solid #f07b3f",
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
          className={`${classes.border} updowm col2`}
          onClick={() =>
            window.scrollBy({top:-window.innerHeight-55 ,left:0 })
          }
        />
        <ArrowDropDownIcon
          className={`${classes.border} updowm col2`}
          onClick={() => window.scrollBy({top:window.innerHeight+55 ,left:0 })}
        />
      </div>
    </div>
  );
}
export default withStyles(styles)(Scoll);
