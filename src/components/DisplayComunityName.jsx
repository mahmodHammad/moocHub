import React from "react";
import {Typography } from "@material-ui/core";

export default function DisplayComunityName({ name }) {
  return (
      <Typography variant="h4" align="center">
        {name}
      </Typography>
  );
}
