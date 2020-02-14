////////  ////////
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MainSlide from "./components/MainSlide";
import SecondarySlide from "./components/SecondarySlide";
import Pdf from "../../components/PdfIframe";
import getFiles from "../../helper/getfiles";
import DisplayComunityName from "./components/DisplayComunityName";
import loadApi from "../../helper/loadApi"

class Home extends Component {
  state = {
    subjectName: "",
    folderid: false,
    content: false,
    PrimarySliderSelectedIndex: false,
    SecondarySliderSelectedIndex: false
  };

  //////// get files after clicking on prime slide  ////////
  handlePrimeTabClick = index => {
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

    loadApi().then(() =>
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
      PrimarySliderSelectedIndex
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
                removeFromTodo={this.props.removeFromTodo}
                addToTodo={this.props.addToTodo}
              />
            )}
        </Grid>
      </Grid>
    );
  }
}

export default Home;
