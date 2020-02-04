import React from 'react'
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
const styles={
    topmargin :{
        margin:'20px 0 0 0'
    }
}
function SecondarySlide({content ,classes ,handleClick ,selectedIndex}) {
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
            justify="center"
          >
            {content.map((cont, N) => (
              <Tab
                value={N}
                key={N}
                label={cont.name}
                onClick={() => handleClick(N)}
              />
            ))}
          </Tabs>
        </AppBar>
    )
}

export default withStyles(styles)(SecondarySlide)