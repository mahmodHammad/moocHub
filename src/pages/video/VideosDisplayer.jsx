import React, { Component } from "react";
import Video from "../../core/Video/Video";
import Button from "@material-ui/core/Button";
import ContentDisplayer from "../../core/Content/ContentDisplayer";

export default class VideosDisplayer extends Component {
  state = {
    subject: {},
    PrimarySliderSelectedIndex:false,
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
    const subject = { name, id };
    this.setState({ subject });

    const videos = this.props.location.state.videos;
    console.log("video ---->",this.props.location.state.videos);
    this.setState({ content:videos });
  }

  render() {
    console.log("frin state", this.state);
    const {  content ,subject ,PrimarySliderSelectedIndex} = this.state;
    const {  todo ,addToTodo ,removeFromTodo ,handleVideoPin   } = this.props;
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