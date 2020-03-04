import "./App.css";
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import Duration from "./Duration";
import screenfull from "screenfull";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Container from "@material-ui/core/Container";

// icons
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
// import MenuOpenIcon from "@material-ui/icons/MenuOpen";
// import MenuIcon from "@material-ui/icons/Menu";
// import Forward10Icon from "@material-ui/icons/Forward10";
// import SpeedIcon from "@material-ui/icons/Speed";
// import FastForwardIcon from "@material-ui/icons/FastForward";
// import FastRewindIcon from "@material-ui/icons/FastRewind";
// import Replay10Icon from "@material-ui/icons/Replay10";
// import { duration } from "@material-ui/core";

class App extends Component {
  state = {
    content: [
      {
        title: "Sys section 1",
        url: "https://www.youtube.com/watch?v=WfhoJsI07o0?wmode=transparent",
        goto: [
          { title: "Problem1", sec: 880 },
          { title: "Problem2", sec: 2440 },
          { title: "Problem3", sec: 3257 },
          { title: "Problem4", sec: 3530 }
        ]
      },
      {
        title: "Logic-Lec 6",
        url: "https://www.youtube.com/watch?v=CCrtGgJ4NIM?wmode=transparent",
        goto: [
          { title: "half adder ", sec: 4645 },
          { title: "full adder ", sec: 4960 },
          { title: "subtractor", sec: 6360 },
          { title: "multiplier", sec: 7053 }
        ]
      },{
        title: "baqara",
        url: "https://www.youtube.com/watch?v=n4POhvaC2ws?wmode=transparent",
        goto: [  ]
      }
    ],
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  };

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
   
  };

  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null
      },
      () => this.load(url)
    );
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleSetPlaybackRate = value => {
    this.setState({ playbackRate: parseFloat(value) });
  };

  handlePlay = () => {
    this.setState({ playing: true });
  };

  handlePause = () => {
    this.setState({ playing: false });
  };

  handleSeekChange = (e, value) => {
    this.setState({ played: value / 100, seeking: true });
    this.player.seekTo(parseFloat((value / 100) * this.state.duration));
  };

  handleSeekMouseUp = e => {
    this.setState({ seeking: false });

    console.log("mouse up ", this.state.seeking);
  };

  handleProgress = state => {
    // console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleDuration = duration => {
    this.setState({ duration });
  };

  renderLoadButton = (url, label, goto) => {
    return (
      <div className="content-buttons" key={url}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.load(url)}
        >
          {label}
        </Button>
        <br />
        {goto.map(({ title, sec }) => (
          <Button
            key={sec}
            className="min"
            size="small"
            onMouseDown={() => this.handleGoTo(sec)}
            onMouseUp={this.handleSeekMouseUp}
            variant="outlined"
          >
            {title}
          </Button>
        ))}
        <br />
      </div>
    );
  };

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));

    // XXXXXXXXXXXXXX this should work XXXXXXXXXXXXXXXX
    window.screen.orientation.lock("landscape-primary");
  };
  convertTimeToSec(sec, min = 0, houre = 0) {
    return sec + min * 60 + houre * 60 * 60;
  }
  handleGoTo = sec => {
    this.setState({ played: sec / this.state.duration, seeking: true });
    this.player.seekTo(parseFloat(sec));
  };

  ref = player => {
    this.player = player;
  };

  componentDidMount() {
    this.load("https://www.youtube.com/watch?v=WfhoJsI07o0?wmode=transparent");
  }

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip
    } = this.state;

    return (
      <div className="app">
        <Container variant="fluid">
          <div className="player-wrapper">
            <ReactPlayer
              ref={this.ref}
              width="100%"
              height="100%"
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log("onReady")}
              onStart={() => console.log("onStart")}
              onPlay={this.handlePlay}
              onEnablePIP={this.handleEnablePIP}
              onDisablePIP={this.handleDisablePIP}
              onPause={this.handlePause}
              onBuffer={() => console.log("onBuffer")}
              onSeek={e => console.log("onSeek", e)}
              onEnded={this.handleEnded}
              onError={e => console.log("onError", e)}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}
            />
            <div className="options">
              <Button
                onClick={this.handlePlayPause}
                variant="contained"
                size="small"
              >
                {playing ? <PauseIcon /> : <PlayArrowIcon />}
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => this.handleSetPlaybackRate(1)}
              >
                1x
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => this.handleSetPlaybackRate(1.5)}
              >
                1.5x
              </Button>
              {/* <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => this.handleSetPlaybackRate(1.25)}
              >
                1.25x
              </Button> */}

              {/* <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => this.handleSetPlaybackRate(1.75)}
              >
                1.75x
              </Button> */}
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => this.handleSetPlaybackRate(2)}
              >
                2x
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={this.handleClickFullscreen}
              >
                <FullscreenIcon />
              </Button>
            </div>
            <Slider
              value={played * 100}
              onChange={this.handleSeekChange}
              onMouseUp={this.handleSeekMouseUp}
            />
          </div>
          {/* <progress max={1} value={loaded} /> */}
          <br />
          {this.state.content.map(video => {
            return this.renderLoadButton(video.url, video.title, video.goto);
          })}
          {/* {played.toFixed(3)} */}
          {/* duration>
          <span>
            <Duration seconds={duration} />
          </span> */}
          ~~~~played>
          <span>
            <Duration seconds={duration * played} />
          </span>
          {/* ~~~~remaining>
          <span>
            <Duration seconds={duration * (1 - played)} />
          </span> */}
        </Container>
      </div>
    );
  }
}

export default App;
