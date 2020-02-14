import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  topmargin: {
    margin: "20px 0 0 0"
  },
  center: {
    margin: "auto"
  },
  op:{
    opacity:"0.8"
  }
};
function SecondarySlide({
  parentName,
  content,
  classes,
  handleClick,
  selectedIndex
}) {
  let SubparentName;
  if (parentName[0] === "_") {
    SubparentName = parentName.substr(1, 4);
  } else {
    SubparentName = parentName.substr(0, 3);
  }
  console.log(parentName);

  return (
    <Grid container spacing={2} className={classes.topmargin} justify="center">
      
      {content.map((cont , N)=>(
         <Grid item xs={8} key={cont.id} className={classes.op}>
        <Card >
          <CardContent>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              component="h2"
            >
              {SubparentName + (N+1)}
            </Typography>

            <Typography
              color="textSecondary"
              variant="body2"
              component="h3"
            >
              {cont.name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      ))}
     
    </Grid>
    // <AppBar
    //   position="static"
    //   centered="true"
    //   color="primary"
    //   className="addmargin"
    // >
    //   {console.log("sec cont" , content)}

    //   <Tabs
    //     value={selectedIndex}
    //     textColor="inherit"
    //     variant="scrollable"
    //     scrollButtons="on"
    //   >
    //     {content.map((cont, N) => (
    //       <Tab
    //         className={classes.center}
    //         value={N}
    //         key={N}
    //         label={`${SubparentName} ${N + 1}`}
    //         onClick={() => handleClick(N)}
    //       />
    //     ))}
    //   </Tabs>
    // </AppBar>
  );
}

export default withStyles(styles)(SecondarySlide);
