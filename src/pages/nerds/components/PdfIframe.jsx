// works form window routing not hash routing
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import IdtoUrl from "../../../helper/getPdfUrl";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import GetAppIcon from "@material-ui/icons/GetApp";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
// import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";

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

function PdfIframe({ file, classes, removeFromTodo }) {
  const fileurl = IdtoUrl(file.id);
  const [display, setdisplay] = useState(false);
  return (
    <div className={classes.center}  id={file.id}>
      {display ? (
        <React.Fragment>
          <Typography variant="body1">{file.name}</Typography>

          <ButtonGroup

            size="small"
            variant="contained"
            color="secondary"
            aria-label="contained primary button group"
          >
            <Button>
              <UnfoldLessIcon
                onClick={() => {
                  setdisplay(false);
                }}
              />
            </Button>
            <Button>
              <Link href={`#${file.id}`}>
                <ExpandMoreIcon fontSize="small" color="primary" />
              </Link>
            </Button>
            {file.existInTodo === true && (
              <Button size="small" onClick={() => removeFromTodo(file)}>
                <RemoveCircleOutlineIcon color="primary" />
              </Button>
            )}
          </ButtonGroup>

          <iframe
           
            title="lecture"
            className={classes.fullwidth}
            frameBorder="0"
            src={fileurl.displayPdf}
          ></iframe>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography variant="h6">{file.name}</Typography>

          <ButtonGroup
            size="small"
            variant="contained"
            color="secondary"
            aria-label="contained primary button group"
          >
            <Button>
              <UnfoldMoreIcon
               size="small" 
                onClick={() => {
                  setdisplay(true);
                }}
              />
            </Button>

            <Button>
              <Link href={fileurl.downloadPdf}>
                <GetAppIcon  size="small"  color="primary" />
              </Link>
            </Button>

            {file.existInTodo === true && (
              <Button>
                <RemoveCircleOutlineIcon
                  onClick={() => removeFromTodo(file)}
                  color="primary"
                />
              </Button>
            )}
          </ButtonGroup>
        </React.Fragment>
      )}
    </div>
  );
}

export default withStyles(styles)(PdfIframe);
