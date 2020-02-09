import React from "react";
import Typography from "@material-ui/core/Typography";

export default function DisplayComunityName({ name }) {
  return (
      <Typography variant="h5" align="center">
        {name}
      </Typography>
  );
}
