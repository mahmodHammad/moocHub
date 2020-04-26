// works form window routing not hash routing
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import PdfIcon from "@material-ui/icons/Book";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Pdf from "./Pdf";
import { goToAnchor } from "react-scrollable-anchor";

const useStyles = makeStyles({
  close: props => ({
    color: props.closeIconCol,
    border: ` #ccc solid 0.7px`,
    background: `#fff`,
    borderRadius: "50%",
    padding: 1
  }),
  pdfIcon: props => ({
    color: props.closeIconCol,
    marginRight:7,
    padding: 1.5

  }),
  center: {
    margin: "auto",
    textAlign: "center"
  },
  listItem: {
    paddingLeft: 26,
    paddingRight: 26,
    color: "#666"
  },
  pdf: {
    height: "100vh"
  }
});

export default function PdfIframe({
  file,
  removeFromTodo,
  parentId,
  opened,
  setopened,
  selected,
  closeIconCol
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

  const classes = useStyles({ closeIconCol });

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
        <PdfIcon  className={classes.pdfIcon}/>
        <CloseIcon
          fontSize="small"
          className={classes.close}
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
