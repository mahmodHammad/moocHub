import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#ffffff33",
    border: "1px solid #eee"
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
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        if (value === 10) {
          //   move to videos
        } else if (value === 100) {
          //   move to drive (if divided display divided[0] & divided list)
        }
        //   youtube value ==10
        //   googleDrive value ==100
        console.log("event", event);
        console.log("newValue", divided[newValue]);
        console.log("newValue", newValue);
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
            state: { divided}
          }}
          icon={<DriveEtaIcon color="secondary" />}
        />
      ) : (
        <BottomNavigationAction
          value="10"
          component={Link}
          to={{
            pathname: `/videos/${subject.name}/${subject.id}`,
            state:{divided}
          }}
          icon={<YouTubeIcon color="secondary" />}
        />
      )}
    </BottomNavigation>
  );
}
