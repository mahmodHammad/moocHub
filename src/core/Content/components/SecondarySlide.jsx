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
  handlePrimeTabClick,
  PrimarySliderSelectedIndex,
  className
}) {
  return (
    <Swipeable
      onSwipedRight={eventData =>handlePrimeTabClick(PrimarySliderSelectedIndex-1)}
      onSwipedLeft={eventData => handlePrimeTabClick(PrimarySliderSelectedIndex+1)}
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
