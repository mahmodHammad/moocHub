import React, { Component } from "react";

import getFiles from "../../helper/getfiles";
import loadApi from "../../helper/loadApi";
import ContentDisplayer from "../../core/Content/ContentDisplayer";

import themes from "../../config/theme";

class Home extends Component {
  state = {
    subject: {},
    content: false,
    PrimarySliderSelectedIndex: false,
    loading: false,
    divided: [],
    index: 0,
  };

  //////// get files after clicking on prime slide  ////////
  handlePrimeTabClick = (index) => {
    this.setState({ loading: true });
    this.state.content[index] !== undefined &&
    this.state.content[index].value === false
      ? getFiles(this.state.content[index].id, "pdf").then(
          (theactualContent) => {
            let [content] = [this.state.content];
            content[index].value = theactualContent.files;
            this.setState({ content, loading: false });
          }
        )
      : this.setState({ loading: false });

    this.setState({
      PrimarySliderSelectedIndex: index,
    });
  };

  setLoading = (loading) => {
    this.setState({ loading });
  };

  loadContent = (subjects) => {
    let realcontent = subjects.files.map(({ name, id }) => {
      const value = false;
      return { name, id, value };
    });
    this.setState({ content: realcontent, loading: false });
    this.handlePrimeTabClick(0);
  };

  loadSubject = (id) => {
    this.setState({ loading: true, PrimarySliderSelectedIndex: false });
    loadApi().then(() =>
      getFiles(id, "folder")
        .then((subjectContent) => {
          this.loadContent(subjectContent);
        })
        .catch((err) => console.log(err))
    );
  };

  componentDidMount() {
    const name = this.props.match.params.subjectName;
    let id = this.props.match.params.subjectId;
    const subject = { name, id };
    this.setState({ subject });

    let { divided, index } = this.props.location.state;
    if (divided === undefined) divided = [];
    // wil be the last selected instead of the first index
    else if (divided[0] !== undefined) id = divided[0].id;
    this.setState({ divided, index });
    this.loadSubject(id);

    console.log(this.props, "FJFJFJFJFJFJJFJ");
    // console.log(this.props.history.location.state,"hell is bad")
    this.props.changeTheme(
      undefined,
      themes[index][0],
      // "radial-gradient(ellipse at bottom,#9999a4,#303040)"
      // `radial-gradient(ellipse at bottom,${themes[index][3]},#333333)`
     `linear-gradient(90deg,#333333 -150%, ${themes[index][3]}, #333333 250%)`
    );
  }

  render() {
    //////// Destructure from state ////////
    const {
      content,
      subject,
      PrimarySliderSelectedIndex,
      loading,
      divided,
      index,
    } = this.state;
    const { todo, addToTodo, removeFromTodo } = this.props;
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
        subjectIndex={index}
      />
    );
  }
}

export default Home;
