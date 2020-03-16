import React, { Component, useState } from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default class Nerds extends Component {
  state = {
    opened: [],
    At: 0,
    VideoIndex: 0,
  };

  handleOpendContent = opened => {
    this.setState({ opened });
  };

  handleAt = At => {
    this.setState({ At });
  };


  loadVideo = url => {
    this.setState({ url });
  };

  
  render() {
    const { todo, removeFromTodo } = this.props;
    const { opened, At } = this.state;
    
    return (
      <div>
        <Scroll opened={opened} At={At} setAt={this.handleAt} />
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
