import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Pdf from "../../../pages/nerds/components/Pdf";
import Video from "../../Video/Video";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import { Swipeable } from "react-swipeable";

const useStyles = makeStyles((theme) => ({
  bottom: {
    top: "auto",
    bottom: 0,
  },
  appBar: {
    transition: "all 0.2s ease",
    "&:hover": {
      // opacity: 1,
    },
  },
  mode: {
    marginRight: 10,
    cursor: "pointer",
  },
  hover: {
    cursor: "pointer",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  op: {
    opacity: 0.4,
  },
  root: {
    background: "#000",
  },
  vid: {
    marginTop: 48,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="dowm" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  Pop,
  handleClose,
  handleSelect,
  content,
  isAdd,
  isVideo,
  handleVideoPin,
  mode,
  changeMode,
}) {
  const classes = useStyles();
  const handleVideoPinClick = (url, goto, played) => {
    handleClose();
    handleVideoPin(url, goto, played);
  };
  return (
    <div className="pop">
      <Dialog
        fullScreen
        open={Pop}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* Content----------------------------------> */}
        <div className="popContent">
          {isVideo ? (
            <Video
              goto={content.goto}
              url={content.url}
              handleVideoPin={handleVideoPinClick}
              isPinned={false}
            />
          ) : (
            <Pdf pdfId={content.id} mode={mode} />
          )}
        </div>

        {/* Bottom BAR--------------------------------> */}
        <Swipeable onSwipedUp={() => handleClose()}>
          <Hidden mdUp={true}>
            <AppBar
              className={`${classes.appBar} ${classes.bottom} ${
                !isVideo && classes.op
              }`}
            >
              <Toolbar variant="dense">
                <CloseIcon
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                  className={classes.hover}
                />

                <Typography
                  variant="inherit"
                  noWrap={true}
                  className={classes.title}
                >
                  {content.name}
                </Typography>
                <Brightness4Icon
                  color="inherit"
                  className={classes.mode}
                  onClick={() => changeMode()}
                />
                {isAdd ? (
                  <AddCircleIcon
                    onClick={handleSelect}
                    className={classes.hover}
                  />
                ) : (
                  <RemoveCircleIcon
                    color="secondary"
                    className={classes.hover}
                    onClick={handleSelect}
                  />
                )}
              </Toolbar>
            </AppBar>
          </Hidden>
        </Swipeable>
        <Hidden smDown={true}>
          <AppBar className={`${classes.appBar}  ${!isVideo && classes.op}`}>
            <Toolbar variant="dense">
              <CloseIcon
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                className={classes.hover}
              />
              <Typography
                variant="inherit"
                noWrap={true}
                className={classes.title}
              >
                {content.name}
              </Typography>
              <Brightness4Icon
                color="inherit"
                className={`${classes.mode}`}
                onClick={() => changeMode()}
              />
              {isAdd ? (
                <AddCircleIcon
                  onClick={handleSelect}
                  className={classes.hover}
                />
              ) : (
                <RemoveCircleIcon
                  color="secondary"
                  onClick={handleSelect}
                  className={classes.hover}
                />
              )}
            </Toolbar>
          </AppBar>
        </Hidden>
      </Dialog>
    </div>
  );
}
