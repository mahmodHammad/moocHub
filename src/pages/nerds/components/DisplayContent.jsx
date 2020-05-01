import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import StudySubject from "./StudySubject";
import { Swipeable } from "react-swipeable";
import { Redirect } from "react-router-dom";
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
  handleVideoPin
}) {
  const classes = useStyles();

  const [swiped, setswiped] = React.useState(0);
  if (swiped === 1) {
    return <Redirect to="/wiki" />;
  } else if (swiped === -1) {
    return <Redirect to="/" />;
  }

  return (
    <Swipeable
      className={classes.root}
      onSwipedRight={() => setswiped(-1)}
      onSwipedLeft={() => setswiped(1)}
    >
      {todo.length ? (
        todo.map(e => (
          <StudySubject
            key={e.index}
            e={e}
            opened={opened}
            removeFromTodo={removeFromTodo}
            setopened={setopened}
            checkSelected={checkSelected}
            selected={selected}
            index={e.index}
            handleVideoPin={handleVideoPin}
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
    </Swipeable>
  );
}
