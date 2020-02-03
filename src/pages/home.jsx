import React, { Component } from "react";
import { Typography, Paper, Tabs, Tab, AppBar, Grid } from "@material-ui/core";
import MainSlide from "./../components/MainSlide";

class Home extends Component {
  state = {
    name: "2nd - Electrical",
    content: [
      {
        outerTitle: "lectures",
        innerTitle: "Dr : m.Hammad",
        folderID: [
          {
            title: "Lec1",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec2",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec3",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec4",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec5",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec6",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec7",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec8",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec9",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec10",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Lec11",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          }
        ]
      },
      {
        outerTitle: "Notes",
        innerTitle: "Eng : mo salah",
        folderID: "https://betengan"
      },
      {
        outerTitle: "videos",
        innerTitle: "recorded lectures",
        folderID: "https://betengan"
      },
      {
        outerTitle: "revition",
        innerTitle: "revisions",
        folderID: "https://betengan"
      },
      {
        outerTitle: "summary",
        innerTitle: "Eng : mo salah",
        folderID: "https://betengan"
      }
    ],
    PrimarySliderSelectedIndex: 0
  };

  handleTabClick = inp => {
    this.setState({ PrimarySliderSelectedIndex: inp });
  };
  render() {
    return (
      <Grid container alignContent="center" justify="center">
        <Grid item sm={12}>
          <Typography variant="h3" align="center">
            {this.state.name}
          </Typography>
        </Grid>

        <MainSlide
          content={this.state.content}
          selectedIndex={this.state.PrimarySliderSelectedIndex}
          handleClick={this.handleTabClick}
        />

        <AppBar
          position="static"
          centered="true"
          color="primary"
          className="addmargin"
        >
          <Tabs
            value={1}
            textColor="inherit"
            variant="scrollable"
            scrollButtons="on"
            justify="center"
          >
            {this.state.content[0].folderID.map((content, N) => (
              <Tab
                value={N}
                key={N}
                label={content.title}
                onClick={() => this.handleTabClick(content.title)}
              />
            ))}
          </Tabs>
        </AppBar>
      </Grid>
    );
  }
}

export default Home;
