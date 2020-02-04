import React, { Component } from "react";
import { Typography, Paper, Tabs, Tab, AppBar, Grid } from "@material-ui/core";
import MainSlide from "./../components/MainSlide";
import SecondarySlide from "./../components/SecondarySlide";
import DisplayCard from "./../components/DisplayCard";
import Pdf from "./../components/PdfIframe";
class Home extends Component {
  state = {
    name: "2nd - Electrical",
    content: [
      {
        outerTitle: "lectures",
        innerTitle: "Dr : m.Hammad",
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
        ]
      },
      {
        outerTitle: "Notes",
        innerTitle: "Eng : mo salah",
        actualContent: [
          {
            title: "Note1",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note2",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note3",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note4",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note5",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note6",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note7",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note8",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note9",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note10",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Note11",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          }
        ]
      },
      {
        outerTitle: "videos",
        innerTitle: "recorded lectures",
        actualContent: [
          {
            title: "Lectures",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Section",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "Islam Magdy",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          }
        ]
      },
      {
        outerTitle: "revition",
        innerTitle: "revisions",
        actualContent: [
          {
            title: "rev 1",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "rev2",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "rev3",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          }
        ]
      },
      {
        outerTitle: "summary",
        innerTitle: "Eng : mo salah",
        actualContent: [
          {
            title: "fuck 1",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "hello ",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          },
          {
            title: "salam ya balad el kalam",
            pdf:
              "https://drive.google.com/file/d/10BZCBv5srn366ho6Qb1i55rQ8PVqQBro/view"
          }
        ]
      }
    ],
    PrimarySliderSelectedIndex: false,
    SecondarySliderSelectedIndex: false
  };

  handlePrimeTabClick = index => {
    this.setState({
      PrimarySliderSelectedIndex: index,
      SecondarySliderSelectedIndex: false
    });
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
        {this.state.PrimarySliderSelectedIndex !== false && (
          <SecondarySlide
            content={this.state.content[this.state.PrimarySliderSelectedIndex]}
            handleClick={this.handleSecondaryTabClick}
            selectedIndex={this.state.SecondarySliderSelectedIndex}
          />
        )}
    {/* {this.state.SecondarySliderSelectedIndex !== false && (
        <React.Fragment>
        <DisplayCard
          content={
            this.state.content[this.state.PrimarySliderSelectedIndex]
              .actualContent[this.state.SecondarySliderSelectedIndex]
          }
        />
        <Pdf fileId="10BZCBv5srn366ho6Qb1i55rQ8PVqQBro" />
        </React.Fragment>
        )} */}


      </Grid>
    );
  }
}

export default Home;
