////////  ////////
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MainSlide from "./components/MainSlide";
import SecondarySlide from "./components/SecondarySlide";
import getFiles from "../../helper/getfiles";
import loadApi from "../../helper/loadApi";
import particlesParams from "../../config/particles";


import Particles from "react-particles-js";
import Typography from "@material-ui/core/Typography";

class Home extends Component {
  state = {
    subject: {},
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
    const name = this.props.match.params.subjectName;
    const id = this.props.match.params.subjectId;
    const subject = { name, id };
    this.setState({ subject });

    loadApi().then(() =>
      getFiles(id, "folder").then(subjectContent => {
        this.loadContent(subjectContent);
      })
    );
  }

  render() {
    //////// Destructure from state ////////
    const { content, subject, PrimarySliderSelectedIndex } = this.state;
    return (
      <div>
        <Particles className="particles" params={particlesParams} />
        <Typography variant="h5" align="center" className="subjectLabel">
          {subject.name}
        </Typography>
        <Grid container justify="center">
          {/******  display subject name  ******/}

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
                  subject={subject}
                  content={content[PrimarySliderSelectedIndex].actualContent}
                  removeFromTodo={this.props.removeFromTodo}
                  addToTodo={this.props.addToTodo}
                  todo={this.props.todo}
                />
              )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
