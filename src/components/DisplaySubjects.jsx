import React from "react";
import { Grid, CardContent, Button,Card  } from "@material-ui/core";
import {Link} from "react-router-dom"
export default function DisplaySubjects({ folder }) {
  return (
    <Grid item xs={12} md={6} key={folder.id}>
      <Card>
        <CardContent>
          <Button
            component={Link}
            to={`/subject/${folder.name}/${folder.id}`}
            fullWidth
            variant="contained"
            color="primary"
          >
            {folder.name}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
