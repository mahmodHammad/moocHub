////////  ////////
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MainSlide from "../components/MainSlide";
import SecondarySlide from "../components/SecondarySlide";
import Pdf from "../components/PdfIframe";
import getFiles from "../helper/getfiles";
import DisplayComunityName from "../components/DisplayComunityName";
import API_KEY from "../config/gapi";

class Home extends Component {
  state = {
    subjectName: "",
    folderid: false,
    content: false,
    PrimarySliderSelectedIndex: false,
    SecondarySliderSelectedIndex: false
  };

  content = [
    {
      name: "Lectures",
      id: "0B0OtL1j7jam_U3haNXF4ZTA5UWM",
      actualContent: false
    },
    {
      name: "Sections",
      id: "0B0OtL1j7jam_OVp2dmpZYURUQjQ",
      actualContent: false
    }
  ];

  loadApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    return new Promise((resolve, reject) => {
      script.addEventListener("load", () => {
        window.gapi.load("client", () => {
          window.gapi.client.setApiKey(API_KEY);
          window.gapi.client.load("drive", "v3", () => {
            resolve();
            this.setState({ gapiReady: true });
          });
        });
      });
      document.body.appendChild(script);
    });
  };

  loadSubjects = subjects => {
    let content = [];
    subjects.map(s => content.push(s));
    this.setState({ content });
  };

  //////// get files after clicking on prime slide  ////////
  handlePrimeTabClick = index => {
    // actualContent ===false ? make http request to get actual content
    // rqueast take some time ...
    // after objain ...  set state actual content
    this.state.content[index].actualContent === false &&
      getFiles(this.state.content[index].id, "pdf").then(theactualContent => {
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

  loadContent = subjects => {
    let realcontent = subjects.files.map(({ name, id }) => {
      const actualContent = false;
      return { name, id, actualContent };
    });
    this.setState({ content: realcontent });
  };

  componentDidMount() {
    const subjectName = this.props.match.params.subjectName;
    const folderid = this.props.match.params.subjectId;

    this.setState({ subjectName, folderid });

    this.loadApi().then(() =>
      getFiles(folderid, "folder").then(folders => {
        this.loadContent(folders);
      })
    );
  }

  render() {
    //////// Destructure from state ////////
    const {
      content,
      subjectName,
      PrimarySliderSelectedIndex,
      SecondarySliderSelectedIndex
    } = this.state;
    return (
      <Grid container alignContent="center" justify="center">
        {/******  display subject name  ******/}

        <Grid item xs={12}>
          <DisplayComunityName name={subjectName} />
        </Grid>

        {/******  display MainSlider   ******/}

        {this.state.content !== false && (
          <Grid item xs={12} md={"auto"}>
            <MainSlide
              content={content}
              selectedIndex={PrimarySliderSelectedIndex}
              handleClick={this.handlePrimeTabClick}
            />
          </Grid>
        )}

        {/******  display Secondary slider depending on the selected prime  ******/}

        <Grid item xs={12}>
          {PrimarySliderSelectedIndex !== false &&
            content[PrimarySliderSelectedIndex].actualContent !== false && (
              <SecondarySlide
                parentName={content[PrimarySliderSelectedIndex].name}
                content={content[PrimarySliderSelectedIndex].actualContent}
                handleClick={this.handleSecondaryTabClick}
                selectedIndex={SecondarySliderSelectedIndex}
              />
            )}
        </Grid>

        {/******  display content depending on the selected secondary  ******/}

        {SecondarySliderSelectedIndex !== false && (
          <React.Fragment>
            <Pdf
              addToTodo={this.props.addToTodo}
              file={
                content[this.state.PrimarySliderSelectedIndex].actualContent[
                  SecondarySliderSelectedIndex
                ]
              }
            />
          </React.Fragment>
        )}
      </Grid>
    );
  }
}

export default Home;
