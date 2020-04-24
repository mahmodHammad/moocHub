import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
  subjectButton: props=>({
    background: `radial-gradient(ellipse,${theme.palette[props.index].bg1}, ${theme.palette[props.index].bg2})`,
    color: theme.palette[props.index].color
  })
}));

export default function DisplaySubjects({ folder, index }) {
  const classes = useStyles({index:`s${index}`});
  console.log(classes);
  return (
    // What the hell is this
    <div className="subBtn">
      {/* {console.log("FFFF",folder)} */}
      <Button
        disableTouchRipple
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
