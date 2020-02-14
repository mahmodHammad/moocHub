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
  op: {
    opacity: "0.86"
  },
  inline:{
    display:"inline"
  },
  add:{
    width:"33%",
    display:"inline"
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
    <Grid container spacing={2} className={classes.topmargin} justify="center" color="primary">
      {content.map((cont, N) => (
        <Grid continer item xs={8} key={cont.id} className={classes.op}>
          <Card>
            <CardContent>
              <Grid item xs={2} className={classes.inline}>
               <span>
                  {SubparentName + (N + 1)}
               </span>
              </Grid>
              <Grid item xs={4} className={classes.inline}>
              
              <span>

                  {cont.name}
              </span>
              </Grid>
              <Grid item xs={5} className={classes.inline}>

<span className={classes.add}>

                  <Button size="small">Learn More</Button>
</span>
</Grid>

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
