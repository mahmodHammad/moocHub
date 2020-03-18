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

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
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
  console.log(handleSelect, isAdd);

  const handleVideoPinClick =(url,goto)=>{
    handleClose()
    handleVideoPin(url,goto)
  }
  return (
    <div>
      <Dialog
        fullScreen
        open={Pop}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
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

        {isVideo ? (
          <Video
            goto={content.goto}
            url={content.id}
            handleVideoPin={handleVideoPinClick}
            isPinned={false}
          />
        ) : (
          <Pdf pdfId={content.id} />
        )}
      </Dialog>
    </div>
  );
}
