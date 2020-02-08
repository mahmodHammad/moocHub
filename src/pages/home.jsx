////////  ////////
import DisplaySubjects from "./../components/DisplaySubjects";
import Typography  from "@material-ui/core/Typography";
import Grid  from "@material-ui/core/Grid";

import React from "react";

export default function home({ content, name }) {

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          {name}
        </Typography>
      </Grid>

      <Grid container item sm={10} spacing={4}>
        {content.map((folder, N) => {
          return <DisplaySubjects folder={folder} key={folder.id || N} mdWidth={content.length%2===1?(N === content.length-1 ?12:6):6} />;
        })}
      </Grid>
    </Grid>
  );
}
