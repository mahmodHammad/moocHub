import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  topmargin: {
    margin: "20px 0 0 0"
  },
  center: {
    margin: "auto"
  }
};
function SecondarySlide({
  parentName,
  content,
  classes,
  handleClick,
  selectedIndex
}) {

  let  SubparentName 
if(parentName[0]==="_"){
  SubparentName = parentName.substr(1, 4);
}else{
  SubparentName = parentName.substr(0, 3);
}
  console.log(parentName);
  return (
    <AppBar
      position="static"
      centered="true"
      color="primary"
      className="addmargin"
    >
      <Tabs
        value={selectedIndex}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="on"
      >
        {content.map((cont, N) => (
          <Tab
            className={classes.center}
            value={N}
            key={N}
            label={`${SubparentName} ${N + 1}`}
            onClick={() => handleClick(N)}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}

export default withStyles(styles)(SecondarySlide);
