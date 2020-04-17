import React from "react";
import Grid from "@material-ui/core/Grid";
import Content from "./ContentCards";
import Empty from "./Empty";
import { useSwipeable, Swipeable } from "react-swipeable";

function SecondarySlide({
  content,
  removeFromTodo,
  addToTodo,
  todo,
  subject,
  Popcontent,
  isVideo,
  handleVideoPin,
  className
}) {
  return (
    <Swipeable
      onSwipedRight={eventData => console.log("swipe right", eventData)}
      onSwipedLeft={eventData => console.log("swipeleft", eventData)}
    >
      <Grid container className={`${className} cardContent`} justify="center">
        {content.length ? (
          content.map((cont, index) => (
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
          <Empty />
        )}
      </Grid>
    </Swipeable>
  );
}

export default SecondarySlide;
