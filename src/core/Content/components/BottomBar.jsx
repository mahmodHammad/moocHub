import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AcUnit from "@material-ui/icons/AcUnit";
import Pets from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";

import { Redirect } from "react-router-dom";

// to make user see his subjects directly withou choosing his community again

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#ffffffaa",
    borderTop: "1px solid #fff"
  },
  swip: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }
});

export default function SimpleBottomNavigation({
  divided,
  loadSubject,
  isVideo,
  subject
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [swipe, setswipe] = React.useState(0);
  // 1 -> study -1 -> home

  if (swipe === 1) {
    return <Redirect to="/nerds" />;
  } else if (swipe === -1) {
    return <Redirect to="/" />;
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        if (divided[newValue] !== undefined) {
          loadSubject(divided[newValue].id);
        }
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Swipeable
        className={classes.swip}
        onSwipedRight={() => setswipe(-1)}
        onSwipedLeft={() => setswipe(1)}
      >
        {divided.map(d => (
          <BottomNavigationAction label={d.name} key={d.id} />
        ))}

        
        {isVideo ? (
          <BottomNavigationAction
            value="100"
            component={Link}
            to={{
              pathname: `/subject/${subject.name}/${subject.id}`,
              state: { divided }
            }}
            icon={<DriveEtaIcon color="secondary" />}
          />
        ) : (
          <BottomNavigationAction
            value="10"
            component={Link}
            to={{
              pathname: `/videos/${subject.name}/${subject.id}`,
              state: { divided }
            }}
            icon={<YouTubeIcon color="secondary" />}
          />
        )}
      </Swipeable>
    </BottomNavigation>
  );
}
