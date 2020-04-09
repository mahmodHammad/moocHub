import React from "react";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import DisplaySubjectButton from "./DisplaySubjectButton";
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
            <Grid item container spacing={4}>
              {folder.divided.files !== undefined &&
                folder.divided.files.map((folder) => (
                  <Grid key={folder.id} item xs container>
                    <Grid item xs={12}>
                      <Typography align="center" color="primary" gutterBottom>
                        {folder.name}
                      </Typography>
                      <DisplaySubjectButton
                        folder={folder}
                        destination={"subject"}
                        label={"drive"}
                      />
                      {folder.video !== false && (
                        <DisplaySubjectButton
                          folder={folder}
                          destination={"videos"}
                          label={"videos"}
                        />
                      )}
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          ) : (
            // subject is NOT divided
            <Grid
              key={folder.id}
              item
              container
              alignItems="center"
              justify="center"
              spacing={2}
              className="mt-5"
            >
              <DisplaySubjectButton
                folder={folder}
                destination={"subject"}
                label={"drive"}
              />

              {/* XXXXXXXXXXXXXXXXXXXXX if it has video >> create a button for it XXXXXXXXXXXXXXXXXXXXX */}
              {folder.video !== false && (
                <DisplaySubjectButton
                  folder={folder}
                  destination={"videos"}
                  label={"videos"}
                />
              )}
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
