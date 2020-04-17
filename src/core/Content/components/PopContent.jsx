import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Pdf from "../../../pages/nerds/components/Pdf";
import Video from "../../Video/Video";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Swipeable } from "react-swipeable";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    opacity: 0.4,
    transition: "all 0.2s ease",
    "&:hover": {
      opacity: 1
    }
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  pdf: {}
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
  handleVideoPin
}) {
  const classes = useStyles();
  const handleVideoPinClick = (url, goto, played) => {
    handleClose();
    handleVideoPin(url, goto, played);
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={Pop}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className={`${classes.pdf} popContent`}>
          {isVideo ? (
            <Video
              goto={content.goto}
              url={content.url}
              handleVideoPin={handleVideoPinClick}
              isPinned={false}
            />
          ) : (
            <Pdf pdfId={content.id} />
          )}
        </div>
        <Swipeable onSwipedUp={() => handleClose()}>
          <AppBar className={classes.appBar}>
            <Toolbar variant="dense">
              <CloseIcon
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              />
              <Typography
                variant="inherit"
                noWrap={true}
                className={classes.title}
              >
                {content.name}
              </Typography>
              {isAdd ? (
                <AddCircleIcon onClick={handleSelect} />
              ) : (
                <RemoveCircleIcon color="secondary" onClick={handleSelect} />
              )}
            </Toolbar>
          </AppBar>
        </Swipeable>
      </Dialog>
    </div>
  );
}
