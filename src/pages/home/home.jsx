//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplaySubjects from "./components/DisplaySubjects";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

import content from "../../config/subjects";

export default class home extends Component {
  render() {
    return (
      <div className="App">
        <Grid container align="center" justify="center" direction="column">
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
