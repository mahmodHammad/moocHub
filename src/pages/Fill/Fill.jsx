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
    console.log(order)
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    let displayedPlayList = [...this.state.displayedPlayList];
    console.log(displayedPlayList);
    console.log(displayedPlayList[order])
    displayedPlayList[order][name] = value;
    console.log(displayedPlayList);

    this.setState({ displayedPlayList });
  };

  renderVideoInputs = (
    order,
    defaultTitle = "",
    defaultId = "",
    defaultGoto = []
  ) => {
    console.log(order)
    return (
      <div className="addVideo">
        <Grid item xs={12}>
          <TextField
            required
            name="title"
            label="Video Title"
            onChange={e => this.handleVideoData(e, order)}
            defaultValue={this.state.displayedPlayList[order].title}
          />
          <TextField
            name="id"
            required
            label="Url"
            onChange={e => this.handleVideoData(e, order)}
            defaultValue={this.state.displayedPlayList[order].id}
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
    axios.post("/videos/", {
      subjectId: "math2020",
      playlistname,
      videos
    });
  };

  render() {
    console.log(this.state)
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
                    {console.log("XXXXXXXXXX",this.state.displayedPlayList)}
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
              variant="outlined"
              color="primary"
              onClick={this.createPlayList}
            >
              Create a PlayList
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.loadVideos}
            >
              Update
            </Button>
            <Button variant="outlined" color="primary" onClick={this.submit}>
              Submit
            </Button>
          </Grid>

          <div className="addPlayList">
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="newPlayListName"
                required
                label="Enter Playlist name"
                onChange={this.handlePlayListName}
              />
            </Grid>
            {/* {this.renderVideoInputs()} */}
          </div>
        </Grid>
      </div>
    );
  }
}
