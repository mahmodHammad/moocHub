// works form window routing not hash routing
import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Pdf from "./Pdf";
import { goToAnchor } from "react-scrollable-anchor";

const styles = {
  center: {
    margin: "auto",
    textAlign: "center"
  },
  listItem: {
    paddingLeft: 25,
    paddingRight: 44,
    color: "#666"
  },
  pdf: {
    height: "100vh"
  }
};

function PdfIframe({
  file,
  classes,
  removeFromTodo,
  parentId,
  opened,
  setopened,
  selected
}) {
  const [display, setdisplay] = useState(false);

  function handleToggleContent(file) {
    if (display) {
      setdisplay(false);
      const withoutReduncancy = opened.filter(e => e.id !== file.id);
      setopened(withoutReduncancy);
    } else {
      setdisplay(true);
      setopened([...opened, file]);
    }
    goToAnchor(file.id);
  }
  useEffect(() => {
    if (!display) {
      if (selected) {
        handleToggleContent(file);
      }
    }
  });

  return (
    <div key={file.id} className={classes.center}>
      <ListItem
        button
        className={classes.listItem}
        onClick={() => {
          handleToggleContent(file);
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
          className="todoRemove"
          color="secondary"
          onClick={() => removeFromTodo(file, parentId)}
        />
      </ListItem>
      {display && (
        <div className={classes.pdf}>
          <Pdf pdfId={file.id} />
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(PdfIframe);
