import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#fff3",
    border: "1px solid #eee",
    borderRadius: "5px"
  }
});

export default function SimpleBottomNavigation({ divided }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
          console.log("event",event)
          console.log("newValue",divided[newValue])
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {divided.map(d => (
        <BottomNavigationAction label={d.name} key={d.id} />
      ))}
      <BottomNavigationAction icon={<YouTubeIcon color="secondary" />} />
    </BottomNavigation>
  );
}
