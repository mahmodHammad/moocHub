import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";

import PdfIcon from "@material-ui/icons/PictureAsPdf";

// to make user see his subjects directly withou choosing his community again

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#ffffffbb",
    borderTop: "2px solid #fff"
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
  // 1 -> study -1 -> home

 

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        if (value === 10) {
          //   move to videos
        } else if (value === 100) {
          //   move to drive (if divided display divided[0] & divided list)
        }
        if (divided[newValue] !== undefined) {
          loadSubject(divided[newValue].id);
        }
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
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
            icon={<PdfIcon color="secondary" />}
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

    </BottomNavigation>
  );
}
