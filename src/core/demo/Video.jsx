import "./App.css";
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import Duration from "./Duration";
import screenfull from "screenfull";
import Goto from "./Goto";
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
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import videoContent from "./vidData";

class App extends Component {
  state = {
    goto: [],
    order: 0,
    content: [],
    settingOptions: [1, 1.25, 1.5, 1.75, 2],
    url: null,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    isRemaining: false
  };

  load = (url, order) => {
    let goto;
    if (this.state.content[order]) {
      goto = this.state.content[order].goto;
    } else {
      goto = [];
    }

    this.setState({
      goto,
      url,
      order,
      played: 0,
      loaded: 0
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

  renderLoadButton = (url, label, order, goto) => {
    return (
      <div className="content-buttons" key={url}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.load(url, order)}
        >
          {label}
        </Button>
      </div>
    );
  };

  handleClickFullscreen = () => {
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
  settingsRef = React.createRef();
  componentDidMount() {
    this.setState({ content: videoContent, order: 0 });
    this.load("https://www.youtube.com/watch?v=WfhoJsI07o0?wmode=transparent");
  }

  render() {
    const {
      content,
      goto,
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
      isRemaining,
      settingOptions
    } = this.state;
    return (
      <div className="video">
        <Container variant="fluid">
          <div className="player-wrapper" ref={this.vidRef}>
            <ReactPlayer
              ref={this.ref}
              width="100%"
              height="100%"
              url={url}
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
                    size="small"
                  >
                    {playing ? <PauseIcon /> : <PlayArrowIcon />}
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({ muted: !muted });
                    }}
                    className="cont"
                  >
                    {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({ isRemaining: !isRemaining });
                    }}
                  >
                    {isRemaining ? (
                      <span>
                        <Duration seconds={duration * played} /> /{"  "}
                        <Duration seconds={duration} />
                      </span>
                    ) : (
                      <Duration seconds={duration * (1 - played)} />
                    )}
                  </Button>
                </div>

                <div className="right">
                  {console.log("goto", goto)}
                  <Goto
                    settingOptions={settingOptions}
                    handleSetPlaybackRate={this.handleSetPlaybackRate}
                    isSpeed={true}
                    label="speed"
                  />
                  <Goto
                    content={goto}
                    isContent={true}
                    label="content"
                    handleGoTo={this.handleGoTo}
                    handleSeekMouseUp={this.handleSeekMouseUp}
                  />
                  <Button
                    size="small"
                    onClick={this.handleClickFullscreen}
                    aria-haspopup="true"
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
          </div>
          <br />

          {content.map((video, order) => {
            return this.renderLoadButton(
              video.url,
              video.title,
              order,
              video.goto
            );
          })}
        </Container>
      </div>
    );
  }
}

export default App;
