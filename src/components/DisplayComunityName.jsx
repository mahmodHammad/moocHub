import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function DisplayComunityName({ name }) {
  return (
    <Grid item sm={12}>
      <Typography variant="h3" align="center">
        {name}
      </Typography>
    </Grid>
  );
}
