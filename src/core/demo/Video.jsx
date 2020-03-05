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
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
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
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";

class App extends Component {
  state = {
    content: [
      {
        title: "Sys section 1",
        url: "https://www.youtube.com/watch?v=WfhoJsI07o0?wmode=transparent",
        goto: [
          ["Problem1", 880],
          ["Problem2", 2440],
          ["Problem3", 3257],
          ["Problem4", 3530]
        ]
      },
      {
        title: "Logic-Lec 6",
        url: "https://www.youtube.com/watch?v=CCrtGgJ4NIM?wmode=transparent",
        goto: [
          ["half adder ", 4645],
          ["full adder ", 4960],
          ["subtractor", 6360],
          ["multiplier", 7053]
        ]
      },
      {
        title: "baqara",
        url: "https://www.youtube.com/watch?v=n4POhvaC2ws?wmode=transparent",
        goto: []
      }
    ],
    url: null,
    pip: false,
    playing: false,
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

        {this.renderContentButton(goto)}
      </div>
    );
  };

  renderContentButton = goto => {
    return goto.map(([title, sec]) => (
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
    ));
  };

  handleClickFullscreen = () => {
    // console.log()
    console.log(this.vidRef.current);
    screenfull.toggle(this.vidRef.current);
    // will only work for phones or tablets
    window.screen.orientation.lock("landscape-primary");
  };
  handleExitFullScrean = () => {
    screenfull.exit(findDOMNode(this.player));
    window.screen.orientation.lock("portrait");
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

  vidRef = React.createRef();
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
      duration,
      playbackRate,
      pip
    } = this.state;

    return (
      <div className="app">
        <Container variant="fluid">
          <div className="player-wrapper" ref={this.vidRef}>
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
              <Slider
                id="slider"
                color="secondary"
                value={played * 100}
                onChange={this.handleSeekChange}
                onMouseUp={this.handleSeekMouseUp}
              />
              <div className="options-group">
                <div className="left">
                  <Button
                    className="cont"
                    onClick={this.handlePlayPause}
                    variant="span"
                    size="small"
                  >
                    {playing ? <PauseIcon /> : <PlayArrowIcon />}
                  </Button>
                  <Button
                  onClick={()=>{this.setState({muted:!muted})}}
                  className="cont">
                    {muted?<VolumeOffIcon/>:<VolumeUpIcon/>}
                    
                  </Button>
                  <Typography variant="span"><Duration seconds={duration * (1 - played)} /> </Typography>
                </div>

                {/* <Button
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

              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => this.handleSetPlaybackRate(2)}
              >
                2x
              </Button> */}

                <Button
                  variant="contained"
                  size="small"
                  onClick={this.handleClickFullscreen}
                >
                  {screenfull.isFullscreen ? (
                    <FullscreenExitIcon />
                  ) : (
                    <FullscreenIcon />
                  )}
                </Button>
              </div>
            </div>
          </div>
          {/* <progress max={1} value={loaded} /> */}
          <br />
          <br />
          <br />
          <br />
          <br />
          {this.state.content.map(video => {
            return this.renderLoadButton(video.url, video.title, video.goto);
          })}
          ~~~~played>
          <span>
            <Duration seconds={duration * played} />
          </span>
        </Container>
      </div>
    );
  }
}

export default App;
