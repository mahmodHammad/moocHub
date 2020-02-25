// works form window routing not hash routing
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Pdf from "./Pdf";

const styles = {
  center: {
    margin: "auto",
    textAlign: "center"
  },
  listItem:{
    paddingLeft: 25,
    paddingRight: 44,
    color:"#666"
  }
};

function PdfIframe({ file, classes, removeFromTodo ,parentId }) {
  const [display, setdisplay] = useState(false);
  return (
    <div key={file.id} className={classes.center} id={file.id}>
      
      <ListItem button className={classes.listItem}   onClick={() => {
              setdisplay(!display);
            }}>
        <ListItemText primary= {file.name} primaryTypographyProps={{variant:"body2",component:"span",color:"primary"}}/>
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