import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IdtoUrl from "../helper/getPdfUrl";
import { Button, ButtonGroup ,Typography } from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';



import DoneIcon from '@material-ui/icons/Done';
import GetAppIcon from '@material-ui/icons/GetApp';
import HomeIcon from '@material-ui/icons/Home';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const styles = {
  fullwidth: {
    width: "98vw",
    height: "99vh"
  },
  center: {
    margin: "auto",
    textAlign: "center"
  }
};

function PdfIframe({ file, classes ,addToTodo}) {
  const fileurl = IdtoUrl(file.id);
  return (
    <div className={classes.center}>
      <Typography variant="h6">
        {file.name}
      </Typography>
      <ButtonGroup
        size="small"
        variant="contained"
        color="secondary"
        aria-label="contained primary button group"
      >
        <Button><ArrowDownwardIcon color="primary"/></Button>
        <Button size="small"><GetAppIcon color="primary"/></Button>
        <Button size="small" onClick={()=>addToTodo(file)}><AddIcon color="primary"/></Button>
        <Button size="small">    <AttachFileIcon color="primary"/></Button>
      </ButtonGroup>

      <iframe
        title="lecture"
        className={classes.fullwidth}
        frameBorder="0"
        src={fileurl.displayPdf}
      ></iframe>
    </div>
  );
}

export default withStyles(styles)(PdfIframe);
