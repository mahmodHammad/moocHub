import React from "react";
import Grid from "@material-ui/core/Grid";
import Content from "./ContentCards";
import Empty from "./Empty";

function SecondarySlide({
  content,
  removeFromTodo,
  addToTodo,
  todo,
  subject,
  Popcontent,
  isVideo,
  handleVideoPin,
  subjectIndex,
  mode,
  changeMode,
}) {
  return (
    <Grid container className="cardContent" justify="center">
      {content.length ? (
        content.map((cont, index) => (
          <React.Fragment key={index}>
            <Content
              mode={mode}
              changeMode={changeMode}
              content={cont}
              todo={todo}
              addToTodo={addToTodo}
              removeFromTodo={removeFromTodo}
              subject={subject}
              Popcontent={Popcontent}
              isVideo={isVideo}
              handleVideoPin={handleVideoPin}
              index={subjectIndex}
            />
          </React.Fragment>
        ))
      ) : (
        <Empty />
      )}
    </Grid>
  );
}

export default SecondarySlide;
