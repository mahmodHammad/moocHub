////////  ////////
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MainSlide from "../components/MainSlide";
import SecondarySlide from "../components/SecondarySlide";
import DisplayCard from "../components/DisplayCard";
import Pdf from "../components/PdfIframe";
import getFiles from "../helper/initGapi";
import DisplayComunityName from "../components/DisplayComunityName";
import API_KEY from "../config/gapi";

class Home extends Component {
  state = {
    name: "Electronics",
    content: [
      {
        outerTitle: "lectures",
        innerTitle: "Dr : m.Hammad",
        folderid: "1_UrCVIvf7dnpoOOxnB2w7GPB_1MK0DDZ",
        actualContent: false
      },
      {
        outerTitle: "Notes",
        innerTitle: "Eng : mo salah",
        folderid: "1AXKzBIZkfckxjTm-t3d_xd-bBbeRRYL7",
        actualContent: false
      },
      {
        outerTitle: "videos",
        innerTitle: "recorded lectures",
        folderid: "1ARclePJ1V9ALUKAJLDUgNYeI0EHrDYbe",
        actualContent: false
      },
      {
        outerTitle: "revition",
        innerTitle: "revisions",
        folderid: "19d6zvFvjnlLc8vW0mVVACVMhHpi7cBBV",
        actualContent: false
      },
      {
        outerTitle: "summary",
        innerTitle: "Eng : mo salah",
        folderid: "0B0Bgx1x0TeJiMVJZSnRTcDU0cm8",
        actualContent: false
      }
    ],
    PrimarySliderSelectedIndex: false,
    SecondarySliderSelectedIndex: false
  };

  //////// get files after clicking on prime slide  ////////
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

  render() {
    //////// Destructure from state ////////
    const {
      content,
      name,
      PrimarySliderSelectedIndex,
      SecondarySliderSelectedIndex
    } = this.state;
    return (
      <Grid container alignContent="center" justify="center">
        {/******  display subject name  ******/}

        <Grid item sm={12}>
          <DisplayComunityName name={name} />
        </Grid>

        {/******  display MainSlider   ******/}


          <Grid item xs={11}>
            <MainSlide
              content={content}
              selectedIndex={PrimarySliderSelectedIndex}
              handleClick={this.handlePrimeTabClick}
            />
          </Grid>
        {/******  display Secondary slider depending on the selected prime  ******/}

        <Grid item xs={12}>
          {PrimarySliderSelectedIndex !== false &&
            content[PrimarySliderSelectedIndex].actualContent !== false && (
              <SecondarySlide
                content={content[PrimarySliderSelectedIndex].actualContent}
                handleClick={this.handleSecondaryTabClick}
                selectedIndex={SecondarySliderSelectedIndex}
              />
            )}
        </Grid>

        {/******  display content depending on the selected secondary  ******/}

        {SecondarySliderSelectedIndex !== false && (
          <React.Fragment>
            {/* <DisplayCard
              content={
                content[this.state.PrimarySliderSelectedIndex].actualContent[
                  SecondarySliderSelectedIndex
                ].name
              }
            /> */}
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
