import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { withStyles } from "@material-ui/core/styles";
const styles = {
  topmargin: {
    margin: "20px 0 0 0"
  }
};
function MainSlide({ content, classes, handleClick, selectedIndex }) {
  return (
    <div  className="z-10">
    <Paper elevation={2} >
      <Tabs
      className={classes.topmargin}
        value={selectedIndex}
        variant="scrollable"
        textColor="inherit"
        scrollButtons="on"
        indicatorColor="secondary"
      >
        {content.map((content, N) => (
          <Tab
            value={N}
            key={N}
            label={content.name[0]==="_"?content.name.substr(1):content.name}
            onClick={() => handleClick(N)}
          />
        ))}
      </Tabs>
    </Paper>
    </div>
  );
}

export default withStyles(styles)(MainSlide);
