import React from "react";
import Grid  from "@material-ui/core/Grid";
import CardContent  from "@material-ui/core/CardContent";
import Button  from "@material-ui/core/Button";
import Card  from "@material-ui/core/Card";
import Typography  from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
export default function DisplaySubjects({ folder  ,mdWidth}) {
  if (folder.hasNestedFolder) {
    console.log("fuck", folder.nestedFolder.files);
  }
  return (
    <Grid item xs={12} md={mdWidth} key={folder.id}>
      {folder.hasNestedFolder ? (
        <Card>
          <CardContent>
            <Typography variant="h6" align="center" gutterBottom>
              {folder.name}
            </Typography>
            <Grid item container spacing={4}>
              {folder.nestedFolder.files !== undefined &&
                folder.nestedFolder.files.map(folder => (
                  <Grid key={folder.id} item xs container>
                    <Button
                    size="small"
                      component={Link}
                      to={`/subject/${folder.name}/${folder.id}`}
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      {folder.name}
                    </Button>
                  </Grid>
                ))}
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent>
            <Button
            size="medium"
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
      )}
    </Grid>
  );
}
