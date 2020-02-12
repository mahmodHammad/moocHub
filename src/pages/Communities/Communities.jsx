//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplayCommunity from "./components/DisplayCommunity";
import Typography  from "@material-ui/core/Typography";
import Grid  from "@material-ui/core/Grid";
import React from "react";
import { Redirect } from 'react-router-dom';

export default function home({communities }) {
  if(window.localStorage.getItem("community")){
    return <Redirect to={ window.localStorage.getItem("community")}/>
  }
    return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" color="primary">
          Faculty Of Engineering 
        </Typography>
        <Typography variant="h6" align="center" >
          Ain Shams University 
        </Typography>
      </Grid>

      <Grid container item xs={8} md={10} spacing={5}>
        {communities.map((community, N) => {
          return <DisplayCommunity community={community} key={community.id || N} mdWidth={communities.length%2===1?(N === communities.length-1 ?12:6):6} />;
        })}
      </Grid>
    </Grid>
  );
}