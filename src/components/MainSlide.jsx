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
    <Paper elevation={2}>
      <Tabs
      className={classes.topmargin}
        value={selectedIndex}
        variant="scrollable"
        textColor="inherit"
        scrollButtons="on"
        indicatorColor="primary"
      >
        {content.map((content, N) => (
          <Tab
            value={N}
            key={N}
            label={content.name}
            onClick={() => handleClick(N)}
          />
        ))}
      </Tabs>
    </Paper>
  );
}

export default withStyles(styles)(MainSlide);
