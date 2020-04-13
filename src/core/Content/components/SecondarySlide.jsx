import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Content from "./ContentCards";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  topmargin: {
    margin: "50px 0 0 0"
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
  isVideo,
  handleVideoPin
}) {
  return (
    <Grid
      container
      className={`cardContent`}
      justify="center"
    >
      
      {content.length?content.map(cont => (
        <Content
          key={cont.id}
          content={cont}
          todo={todo}
          addToTodo={addToTodo}
          removeFromTodo={removeFromTodo}
          subject={subject}
          Popcontent={Popcontent}
          isVideo={isVideo}
          handleVideoPin={handleVideoPin}
        />
      )):<div className="Empty">
        <Typography color="secondary" variant="h6" component="div">
          This folder doesn't have any pdf files so far
        </Typography>
        </div>}
    </Grid>
  );
}

export default withStyles(styles)(SecondarySlide);
