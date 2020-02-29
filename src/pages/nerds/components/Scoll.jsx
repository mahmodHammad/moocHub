import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const styles = {
  absolute: {
    position: "fixed",
    opacity: "0.3",
    bottom: "1vh",
    right: "0.5vw",
    zIndex: "100"
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
function handleScroll (opened, isDown = true, At, setAt) {
  isDown?At ===opened.length-1 ? At=0:At++ :At===0?At=opened.length-1:At--
  setAt(At)
}

function ScrollTo(opened , At) {
  console.log(At)
  return opened[At].id;
}

function Scoll({ classes, opened ,At, setAt}) {
  console.log("fff", opened);
  return (
    <div className={classes.absolute}>
      {opened.length && (
        <div>
          <Link href={`/nerds/#${ScrollTo(opened,At)}`} onClick={()=>handleScroll(opened, false ,At, setAt)}>
            <ArrowDropUpIcon className={`${classes.border} updowm col2`} />
          </Link>

          <Link href={`/nerds/#${ScrollTo(opened ,At)}`} onClick={()=>handleScroll(opened, true ,At, setAt)}>
            <ArrowDropDownIcon className={`${classes.border} updowm col2`} />
          </Link>
        </div>
      )}
    </div>
  );
}
export default withStyles(styles)(Scoll);
