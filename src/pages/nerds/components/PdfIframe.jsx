// works form window routing not hash routing
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
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
      <Container  maxWidth="lg">
      <ListItem className="NerdsListItem">
        <ListItemText>
          <Typography
            variant="h6"
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
      </Container>
      {display && (
        <Pdf pdfId={file.id}/>
      )}
      <Divider />
    </div>
  );
}

export default withStyles(styles)(PdfIframe);