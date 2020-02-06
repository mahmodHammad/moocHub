////////  ////////
import DisplaySubjects from "./../components/DisplaySubjects";
import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function home({content,name}) {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          {name}
        </Typography>
      </Grid>

      <Grid container item sm={10} spacing={4}>
        {content.map(folder => (
          <DisplaySubjects folder={folder} key={folder.id} />
        ))}
      </Grid>
    </Grid>
  );
}
