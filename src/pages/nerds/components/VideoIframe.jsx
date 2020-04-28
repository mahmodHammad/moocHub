//XXX needs refactoring XXX
import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import VideoIcon from "@material-ui/icons/YouTube";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PopContent from "../../../core/Content/components/PopContent";

export default function PdfIframe({
  content,
  removeFromTodo,
  parentId,
  closeIconCol,
  handleVideoPin
}) {
  const [display, setdisplay] = useState(false);

  function handleSelectedContent(open) {
    setdisplay(open);
  }

  const useStyles = makeStyles({
    close: props => ({
      color: props.closeIconCol,
      border: ` #ccc solid 0.7px`,
      background: `#fff`,
      borderRadius: "50%",
      padding: 1
    }),
    Icon: props => ({
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
    }
  });

  const classes = useStyles({ closeIconCol });
  return (
    <div key={content.id} className={classes.center}>
      <ListItem
        button
        className={classes.listItem}
        onClick={() => {
          handleSelectedContent(true);
        }}
      >
        <ListItemText
          primary={content.name}
          primaryTypographyProps={{
            variant: "body2",
            component: "span",
            color: "primary"
          }}
        />
        <VideoIcon className={classes.Icon} />
        <CloseIcon
          fontSize="small"
          className={classes.close}
          onClick={() => removeFromTodo(content, parentId)}
        />
      </ListItem>
      {display && (
        <div className={classes.pdf}>
          <PopContent
            handleClose={() => handleSelectedContent(false)}
            handleSelect={() => removeFromTodo(content, parentId)}
            Pop={display}
            content={content}
            subject={"math"}
            isAdd={false}
            isVideo={true}
            handleVideoPin={handleVideoPin}
          />
        </div>
      )}
    </div>
  );
}
