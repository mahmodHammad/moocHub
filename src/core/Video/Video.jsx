import "./video.css";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import VideoMenu from "./VideoMenu";
import FullScreen from "./components/FullScreen";
import Audio from "./components/Audio";
import Time from "./components/Time";
import Pause from "./components/Pause";
import ProgressBar from "./components/ProgressBar";
import Pin from "./components/Pin";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import CloseIcon from "@material-ui/icons/Close";

class App extends Component {
  state = {
    isPinned: false,
    url: "",
    content: [],
    settingOptions: [1, 1.2, 1.4, 1.6, 1.8, 2],
    playing: true,
    controls: false,
    light: false,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    isRemaining: false,
    isReady: false
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  IdToUrl = id => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    return url;
  };
  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls
      },
      () => this.props.loadVideo(url)
    );
  };

  handleSetPlaybackRate = value => {
    this.setState({ playbackRate: parseFloat(value) });
  };

  handlePlay = () => {
    this.setState({ playing: true, seeking: false });
  };

  handlePause = () => {
    this.setState({ playing: false });
  };

  handleSeekChange = (e, value) => {
    this.setState({ played: value / 100, seeking: true });
    this.player.seekTo(parseFloat((value / 100) * this.state.duration));
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

  handleGoTo = sec => {
    if (this.state.isPinned) {
      // sec here is a value from 0 to 1 which reprent the progress not actual second
      this.setState({ played: sec, seeking: true });
    } else {
      this.setState({ played: sec / this.state.duration, seeking: true });
    }
    this.player.seekTo(parseFloat(sec));
  };

  handleSeekMouseUp = () => {
    this.setState({ seeking: false });
  };

  handlePin = value => {
    this.setState({ isPinned: value });
  };

  componentDidMount() {
    const url = this.IdToUrl(this.props.url);
    const isPinned = this.props.isPinned;
    this.setState({ url, isPinned });
  }

  ref = player => {
    this.player = player;
  };

  vidRef = React.createRef();
  settingsRef = React.createRef();

  render() {
    const {
      isPinned,
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

    const { handleVideoPin, goto } = this.props;

    return (
      <React.Fragment>
        {url && (
          <div>
            <div className="player-wrapper" ref={this.vidRef}>
              <div className="top-options-right">
                {isPinned && (
                  <Button
                    color="inherit"
                    onClick={() => handleVideoPin(url, goto, played)}
                  >
                    <CloseIcon color="inherit" />
                  </Button>
                )}
              </div>

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
                onReady={() => {
                  if (isPinned) {
                    this.setState({ played: this.props.played, seeking: true });
                    this.player.seekTo(parseFloat(this.props.played));
                  }
                }}
                onPlay={this.handlePlay}
                onPause={this.handlePause}
                onBuffer={() => {
                  this.setState({ seeking: false });
                }}
                onEnded={this.handleEnded}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration}
              />

              <div className="options">
                <ProgressBar
                  handleSeekChange={this.handleSeekChange}
                  handleSeekMouseUp={this.handleSeekMouseUp}
                  played={played}
                  goto={goto}
                  duration={duration}
                />

                <div className="options-group">
                  <div>
                    {isPinned ? (
                      <Button color="inherit">
                        <ControlCameraIcon color="inherit" />
                      </Button>
                    ) : (
                      <Hidden smUp={false} smDown={true}>
                        <Pause
                          handlePlayPause={this.handlePlayPause}
                          playing={playing}
                        />
                      </Hidden>
                    )}
                    {!isPinned && (
                      <Hidden smUp={false} smDown={true}>
                        <Audio muted={muted} handleMute={this.handleMute} />
                      </Hidden>
                    )}
                    <Time
                      handleRemaining={this.handleRemaining}
                      isRemaining={isRemaining}
                      duration={duration}
                      played={played}
                    />
                  </div>

                  <div>
                    <Pin
                      handleVideoPin={handleVideoPin}
                      isPinned={isPinned}
                      handlePin={this.handlePin}
                      goto={goto}
                      url={url}
                      played={played}
                      handleGoTo={this.handleGoTo}
                      handleSeekMouseUp={this.handleSeekMouseUp}
                    />
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
                      handlePin={this.handlePin}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
