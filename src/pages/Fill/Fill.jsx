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
    this.setState({ displayedPlayList });
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

  handleCreatePlayList = () => {
    let newPlayListName = this.state.newPlayListName;
    let videos = { ...this.state.videos };
    videos[newPlayListName] = [];
    this.setState({ videos });
  };

  handleVideoData = (e, order) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    let displayedPlayList = [...this.state.displayedPlayList];
    let videos = { ...this.state.videos };

    displayedPlayList[order][name] = value;
    videos[this.state.selectedPlayList] = displayedPlayList;

    this.setState({ displayedPlayList, videos });
  };

  addGoto = order => {
    let videos = { ...this.state.videos };
    videos[this.state.selectedPlayList][order].goto = [
      ...videos[this.state.selectedPlayList][order].goto,
      { label: "", value: "" }
    ];
    this.setState({ videos });
  };

  handleGoto = (e, order, inputOrder) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    let videos = { ...this.state.videos };
    videos[this.state.selectedPlayList][order].goto[inputOrder][name] = value;
    this.setState({ videos });
  };

  renderGoToInputs = (order, defaultGoto = []) => {
    return (
      <div className="addVideo">
        {defaultGoto.map((g, inputOrder) => (
          <Grid item xs={12}>
            <TextField
              required
              name="label"
              label="Title"
              onChange={e => this.handleGoto(e, order, inputOrder)}
              value={g.label}
            />
            <TextField
              name="value"
              required
              label="time"
              onChange={e => this.handleGoto(e, order, inputOrder)}
              value={g.value}
            />
          </Grid>
        ))}
        <Button onClick={() => this.addGoto(order)}>add goto</Button>
      </div>
    );
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
        {this.renderGoToInputs(order, defaultGoto)}
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
              <Grid container>
                <Grid item xs={12}>
                  <FormControl>
                    <InputLabel htmlFor="playlist">playlist</InputLabel>
                    <Select
                      fullWidth
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
                    <div>
                      {this.renderVideoInputs(index, pl.title, pl.id, pl.goto)}
                    </div>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={this.addVideoFields}
                    size="small"
                    variant="contained"
                  >
                    add new video
                  </Button>
                </Grid>
              </Grid>
            </React.Fragment>
          ) : (
            <span>NO videos is available so far... click get</span>
          )}
        </div>

        <Grid container>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              placeholder="PlayList Name"
              name="create a new PlayList"
              label="Enter new Playlist's name"
              onChange={this.handlePlayListName}
            />
            <Button
              onClick={this.handleCreatePlayList}
              variant="outlined"
              size="large"
            >
              Create a PlayList
            </Button>
          </Grid>
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
