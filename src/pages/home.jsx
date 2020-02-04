import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MainSlide from "./../components/MainSlide";
import SecondarySlide from "./../components/SecondarySlide";
import DisplayCard from "./../components/DisplayCard";
import Pdf from "./../components/PdfIframe";
import getFiles from "../helper/initGapi";
import DisplayComunityName from "./../components/DisplayComunityName";

const API_KEY = "AIzaSyBaYqW1LaG3Oua5aT40u6AqmaasNVPkwe0";

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
        folderid: "1Qx5RE8ZQYeW9wcdO1Xik5XA2eGTFQIJl",
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
        folderid: "1yxrZOSGLu6kagK0OlgFrjnYpYmRjK3_f",
        actualContent: false
      },
      {
        outerTitle: "summary",
        innerTitle: "Eng : mo salah",
        folderid: "1tUi-QNgQYCX7XXc30B0ie8_DPBp8uiRe",
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
        content[index].actualContent = theactualContent.files;
        this.setState({ content });
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
    const {
      content,
      name,
      PrimarySliderSelectedIndex,
      SecondarySliderSelectedIndex
    } = this.state;
    return (
      <Grid container alignContent="center" justify="center">
        <DisplayComunityName name={name} />

        <MainSlide
          content={content}
          selectedIndex={PrimarySliderSelectedIndex}
          handleClick={this.handlePrimeTabClick}
        />

        {PrimarySliderSelectedIndex !== false &&
          content[PrimarySliderSelectedIndex].actualContent !== false && (
            <SecondarySlide
              content={content[PrimarySliderSelectedIndex].actualContent}
              handleClick={this.handleSecondaryTabClick}
              selectedIndex={SecondarySliderSelectedIndex}
            />
          )}

        {SecondarySliderSelectedIndex !== false && (
          <React.Fragment>
            <DisplayCard
              content={
                content[this.state.PrimarySliderSelectedIndex].actualContent[
                  SecondarySliderSelectedIndex
                ].name
              }
            />
            <Pdf
              fileId={
                content[this.state.PrimarySliderSelectedIndex].actualContent[
                  SecondarySliderSelectedIndex
                ].id
              }
            />
          </React.Fragment>
        )}
      </Grid>
    );
  }
}

export default Home;
