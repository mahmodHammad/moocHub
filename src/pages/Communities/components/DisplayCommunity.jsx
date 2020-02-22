import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Link ,Redirect} from "react-router-dom";
export default function DisplaySubjects({ community, mdWidth,ChooseCommumity }) {

  return (
    <Grid item xs={12} md={mdWidth} key={community.id}>
      <Button
        onClick={() => {
           ChooseCommumity(community)
        }}
        
        size="medium"
        component={Link}
        to={`/${community.name}/${community.id}`}
        fullWidth
        variant="contained"
        className="bcol1"
      >
        {community.name}
      </Button>
    </Grid>
  );
}
