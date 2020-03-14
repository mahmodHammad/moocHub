import React, { Component } from "react";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import Button from "@material-ui/core/Button";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

export default class FullScreen extends Component {
  handleClickFullscreen = () => {
    screenfull.toggle(this.props.vidRef);
    // will only work for phones or tablets
    window.screen.orientation.lock("landscape-primary");
  };
  handleExitFullScrean = () => {
    screenfull.exit(findDOMNode(this.props.player));
    window.screen.orientation.lock("portrait");
  };

  render() {
    return (
      <Button
        size="small"
        onClick={this.handleClickFullscreen}
        aria-haspopup="true"
      >
        {screenfull.isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </Button>
    );
  }
}
