// works form window routing not hash routing
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import Pdf from "./Pdf";

const styles = {
  center: {
    margin: "auto",
    textAlign: "center"
  }
};

function PdfIframe({ file, classes, removeFromTodo ,parentId }) {
  const [display, setdisplay] = useState(false);
  return (
    <div key={file.id} className={classes.center} id={file.id}>
      
      <ListItem className="NerdsListItem">
        <ListItemText>
          <Typography
            variant="body2"
            component="span"
            color="primary"
            onClick={() => {
              setdisplay(!display);
            }}
          >
            {file.name}
          </Typography>
        </ListItemText>
        <CloseIcon
          fontSize="small"
          className="col3 todoRemove"
          onClick={() => removeFromTodo(file ,parentId)}
        />
      </ListItem>
      {display && (
        <Pdf pdfId={file.id}/>
      )}
    </div>
  );
}

export default withStyles(styles)(PdfIframe);