import React from "react";
import PdfIframe from "./PdfIframe";
import List from "@material-ui/core/List";

import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles({
  root: {
    minHeight: "calc(100vh - 48px)",
  }
});

function checkSelected(selected, item) {
  if (selected === undefined) {
    return false;
  } else {
    if (selected.selected.id === item.id) {
      return true;
    } else {
      return false;
    }
  }
}
export default function DisplayContent({
  todo,
  removeFromTodo,
  opened,
  setopened,
  selected
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {todo.length ? (
        todo.map(e => (
          <div key={e.id}>
            <List>
              <Typography gutterBottom align="center">
                {e.name}
              </Typography>
              {e.value.map(item => (
                <React.Fragment key={item.id}>
                  <PdfIframe
                    file={item}
                    removeFromTodo={removeFromTodo}
                    parentId={e.id}
                    opened={opened}
                    setopened={setopened}
                    selected={checkSelected(selected, item)}
                  />
                </React.Fragment>
              ))}
            </List>
            <Divider />
          </div>
        ))
      ) : (
        <div className="Empty">
          <Typography align="center" variant="h5" color="primary" gutterBottom>
            Study List Is Empty !
          </Typography>
          <Typography align="center" variant="h6" color="secondary">
            you should add content first using the
            <AddCircleIcon size="large" color="primary" /> icon ,then come again
            to see it here
          </Typography>
        </div>
      )}
    </div>
  );
}
