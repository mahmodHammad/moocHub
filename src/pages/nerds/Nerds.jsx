import React, { Component } from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";

export default class Nerds extends Component {
  state = {
    opened: [],
    At: 0,
    VideoIndex: 0
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
    let StateFromLink = this.props.location.state;
    return (
      <div>
        <Scroll opened={opened} At={At} setAt={this.handleAt} />
        <DisplayContent
          todo={todo}
          removeFromTodo={removeFromTodo}
          setopened={this.handleOpendContent}
          opened={opened}
          selected={StateFromLink}
        />
      </div>
    );
  }
}
