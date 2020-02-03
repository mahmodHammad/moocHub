import React, { Component } from "react";
import { Typography, Paper, Tabs, Tab, AppBar, Grid } from "@material-ui/core";
import MainSlide from "./../components/MainSlide";
import SecondarySlide from "./../components/SecondarySlide";

class Home extends Component {
  state = {
    name: "2nd - Electrical",
    content: [
      {
        outerTitle: "lectures",
        innerTitle: "Dr : m.Hammad",
        folderID: "folderID"
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
    actualContent: [
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
    ],
    PrimarySliderSelectedIndex: 0,
    SecondarySliderSelectedIndex: 0
  };

  handlePrimeTabClick = index => {
    this.setState({ PrimarySliderSelectedIndex: index });
  };

  handleSecondaryTabClick = index => {
    this.setState({ SecondarySliderSelectedIndex: index });
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
          handleClick={this.handlePrimeTabClick}
        />
        <SecondarySlide
          content={this.state.actualContent}
          handleClick={this.handleSecondaryTabClick}
          selectedIndex={this.state.SecondarySliderSelectedIndex}
        />
      </Grid>
    );
  }
}

export default Home;
