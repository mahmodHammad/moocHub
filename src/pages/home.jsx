import React, { Component } from "react";
import { Typography, Paper, Tabs, Tab, AppBar, Grid } from "@material-ui/core";
import MainSlide from "./../components/MainSlide";
import SecondarySlide from "./../components/SecondarySlide";
import DisplayCard from "./../components/DisplayCard";
import Pdf from "./../components/PdfIframe";
import getFiles from "../helper/initGapi";

var API_KEY = "AIzaSyBaYqW1LaG3Oua5aT40u6AqmaasNVPkwe0";

class Home extends Component {
  state = {
    gapiReady:false,
    name: "2nd - Electrical",
    content: [
      {
        outerTitle: "lectures",
        innerTitle: "Dr : m.Hammad",
        folderid:"1f_ZUyvVEZ1JxpXkJIFHwbCBrSjyoRTSt",
        actualContent: false
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

  loadApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.addEventListener("load", () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("drive", "v3", () => {
          this.setState({ gapiReady: true });
        });
      });
    });
    document.body.appendChild(script);
  };



  handlePrimeTabClick = index => {

    getFiles(this.state.content[index].folderid).then((e)=>console.log(e))
    // actualContent ===false ? make http request to get actual content
    // rqueast take some time ...
    // after objain ...  set state actual content

    this.setState({
      PrimarySliderSelectedIndex: index,
      SecondarySliderSelectedIndex: false

    });
  };

  handleSecondaryTabClick = index => {
    this.setState({ SecondarySliderSelectedIndex: index });
  };

  componentDidMount() {
    this.loadApi()
  }
  
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

        {/* {this.state.PrimarySliderSelectedIndex !== false && (
          <SecondarySlide
            content={this.state.content[this.state.PrimarySliderSelectedIndex]}
            handleClick={this.handleSecondaryTabClick}
            selectedIndex={this.state.SecondarySliderSelectedIndex}
          />
        )} */}
{/* 
    {this.state.SecondarySliderSelectedIndex !== false && (
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

{/* <Gapi/> */}
{this.state.gapiReady && <h1>GAPI is loaded and ready to use.</h1>}

      </Grid>
    );
  }
}

export default Home;
