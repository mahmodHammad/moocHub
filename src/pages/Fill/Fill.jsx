import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import axios from "axios";
import "./Fill.css";

export default class Fill extends Component {
  state = {
    videos: {},
    selectedPlayList: "",
    displayedPlayList: [],
    newPlayListName: "",
    subject: ""
  };

  handleSelectChange = e => {
    const selectedPlayList = e.currentTarget.value;
    console.log(selectedPlayList);
    console.log(this.state.videos[selectedPlayList]);
    this.setState({
      selectedPlayList,
      displayedPlayList: this.state.videos[selectedPlayList]
    });
  };

  addVideoFields = () => {
    let displayedPlayList = [
      ...this.state.displayedPlayList,
      { title: "", id: "", goto: [] }
    ];
    this.setState({displayedPlayList})
  };
  loadSubjects = () => {
    axios.get(`/subjects`).then(daat => {
      console.log("WE DID IT !!!", daat);
    });
  };

  loadVideos = subjectId => {
    axios
      .get(`/videos/math2020`)
      .then(daat => {
        console.log("WE DID IT !!!", daat);
        const videos = daat.data;
        console.log(videos);
        this.setState({ videos });
      })
      .catch(err => {
        console.log(err);
      });
  };

  createPlayList = () => {
    axios
      .post("/videos", {
        subject: "math2020",
        playListName: this.state.newPlayListName,
        videos: []
      })
      .then(e => {
        console.log(e);
      });
  };

  handlePlayListName = e => {
    const newPlayListName = e.currentTarget.value;
    this.setState({ newPlayListName });
  };

  handleVideoData = (e, order) => {
    console.log(order);
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    let displayedPlayList = [...this.state.displayedPlayList];
    let videos = {...this.state.videos}

    displayedPlayList[order][name] = value;
    videos[this.state.selectedPlayList]=displayedPlayList

    this.setState({ displayedPlayList , videos});
  };

  renderVideoInputs = (
    order,
    defaultTitle = "",
    defaultId = "",
    defaultGoto = []
  ) => {
    return (
      <div className="addVideo">
        <Grid item xs={12}>
          <TextField
            required
            name="title"
            label="Video Title"
            onChange={e => this.handleVideoData(e, order)}
            value={defaultTitle}
          />
          <TextField
            name="id"
            required
            label="Url"
            onChange={e => this.handleVideoData(e, order)}
            value={defaultId}
          />
        </Grid>
      </div>
    );
  };
  /**
   * subject -> id
   * playListName -> "string"
   * videos ->[{title , value(id) ,goto{}}]
   */
  submit = (subjectId, playlistname, videos) => {
    // update the database here
    //  playlistname ===10 ->update the whole playlists
    // else update only this playlist
    axios.post("/videos", {
      subject: "math2020",
      playlistname: 10,
      videos: this.state.videos
    });
  };

  render() {
    console.log(this.state);
    let playlists = Object.keys(this.state.videos);
    return (
      <div className="fill">
        <div className="addPlayList">
          {playlists.length ? (
            <React.Fragment className="form">
              <FormControl>
                <InputLabel htmlFor="playlist">playlist</InputLabel>
                <Select
                  native
                  onChange={this.handleSelectChange}
                  inputProps={{
                    name: "age",
                    id: "playlist"
                  }}
                >
                  <option aria-label="None" value="" />
                  {playlists.map(pl => (
                    <option value={pl}>{pl}</option>
                  ))}
                </Select>
                <TextField
                  placeholder="PlayList Name"
                  name="create a new PlayList"
                  label="Enter new Playlist's name"
                  onChange={this.handlePlayListName}
                />
              </FormControl>
              {this.state.displayedPlayList.map((pl, index) => (
                <div>{this.renderVideoInputs(index, pl.title, pl.id)}</div>
              ))}
              <Button
                onClick={this.addVideoFields}
                size="small"
                variant="contained"
              >
                add new video
              </Button>
            </React.Fragment>
          ) : (
            <span>NO videos is available so far...</span>
          )}
        </div>
        {/* {this.renderVideoInputs()} */}

        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.loadVideos}
            >
              GET
            </Button>
            <Button variant="outlined" color="secondary" onClick={this.submit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
