import React from "react";
import { Grid, CardContent, Button,Card ,Link } from "@material-ui/core";

export default function DisplaySubjects({ folder }) {
  return (
    <Grid item sm={6} key={folder.id}>
      <Card>
        <CardContent>
          <Button
            component={Link}
            to="/subject"
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
