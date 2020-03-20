import React, { Component } from "react";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import Button from "@material-ui/core/Button";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

export default class FullScreen extends Component {
  handleClickFullscreen = () => {
    // this.props.handlePin(false);
    screenfull.toggle(this.props.vidRef);
    // will only work for phones or tablets
    window.screen.orientation.lock("landscape-primary");
  };
  handleExitFullScrean = () => {
    // this.props.handlePin(true);
    screenfull.toggle(this.props.vidRef);
    screenfull.exit(findDOMNode(this.props.player));
    window.screen.orientation.lock("portrait");
  };

  render() {
    return (
      <Button size="small" aria-haspopup="true">
        {screenfull.isFullscreen ? (
          <FullscreenExitIcon onClick={this.handleExitFullScrean} />
        ) : (
          <FullscreenIcon onClick={this.handleClickFullscreen} />
        )}
      </Button>
    );
  }
}
