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
  listItem: {
    paddingLeft: 25,
    paddingRight: 44,
    color: "#666"
  }
};

function handleToggleContent(openedItems ,setopened ,oldDisplay ,setdisplay ,file){
  
  console.log(openedItems , oldDisplay)
  let [opened]=[openedItems]
  if(oldDisplay){
    setdisplay(false);
  }
  else{
    setdisplay(true);
    setopened([...openedItems , file])
  }
}

function PdfIframe({
  file,
  classes,
  removeFromTodo,
  parentId,
  opened,
  setopened
}) {
  const [display, setdisplay] = useState(false);
  return (
    <div key={file.id} className={classes.center} id={file.id}>
      <ListItem
        button
        className={classes.listItem}
        onClick={() => {
          handleToggleContent(opened ,setopened ,display ,setdisplay ,file)
          
        }}
      >
        <ListItemText
          primary={file.name}
          primaryTypographyProps={{
            variant: "body2",
            component: "span",
            color: "primary"
          }}
        />
        <CloseIcon
          fontSize="small"
          className="col3 todoRemove"
          onClick={() => removeFromTodo(file, parentId)}
        />
      </ListItem>
      {display && <Pdf pdfId={file.id} />}
    </div>
  );
}

export default withStyles(styles)(PdfIframe);
