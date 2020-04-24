import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

let themes = [
  {
    color: "#950000",
    bg1: "rgb(255, 225, 225)",
    bg2: "rgb(255, 210, 210)"
  },
  {
    color: "#b8860b",
    bg1: "rgb(255, 254, 235)",
    bg2: "rgb(255, 254, 210)"
  },
  {
    color: "#006400",
    bg1: "rgb(234, 255, 234) ",
    bg2: "rgb(221, 255, 210)"
  },
  {
    color: "#008b8b",
    bg1: "rgb(230, 255, 255)",
    bg2: "rgb(210, 250, 255)"
  },
  {
    color: "#8b008b",
    bg1: "rgb(252, 231, 255)",
    bg2: "rgb(252, 214, 255)"
  }
];

const useStyles = makeStyles((theme, props) => ({
  logo: {
    flexGrow: 1,
    justifyContent: "left",
    fontWeight: "bold"
  },
  study: {
    padding: " 2px 9px",
    fontSize: "0.7125rem"
  },
  subjectButton: props => ({
    background: `radial-gradient(ellipse,${theme.palette[props.index].bg1}, ${
      theme.palette[props.index].bg2
    })`,
    color: theme.palette[props.index].color
  })
}));

export default function DisplaySubjects({ folder, index, changeTheme }) {
  const classes = useStyles({ index: `s${index}` });
  return (
    // What the hell is this
    <div className="subBtn">
      {/* {console.log("FFFF",folder)} */}
      <Button
        disableTouchRipple
        onClick={() =>
          changeTheme(
            "#333",
            themes[index].color,
            `radial-gradient(ellipse at top,#fff,rgb(255, 255, 255),${themes[index].bg1})`
          )
        }
        component={Link}
        to={{
          pathname: `/subject/${folder.name}/${folder.id}`,
          state: { divided: folder.divided }
        }}
      >
        <div
          className={`subjectCard ${classes.subjectButton}`}
          component="button"
        >
          {folder.name}
        </div>
      </Button>
    </div>
  );
}
