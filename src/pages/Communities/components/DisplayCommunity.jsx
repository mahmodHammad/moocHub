import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
export default function DisplaySubjects({ community, mdWidth }) {
  const ls = window.localStorage;

  return (
    <Grid item xs={12} md={mdWidth} key={community.id}>
      <Button
        onClick={() => {
          ls.setItem("community", `/${community.name}/${community.id}`);
        }}
        size="medium"
        component={Link}
        to={`/${community.name}/${community.id}`}
        fullWidth
        variant="contained"
        color="secondary"
      >
        {community.name}
      </Button>
    </Grid>
  );
}
