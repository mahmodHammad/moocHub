//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplaySubjects from "./components/DisplaySubjects";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

import videos from "../../core/Video/vidData";
import content from "../../config/subjects";

export default class home extends Component {
  render() {
    const communityName = this.props.match.params.subjectName;
    console.log(content);

    return (
      <div className="homePage">
        {/* <div className="communityLabel">
          <Typography variant="h5" color="primary" align="center">
            {communityName}
          </Typography>
        </div> */}
          <Grid
            container
            align="center"
            justify="center"
            direction="column"
          >
            <Grid container item xs={11} md={10} justify="center">
              {content.map((folder, N) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={
                      content.length % 2 === 1
                        ? N === content.length - 1
                          ? 12
                          : 6
                        : 6
                    }
                    key={folder.id}
                  >
                    <DisplaySubjects
                      folder={folder}
                      key={folder.id || N}
                      index={N}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
      </div>
    );
  }
}
