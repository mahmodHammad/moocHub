import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function DisplaySubjects({ folder, mdWidth, index }) {
  return (
    // What the hell is this
    <div className="subBtn">
      <Button
        disableTouchRipple
        component={Link}
        to={{
          pathname: `/subject/${folder.name}/${folder.id}`
        }}
      >
        <div className={`subjectCard subject${index}`} component="button">
          {folder.name}
        </div>
      </Button>
    </div>
  );
}
