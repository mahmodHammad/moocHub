import React, { Component, useState } from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";
import Typography from "@material-ui/core/Typography";
import Video from "../../core/Video/Video";
import videoContent from "../../core/Video/vidData";
import Button from "@material-ui/core/Button";

export default class Nerds extends Component {
  state = {
    opened: [],
    At: 0,
    VideoIndex: 0,
    url: ""
  };

  handleOpendContent = opened => {
    this.setState({ opened });
  };

  handleAt = At => {
    this.setState({ At });
  };

  handleChangeVideoIndex = VideoIndex => {
    this.setState({ VideoIndex });
    this.loadVideo(videoContent[VideoIndex].url);
  };

  loadVideo = url => {
    this.setState({ url });
  };

  renderLoadButton = (url, label, index) => {
    return (
      <div className="content-buttons" key={url}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.handleChangeVideoIndex(index)}
        >
          {label}
        </Button>
      </div>
    );
  };
  render() {
    const { todo, removeFromTodo } = this.props;
    const { opened, At, VideoIndex } = this.state;
    
    return (
      <div>
        <Scroll opened={opened} At={At} setAt={this.handleAt} />
        <Video
          url={this.state.url}
          goto={videoContent[VideoIndex].goto}
          loadVideo={this.loadVideo}
        />

        {videoContent.map((video, index) => {
          return this.renderLoadButton(video.url, video.title, index);
        })}

        {todo.length ? (
          <DisplayContent
            todo={todo}
            removeFromTodo={removeFromTodo}
            setopened={this.handleOpendContent}
            opened={opened}
          />
        ) : (
          <div className="warning">
            <Typography variant="h5">Study List Is Empty ! </Typography>
            you should add content first then come again to see it here
          </div>
        )}
      </div>
    );
  }
}
