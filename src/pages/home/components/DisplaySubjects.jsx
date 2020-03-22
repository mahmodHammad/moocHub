import React from "react";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
export default function DisplaySubjects({ folder, mdWidth }) {
  return (
    <Grid item xs={12} md={mdWidth} key={folder.id}>

      <Card>
        <CardContent>
          <Typography variant="h6" align="center" color="primary" gutterBottom>
            {folder.name}
          </Typography>

      {/* subject is  DIVIDED */}
          {folder.isDivided ? (
            <React.Fragment>
              <Grid item container spacing={4}>
                {folder.divided.files !== undefined &&
                  folder.divided.files.map(folder => (
                    <Grid key={folder.id} item xs container>
                      <Button
                        size="small"
                        component={Link}
                        to={`/subject/${folder.name}/${folder.id}`}
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        <Typography color="inherit" variant="inherit">
                          {folder.name}
                        </Typography>
                      </Button>
                    </Grid>
                  ))}
              </Grid>
            </React.Fragment>
          ) : (
            // subject is NOT divided

            <React.Fragment>
              <Grid item container spacing={4} justify="center">
                <Grid
                  key={folder.id}
                  item
                  xs
                  container
                  justify="center"
                  alignItems="center"
                  spacing={5}
                  className="mt-5"
                >
                  <Grid item xs>
                    <Button
                      size="small"
                      component={Link}
                      to={`/subject/${folder.name}/${folder.id}`}
                      fullWidth
                      variant="contained"
                      color="inherit"
                    >
                      <Typography color="inherit" variant="inherit">
                        drive
                      </Typography>
                    </Button>
                  </Grid>
                  {/* XXXXXXXXXXXXXXXXXXXXX if it has video >> create a button for it XXXXXXXXXXXXXXXXXXXXX */}
                  {folder.video !== false && (
                    <Grid xs>
                      <Button
                        size="small"
                        component={Link}
                        to={{
                          pathname: `/videos/${folder.name}/${folder.id}`,
                          state: { videos: folder.video.value }
                        }}
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        <Typography color="inherit" variant="inherit">
                          Videos
                        </Typography>
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
