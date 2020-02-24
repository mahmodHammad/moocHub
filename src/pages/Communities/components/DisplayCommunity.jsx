import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
export default function DisplaySubjects({
  community,
  mdWidth,
  ChooseCommumity
}) {
  return (
    <Grid container item xs={12} md={mdWidth} key={community.id} spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6" color="primary" align="center">{community.name}</Typography>
      </Grid>
      {community.value.map(comm => (
      <Grid item xs={12} key={comm.id}>
        <Button
          key={comm.id}
          onClick={() => {
            ChooseCommumity(comm);
          }}
          size="medium"
          component={Link}
          to={`/${comm.name}/${comm.id}`}
          fullWidth
          variant="contained"
          className="bcol1"
        >
          {comm.name}
        </Button>
        </Grid>
      ))}
    </Grid>
  );
}
