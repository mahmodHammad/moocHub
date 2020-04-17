import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainSlide from "./components/MainSlide";
import SecondarySlide from "./components/SecondarySlide";
import LinearProgress from "@material-ui/core/LinearProgress";
import BottomBar from "./components/BottomBar";
import Empty from "./components/Empty";
import { makeStyles } from "@material-ui/core/styles";
import { Swipeable } from "react-swipeable";

const useStyles = makeStyles({
  root: {
    minHeight: "73vh",
    background: "#ffffff22",
    marginBottom: "50px"
  }
});

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
  const classes = useStyles();

  function swipe(isLeft) {
    if (isLeft) {
      if (PrimarySliderSelectedIndex + 1 < content.length) {
        handlePrimeTabClick(PrimarySliderSelectedIndex + 1);
      }
    } else {
      if (PrimarySliderSelectedIndex > 0) {
        handlePrimeTabClick(PrimarySliderSelectedIndex - 1);
      }
    }
  }

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
          <Empty />
        ) : (
          <span></span>
        )}

        {/******  display Secondary slider depending on the selected prime  ******/}

        <Grid item xs={12}>
          <Swipeable
            onSwipedRight={() => swipe(0)}
            onSwipedLeft={() => swipe(1)}
          >
            <div className={classes.root}>
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
                    handlePrimeTabClick={handlePrimeTabClick}
                    PrimarySliderSelectedIndex={PrimarySliderSelectedIndex}
                    primeSliderLength={content.length}
                  />
                )}
            </div>
          </Swipeable>
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
