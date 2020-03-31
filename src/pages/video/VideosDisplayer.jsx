import React, { Component } from "react";
import ContentDisplayer from "../../core/Content/ContentDisplayer";

export default class VideosDisplayer extends Component {
  state = {
    subject: {},
    PrimarySliderSelectedIndex: false,
    content: false,
    selectedVideo: false
  };

  handlePrimeTabClick = index => {
    this.setState({
      PrimarySliderSelectedIndex: index
    });
  };

  componentDidMount() {
    const name = this.props.match.params.subjectName;
    const id = this.props.match.params.subjectId;
    // take this id and make an HTTTP request to get data

    const subject = { name, id };
    this.setState({ subject });

    // XXXXXXXXXXXXXXXXXX this line will be deleted
    const videos = this.props.location.state.videos;
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    
    this.setState({ content: videos });
  }

  render() {
    const { content, subject, PrimarySliderSelectedIndex } = this.state;
    const { todo, addToTodo, removeFromTodo, handleVideoPin } = this.props;
    return (
      <div>
        <ContentDisplayer
          subject={subject}
          content={content}
          PrimarySliderSelectedIndex={PrimarySliderSelectedIndex}
          handlePrimeTabClick={this.handlePrimeTabClick}
          todo={todo}
          addToTodo={addToTodo}
          removeFromTodo={removeFromTodo}
          isVideo={true}
          handleVideoPin={handleVideoPin}
        />
      </div>
    );
  }
}
