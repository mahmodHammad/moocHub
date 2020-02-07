////////  ////////
import DisplaySubjects from "./../components/DisplaySubjects";
import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function home({content,name}) {




  console.log("content",content)
  console.log("content length",content.length)
  console.log("content 4",content[4])
  



  
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          {name}
        </Typography>
      </Grid>

      <Grid container item sm={10} spacing={4}>
        {content.map((folder,N) => {
         return  <DisplaySubjects folder={folder} key={folder.id ||N} />
        }
        )}
      </Grid>
    </Grid>
  );
}
