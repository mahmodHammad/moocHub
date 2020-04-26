import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import StudySubject from "./StudySubject";

const useStyles = makeStyles({
  root: {
    minHeight: "calc(100vh - 48px)"
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
  selected,
  
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {todo.length ? (
        todo.map(e => (
          <StudySubject
            e={e}
            opened={opened}
            removeFromTodo={removeFromTodo}
            setopened={setopened}
            checkSelected={checkSelected}
            selected={selected}
            index={e.index}
          />
        ))
      ) : (
        <div className="Empty">
          <Typography align="center" variant="h5" color="primary" gutterBottom>
            Study List Is Empty !
          </Typography>
          <Typography align="center" variant="body1" color="secondary">
            you should add content first using the
            <AddCircleIcon size="small" color="primary" /> icon ,then come again
            to see it here
          </Typography>
        </div>
      )}
    </div>
  );
}
