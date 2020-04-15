//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplayCommunity from "./components/DisplayCommunity";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Redirect } from "react-router-dom";

export default function home({ communities, ChooseCommumity }) {
  // to make user see his subjects directly withou choosing his community again
  if (window.localStorage.getItem("community")) {
    return <Redirect to={window.localStorage.getItem("community")} />;
  }

  return (
    <div className="communityCont">
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className="communityLabel">
            <Typography variant="h4" align="center" color="primary">
              Faculty Of Engineering
            </Typography>
            <Typography variant="h6" align="center" color="secondary">
              Ain Shams University
            </Typography>
          </div>
        </Grid>
        <Grid container item xs={8} md={6} spacing={4} className="communiities">
          {communities.map((community, N) => {
            return (
              <DisplayCommunity
                ChooseCommumity={ChooseCommumity}
                community={community}
                key={community.id || N}
                mdWidth={
                  communities.length % 2 === 1
                    ? N === communities.length - 1
                      ? 12
                      : 6
                    : 6
                }
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
