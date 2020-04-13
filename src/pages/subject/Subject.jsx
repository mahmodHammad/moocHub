import React, { Component } from "react";

import getFiles from "../../helper/getfiles";
import loadApi from "../../helper/loadApi";
import ContentDisplayer from "../../core/Content/ContentDisplayer";

class Home extends Component {
  state = {
    subject: {},
    content: false,
    PrimarySliderSelectedIndex: false,
    loading: false
  };

  //////// get files after clicking on prime slide  ////////
  handlePrimeTabClick = index => {
    this.setState({ loading: true });
    this.state.content[index].value === false
      ? getFiles(this.state.content[index].id, "pdf").then(theactualContent => {
          let [content] = [this.state.content];
          content[index].value = theactualContent.files;
          this.setState({ content, loading: false });
        })
      : this.setState({ loading: false });

    this.setState({
      PrimarySliderSelectedIndex: index
    });
  };

  setLoading = loading => {
    this.setState({ loading });
  };

  loadContent = subjects => {
    let realcontent = subjects.files.map(({ name, id }) => {
      const value = false;
      return { name, id, value };
    });
    this.setState({ content: realcontent, loading: false });
  };

  componentDidMount() {
    const name = this.props.match.params.subjectName;
    const id = this.props.match.params.subjectId;
    const subject = { name, id };
    this.setState({ subject, loading: true });

    loadApi().then(() =>
      getFiles(id, "folder")
        .then(subjectContent => {
          this.loadContent(subjectContent);
        })
        .catch(() => alert("Can not load content , try againg later"))
    );
  }

  render() {
    //////// Destructure from state ////////
    const {
      content,
      subject,
      PrimarySliderSelectedIndex,
      loading
    } = this.state;
    const { todo, addToTodo, removeFromTodo } = this.props;
    console.log("content----->", content);
    console.log("subject----->", subject);
    return (
      <ContentDisplayer
        subject={subject}
        content={content}
        PrimarySliderSelectedIndex={PrimarySliderSelectedIndex}
        handlePrimeTabClick={this.handlePrimeTabClick}
        todo={todo}
        addToTodo={addToTodo}
        removeFromTodo={removeFromTodo}
        isVideo={false}
        loading={loading}
        setLoading={this.setLoading}
      />
    );
  }
}

export default Home;
