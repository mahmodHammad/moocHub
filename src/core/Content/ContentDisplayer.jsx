import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainSlide from "./components/MainSlide";
import SecondarySlide from "./components/SecondarySlide";
import LinearProgress from "@material-ui/core/LinearProgress";
import BottomBar from "./components/BottomBar";

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
  divided,
  loadSubject
}) {
  return (
    <div>
      {/******  display subject name  ******/}

      <Typography
        variant="h6"
        align="center"
        color="primary"
        className="subjectLabel"
      >
        {subject.name}
      </Typography>
      {loading ? <LinearProgress color="secondary" /> : <span></span>}

      <Grid container justify="center">
        {/******  display MainSlider   ******/}

        {content.length ? (
          <Grid item xs={12} md={"auto"}>
            <MainSlide
              content={content}
              selectedIndex={PrimarySliderSelectedIndex}
              handleClick={handlePrimeTabClick}
            />
          </Grid>
        ) : !loading ? (
          <div className="Empty">
            {/* will be extracted to a reusable component */}
            <Typography color="secondary" variant="h5" component="div">
              Empty
            </Typography>
          </div>
        ) : (
          <span></span>
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
        <BottomBar
          divided={divided}
          loadSubject={loadSubject}
          isVideo={isVideo}
          subject={subject}
        />
      </Grid>
    </div>
  );
}
