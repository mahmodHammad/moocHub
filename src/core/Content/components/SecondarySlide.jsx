import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Content from "./ContentCards";

function SecondarySlide({
  content,
  removeFromTodo,
  addToTodo,
  todo,
  subject,
  Popcontent,
  isVideo,
  handleVideoPin
}) {
  return (
    <Grid container className={`cardContent`} justify="center">
      {content.length ? (
        content.map((cont,index) => (
          <React.Fragment key={index}>
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
          </React.Fragment>
        ))
      ) : (
        <div className="Empty">
          <Typography color="secondary" variant="h6" component="div">
            This folder doesn't have any pdf files so far
          </Typography>
        </div>
      )}
    </Grid>
  );
}

export default SecondarySlide;
