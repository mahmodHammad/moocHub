import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  topmargin: {
    margin: "20px 0 0 0"
  }
};
function MainSlide({ content, classes, handleClick, selectedIndex }) {
  return (
    <Paper position="static" centered="true" className={classes.topmargin}>
      <Tabs
        value={selectedIndex}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
      >
        {content.map((content, N) => (
          <Tab
            value={N}
            key={N}
            label={content.outerTitle}
            onClick={() => handleClick(N)}
          />
        ))}
      </Tabs>
    </Paper>
  );
}

export default withStyles(styles)(MainSlide);
