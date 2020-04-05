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
    newPlayListName: ""
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

  createPlayList = () => {};

  handlePlayListName = e => {
    const newPlayListName = e.currentTarget.value;
    this.setState({ newPlayListName });
  };

  handleVideoData = (e, order) => {
    console.log(order);
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    let displayedPlayList = [...this.state.displayedPlayList];
    displayedPlayList[order][name] = value;

    this.setState({ displayedPlayList });
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
      playlistname:10,
      videos:this.state.videos
    });
  };

  render() {
    console.log(this.state);
    let playlists = Object.keys(this.state.videos);
    return (
      <div className="fill">
        {playlists.length ? (
          <div className="form">
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
            </FormControl>
            {this.state.displayedPlayList.map((pl, index) => (
              <div>{this.renderVideoInputs(index, pl.title, pl.id)}</div>
            ))}
          </div>
        ) : (
          <h1>NO videos is available so far...</h1>
        )}

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

          <div className="addPlayList">
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="newPlayListName"
                required
                label="Enter Playlist name"
                onChange={this.handlePlayListName}
              />
              <Button
              variant="outlined"
              color="primary"
              onClick={this.createPlayList}
            >
              Create a PlayList
            </Button>
            </Grid>
            {/* {this.renderVideoInputs()} */}
          </div>
        </Grid>
      </div>
    );
  }
}
