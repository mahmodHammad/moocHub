import "./App.css";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import Duration from "./Duration";

import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Slider from '@material-ui/core/Slider';

// icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MenuIcon from "@material-ui/icons/Menu";
import Forward10Icon from "@material-ui/icons/Forward10";
import SpeedIcon from "@material-ui/icons/Speed";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import Replay10Icon from "@material-ui/icons/Replay10";

class App extends Component {
  state = {
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

  handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = e => {
    this.setState({ seeking: false });
  };

  handleProgress = state => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleDuration = duration => {
    this.setState({ duration });
  };

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  progressbar=(event , value)=>{
    this.setState({played : value/100 ,seeking: true })
    this.player.seekTo(parseFloat((value/100)*this.state.duration));
    // console.log("jey:",played)
    console.log("hoooow:",value)
  }
  
  ref = player => {
    this.player = player;
  };

  componentDidMount() {
    this.load("https://www.youtube.com/watch?v=N9qYF9DZPdw")
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
        <div className="player-wrapper">
          <ReactPlayer
            ref={this.ref}
            className="react-player"
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
        </div>

        <Slider value={played *100 }  onChange={this.progressbar} onMouseUp={this.handleSeekMouseUp}/>

        
        <Button onClick={this.handlePlayPause}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>
        <SpeedIcon />
        <Button size="small" onClick={() => this.handleSetPlaybackRate(1)}>
          1x
        </Button>
        <Button size="small" onClick={() => this.handleSetPlaybackRate(1.5)}>
          1.5x
        </Button>
        <Button size="small" onClick={() => this.handleSetPlaybackRate(2)}>
          2x
        </Button>
        <progress max={1} value={played} />
        <progress max={1} value={loaded} />
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onMouseDown={this.handleSeekMouseDown}
          onChange={this.handleSeekChange}
          onMouseUp={this.handleSeekMouseUp}
        />
        {this.renderLoadButton(
          "https://www.youtube.com/watch?v=N9qYF9DZPdw",
          "Nerdy"
        )}
        {this.renderLoadButton(
          "https://www.youtube.com/playlist?list=PL6ElMp8lKLCDH1p1nxVTiJLJ7d1r-l4o7",
          "Playlist"
        )}
        {this.renderLoadButton(
          "https://docs.google.com/uc?export=download&id=19xD34WaTKGSH4or8F3V2EKnwFa3mdm_s",
          "mp3"
        )}
        {/* {played.toFixed(3)} */}
        duration
        <span>
          <Duration seconds={duration} />
        </span>
        played
        <span>
          <Duration seconds={duration * played} />
        </span>
        remaining
        <span>
          <Duration seconds={duration * (1 - played)} />
        </span>
      </div>
    );
  }
}

export default App;
