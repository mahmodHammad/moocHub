//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplaySubjects from "./components/DisplaySubjects";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
 

export default class home extends Component {



  render() {
    const name = this.props.match.params.subjectName;
    const { content } = this.props;

    return (
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {name}
          </Typography>
        </Grid>

        <Grid container item xs={11} md={10} spacing={4}>
          {content.map((folder, N) => {
            return (
              <DisplaySubjects
                folder={folder}
                key={folder.id || N}
                mdWidth={
                  content.length % 2 === 1 ? N === content.length - 1? 12: 6: 6
                  }
              />
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

