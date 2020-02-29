import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { goToAnchor } from 'react-scrollable-anchor'

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
  goToAnchor(opened[At].id)
}

function ScrollTo(opened , At) {
  console.log(At)
  // Not remove this line ... it's for  a shitty bug 
  if(At<opened.length){
    return opened[At].id;
  }
}

function Scoll({ classes, opened ,At, setAt}) {
  console.log("fff", opened);
  console.log(process.env.PUBLIC_URL)
  return (
    <div className={classes.absolute}>
      {opened.length ? (
        <div>
          <Link   onClick={()=>handleScroll(opened, false ,At, setAt)}>
            <ArrowDropUpIcon className={`${classes.border} updowm col2`} />
          </Link>

          <Link onClick={()=>handleScroll(opened, true ,At, setAt)}>
            <ArrowDropDownIcon className={`${classes.border} updowm col2`} />
          </Link>
        </div>
      ):<span></span>}
    </div>
  );
}
export default withStyles(styles)(Scoll);
