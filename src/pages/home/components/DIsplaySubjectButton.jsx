import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function DisplaySubjectButton({ folder, destination ,label }) {
  return (
    <Grid item xs>
      <Button
        size="small"
        component={Link}
        to={{
          pathname: `/${destination}/${folder.name}/${folder.id}`,
        }}
        fullWidth
        variant="contained"
        color="inherit"
      >
        <Typography color="inherit" variant="inherit">
          {label}
        </Typography>
      </Button>
    </Grid>
  );
}
