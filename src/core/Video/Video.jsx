import "./App.css";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import Container from "@material-ui/core/Container";

import VideoMenu from "./VideoMenu";
import FullScreen from "./components/FullScreen";
import Audio from "./components/Audio";
import Time from "./components/Time";
import Pause from "./components/Pause";
import ProgressBar from "./components/ProgressBar";

class App extends Component {
  state = {
    goto: [],
    content: [],
    settingOptions: [1, 1.25, 1.5, 1.75, 2],
    url: null,
    playing: false,
    controls: false,
    light: false,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    isRemaining: false
  };

  load = url => {
    const goto = this.props.goto;

    this.setState({
      goto,
      url,
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
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleDuration = duration => {
    this.setState({ duration });
  };

  handleRemaining = () => {
    this.setState({ isRemaining: !this.state.isRemaining });
  };

  handleMute = () => {
    this.setState({ muted: !this.state.muted });
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
    this.setState({ url: this.props.url, goto: this.props.goto });
    this.load(this.props.url);
  }

  render() {
    const {
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
              <ProgressBar
                handleSeekChange={this.handleSeekChange}
                handleSeekMouseUp={this.handleSeekMouseUp}
                played={played}
              />

              <div className="options-group">
                <div className="left">
                  <Pause
                    handlePlayPause={this.handlePlayPause}
                    playing={playing}
                  />

                  <Audio muted={muted} handleMute={this.handleMute} />
                  <Time
                    handleRemaining={this.handleRemaining}
                    isRemaining={isRemaining}
                    duration={duration}
                    played={played}
                  />
                </div>

                <div className="right">
                  <VideoMenu
                    settingOptions={settingOptions}
                    handleSetPlaybackRate={this.handleSetPlaybackRate}
                    isSpeed={true}
                    label="speed"
                  />
                  <VideoMenu
                    content={goto}
                    isContent={true}
                    label="content"
                    handleGoTo={this.handleGoTo}
                    handleSeekMouseUp={this.handleSeekMouseUp}
                  />
                  <FullScreen
                    player={this.player}
                    vidRef={this.vidRef.current}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
        </Container>
      </div>
    );
  }
}

export default App;
