import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import themes from "../../../config/theme";

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
    background: `radial-gradient(ellipse,${themes[props.index][1]}, ${
      themes[props.index][2]
    })`,
    color: themes[props.index][0]
  })
}));

export default function DisplaySubjects({ folder, index, changeTheme }) {
  const classes = useStyles({ index });
  return (
    // What the hell is this
    <div className="subBtn">
      {/* {console.log("FFFF",folder)} */}
      <Button
        disableTouchRipple
        onClick={() =>
          changeTheme(
            "#333",
            themes[index][0],
            `radial-gradient(ellipse at top,#fff,rgb(255, 255, 255),${themes[index][3]})`
          )
        }
        component={Link}
        to={{
          pathname: `/subject/${folder.name}/${folder.id}`,
          state: { divided: folder.divided ,index }
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
