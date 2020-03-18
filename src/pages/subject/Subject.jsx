////////  ////////
import React, { Component } from "react";
import MainSlide from "../../core/Content/components/MainSlide";
import SecondarySlide from "../../core/Content/components/SecondarySlide";
import getFiles from "../../helper/getfiles";
import loadApi from "../../helper/loadApi";
import Typography from "@material-ui/core/Typography";
import ContentDisplayer from "../../core/Content/ContentDisplayer"
class Home extends Component {
  state = {
    subject: {},
    content: false,
    PrimarySliderSelectedIndex: false,
    SecondarySliderSelectedIndex: false
  };

  //////// get files after clicking on prime slide  ////////
  handlePrimeTabClick = index => {
    this.state.content[index].value === false &&
      getFiles(this.state.content[index].id, "pdf").then(theactualContent => {
        let [content] = [this.state.content];
        content[index].value = theactualContent.files;
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
      const value = false;
      return { name, id, value };
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
    const { todo, addToTodo, removeFromTodo } = this.props;
    console.log("content----->", content);
    console.log("subject----->", subject);
    return (
      <div>
       
        <ContentDisplayer subject={subject} content={content}  PrimarySliderSelectedIndex={PrimarySliderSelectedIndex} handlePrimeTabClick={this.handlePrimeTabClick} todo={todo}  addToTodo={addToTodo} removeFromTodo={removeFromTodo}/>
        
      </div>
    );
  }
}

export default Home;
