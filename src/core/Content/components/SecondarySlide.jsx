import React from "react";
import Grid from "@material-ui/core/Grid";
import Content from "./ContentCards";
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
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: " center"
  },
  cardText: {
    flexGrow: "48"
  },
  add: {
    // width: "33%",
    flexGrow: "1",
    float: "right",
    alignSelf: "center"
  }
};
function SecondarySlide({
  content,
  classes,
  removeFromTodo,
  addToTodo,
  todo,
  subject,
  Popcontent,
  isVideo
}) {
  return (
    <Grid
      container
      className={`cardContent ${classes.topmargin}`}
      justify="center"
    >
      {content.map(cont => (
        <Content
          key={cont.id}
          content={cont}
          todo={todo}
          addToTodo={addToTodo}
          removeFromTodo={removeFromTodo}
          subject={subject}
          Popcontent={Popcontent}
          isVideo={isVideo}
        />
      ))}
    </Grid>
  );
}

export default withStyles(styles)(SecondarySlide);
