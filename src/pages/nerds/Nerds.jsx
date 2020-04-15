import React, { Component } from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
            <Typography variant="h5" color="primary" gutterBottom>
              Study List Is Empty !
            </Typography>
            <Typography variant="h6" color="secondary" >
              you should add content first using the
              <AddCircleIcon size="large" color="primary" /> icon ,then come
              again to see it here
            </Typography>
          </div>
        )}
      </div>
    );
  }
}
