import React from "react";

import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import Content from './ContentCards'

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
  inline: {
    display: "inline"
  },
  container: { display: "flex", flexDirection: "row" ,justifyContent:" center" },
  cardText:{
    flexGrow:"48"

  },
  add: {
    // width: "33%",
    flexGrow:"1",
    float:"right",
    alignSelf: "center"
  }
};
function SecondarySlide({
  content,
  classes,
  removeFromTodo,
  addToTodo,
  todo
}) {
 
  return (
    <Grid
      container
      spacing={3}
      className={classes.topmargin}
      justify="center"
    >
      {content.map((cont, N) => (
        <Content key={cont.id}  content={cont} todo={todo} addToTodo={addToTodo} removeFromTodo={removeFromTodo}/>
      ))}
    </Grid>
  );
}

export default withStyles(styles)(SecondarySlide);
