import React from "react";
import Typography from "@material-ui/core/Typography";

import DisplaySubjectButton from "./DisplaySubjectButton";
export default function DisplaySubjects({ folder, mdWidth,index}) {
  return (
      <div className={`subjectCard subject${index}`}>
            {folder.name}
      </div>
  );
}
