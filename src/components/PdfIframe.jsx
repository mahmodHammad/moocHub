import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IdtoUrl from "../helper/getPdfUrl";
import { Button, ButtonGroup ,Typography } from "@material-ui/core";
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
        <Button>scroll</Button>
        <Button size="small">Download</Button>
        <Button size="small" onClick={()=>addToTodo(file)}>Add to list</Button>
        <Button size="small">Pin</Button>
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
