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
    gapiReady: false,
    name: "2nd - Electrical",
    content: [
      {
        outerTitle: "lectures",
        innerTitle: "Dr : m.Hammad",
        folderid: "1f_ZUyvVEZ1JxpXkJIFHwbCBrSjyoRTSt",
        actualContent: false
      },
      {
        outerTitle: "Notes",
        innerTitle: "Eng : mo salah",
        folderid: "1f_ZUyvVEZ1JxpXkJIFHwbCBrSjyoRTSt",
        actualContent: false
      },
      {
        outerTitle: "videos",
        innerTitle: "recorded lectures",
        folderid: "1f_ZUyvVEZ1JxpXkJIFHwbCBrSjyoRTSt",
        actualContent: false
      },
      {
        outerTitle: "revition",
        innerTitle: "revisions",
        folderid: "1f_ZUyvVEZ1JxpXkJIFHwbCBrSjyoRTSt",
        actualContent: false
      },
      {
        outerTitle: "summary",
        innerTitle: "Eng : mo salah",
        folderid: "1f_ZUyvVEZ1JxpXkJIFHwbCBrSjyoRTSt",
        actualContent: false
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
    // actualContent ===false ? make http request to get actual content
    // rqueast take some time ...
    // after objain ...  set state actual content

    this.state.content[index].actualContent === false &&
      getFiles(this.state.content[index].folderid).then(theactualContent => {
        let [content] = [this.state.content];
        console.log(content)
        // console.log("actueal" ,actualContent.files)
        content[index].actualContent=theactualContent.files

        console.log("hhhhhhhhh",content)
        this.setState({ content });
        
        console.log(this.state.content[index]);
      });

    this.setState({
      PrimarySliderSelectedIndex: index,
      SecondarySliderSelectedIndex: false
    });
  };

  handleSecondaryTabClick = index => {
    this.setState({ SecondarySliderSelectedIndex: index });
  };

  componentDidMount() {
    this.loadApi();
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

        {this.state.PrimarySliderSelectedIndex !== false &&
          this.state.content[this.state.PrimarySliderSelectedIndex]
            .actualContent !== false && (
            <SecondarySlide
              content={
                this.state.content[this.state.PrimarySliderSelectedIndex]
                  .actualContent
              }
              handleClick={this.handleSecondaryTabClick}
              selectedIndex={this.state.SecondarySliderSelectedIndex}
            />
          )}
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
