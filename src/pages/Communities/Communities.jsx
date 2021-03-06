//  this page needs some styling 
//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplayCommunity from "./components/DisplayCommunity";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";


const useStyles = makeStyles({
  root: {
   minHeight:"calc(100vh - 48px)"
  },
  community:{
    padding: "55px 0 30px "
  }
  });


export default function Community({ communities, ChooseCommumity }) {
  // to make user see his subjects directly withou choosing his community again
  const classes = useStyles();
  if (window.localStorage.getItem("community")) {
    return <Redirect to={window.localStorage.getItem("community")} />;
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className={classes.community}>
            <Typography variant="h4" align="center" color="primary">
              Faculty Of Engineering
            </Typography>
            <Typography gutterBottom variant="h6" align="center" color="secondary">
              Ain Shams University
            </Typography>
          </div>
          <Typography gutterBottom variant="body1" align="center" color="inherit">
            This page will appear only <b> for the first time</b>
          </Typography>
          <Typography gutterBottom variant="body2" align="center" color="primary">
            Your Home page will be the department that you will <b> select</b>
          </Typography>
          <Typography gutterBottom variant="subtitle2" align="center" color="primary">
          You can <b>change</b> the default department later from the sidebar
        </Typography>     
        <Typography  variant="subtitle2" align="center" color="primary">
        the <FormatQuoteIcon className="iconPos"/> Icon in the navbar is for the research page
        </Typography>   
        <Typography gutterBottom variant="subtitle2" align="center" color="primary">
        the <b><i>W</i></b> Icon in the navbar is for wikipedia page
        </Typography>  
        <Typography gutterBottom variant="body1" align="center" color="primary">
        <b>نسألكم الدعاء </b>
        </Typography>
        <br/>
        <br/>
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
