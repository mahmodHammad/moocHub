import React, { Component } from "react";

import getFiles from "../../helper/getfiles";
import loadApi from "../../helper/loadApi";
import ContentDisplayer from "../../core/Content/ContentDisplayer";

class Home extends Component {
  state = {
    subject: {},
    content: false,
    PrimarySliderSelectedIndex: false,
    loading: false,
    divided: []
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
    this.handlePrimeTabClick(0)
  };

  loadSubject = id => {
    this.setState({ loading: true ,PrimarySliderSelectedIndex:false });
    loadApi().then(() =>
      getFiles(id, "folder")
        .then(subjectContent => {
          this.loadContent(subjectContent);
        })
        .catch(() => alert("Can not load content , try againg later"))
    );
  };
  
  componentDidMount() {
    const name = this.props.match.params.subjectName;
    let id = this.props.match.params.subjectId;
    const subject = { name, id };
    this.setState({ subject });
    
    let divided = this.props.location.state.divided;
    if (divided === undefined) divided = [];
    // wil be the last selected instead of the first index
    else if (divided[0]!==undefined)id = divided[0].id;
    this.setState({ divided });
    this.loadSubject(id);
  }

  render() {
    //////// Destructure from state ////////
    const {
      content,
      subject,
      PrimarySliderSelectedIndex,
      loading,
      divided
    } = this.state;
    const { todo, addToTodo, removeFromTodo } = this.props;
    console.log("Subject",this.state)
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
        divided={divided}
        loadSubject={this.loadSubject}
      />
    );
  }
}

export default Home;
