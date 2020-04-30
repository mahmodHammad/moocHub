//////// take array of subjects -> displaythem throgh DisplayObject Component  ////////
import DisplaySubjects from "./components/DisplaySubjects";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import { Swipeable } from "react-swipeable";
import { Redirect } from "react-router-dom";

import content from "../../config/subjects";

// XXX refactor it to a function component XXX
export default class home extends Component {
  state = {
    swiped: 0
  };
  componentDidMount() {
    this.props.changeTheme(
      "#333",
      "#1e88e5",
      "radial-gradient(ellipse at top,#fff,rgb(255, 255, 255),#ddd)"
    );
  }

  swip = val => {
    this.setState({ swiped: val });
  };

  render() {
    const { swiped } = this.state;
    if (swiped === 1) {
      return <Redirect to="/nerds" />;
    }

    return (
      <Swipeable className="App" onSwipedLeft={() => this.swip(1)}>
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
                    changeTheme={this.props.changeTheme}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Swipeable>
    );
  }
}
