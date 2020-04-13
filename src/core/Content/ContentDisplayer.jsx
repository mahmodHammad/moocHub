import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainSlide from "./components/MainSlide";
import SecondarySlide from "./components/SecondarySlide";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function ContentDisplayer({
  subject,
  content,
  PrimarySliderSelectedIndex,
  handlePrimeTabClick,
  todo,
  addToTodo,
  removeFromTodo,
  isVideo,
  handleVideoPin,
  loading,
}) {
  return (
    <div>
      <Typography variant="h6" align="center" className="subjectLabel">
        {subject.name}
      </Typography>
      {loading ? <LinearProgress color="secondary" /> : <span></span>}

      <Grid container justify="center">
        {/******  display subject name  ******/}

        {/******  display MainSlider   ******/}

        {content !== false && (
          <Grid item xs={12} md={"auto"}>
            <MainSlide
              content={content}
              selectedIndex={PrimarySliderSelectedIndex}
              handleClick={handlePrimeTabClick}
            />
          </Grid>
        )}

        {/******  display Secondary slider depending on the selected prime  ******/}

        <Grid item xs={12}>
          {PrimarySliderSelectedIndex !== false &&
            content[PrimarySliderSelectedIndex].value !== false && (
              <SecondarySlide
                subject={subject}
                content={content[PrimarySliderSelectedIndex].value}
                removeFromTodo={removeFromTodo}
                addToTodo={addToTodo}
                todo={todo}
                isVideo={isVideo}
                handleVideoPin={handleVideoPin}
              />
            )}
        </Grid>
      </Grid>
    </div>
  );
}
