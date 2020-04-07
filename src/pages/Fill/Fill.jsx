import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import axios from "axios";
import "./Fill.css";
import Typography from '@material-ui/core/Typography';

export default class Fill extends Component {
  state = {
    subjects: {
      math: "1iAj9UccTpK5S_ogtwdVZGwFFiyr1lyKk",
      signals: "1HQ2kQCTYJ0k6NglF1JtYoZMHQ-TBUYuS",
      co: "1thBkhoZ5lQ_6DQOHTOFkw-O4Nslf-cP8",
      control: "1ifZ2VNqC6YAuy2IoLfEQu31hjNdoebbm",
      conversion: "1a0nyHuVsCwWMVifikEPlHPYYcbXlmxGm"
    },
    videos: {},
    selectedPlayList: "",
    displayedPlayList: [],
    newPlayListName: "",
    subject: "",
    loading: true
  };

  handleSelectChange = e => {
    const selectedPlayList = e.currentTarget.value;
    this.setState({
      selectedPlayList,
      displayedPlayList: this.state.videos[selectedPlayList]
    });
  };

  handleSubjectSelect = e => {
    const subject = e.currentTarget.value;
    // reset
    this.setState({
      subject,
      videos: {},
      loading: true,
      displayedPlayList: [],
      newPlayListName: ""
    });
    this.loadVideos(subject);
  };

  addVideoFields = () => {
    let displayedPlayList = [
      ...this.state.displayedPlayList,
      { title: "", id: "", goto: [] }
    ];
    this.setState({ displayedPlayList });
  };

  loadVideos = subjectId => {
    axios
      .get(`/videos/${subjectId}`)
      .then(daat => {
        const videos = daat.data;
        this.setState({ videos, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  createPlayList = () => {
    axios
      .post("/videos", {
        subject: this.state.subject,
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
    axios
      .post("/videos", {
        subject: this.state.subject,
        playlistname: 10,
        videos: this.state.videos
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    let playlists = Object.keys(this.state.videos);
    let subjects = Object.keys(this.state.subjects);
    return (
      <div className="fill">
        <InputLabel htmlFor="playlist">Select a subject</InputLabel>
        <Select
          fullWidth
          native
          onChange={this.handleSubjectSelect}
          inputProps={{
            name: "subject",
            id: "lol"
          }}
        >
          <option aria-label="None" value="" />
          {subjects.map(pl => (
            <option value={this.state.subjects[pl]}>{pl}</option>
          ))}
        </Select>
        {this.state.loading ? (
          this.state.subject===""?<div></div>:<div>LOADING...</div>
        ) : (
          <div>
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
                          {this.renderVideoInputs(
                            index,
                            pl.title,
                            pl.id,
                            pl.goto
                          )}
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
                <span>Subject is Empty,Create a new playlist</span>
              )}
            </div>
            <Grid item xs={12}>
              <TextField
                size="small"
                placeholder="PlayList Name"
                name="create a new PlayList"
                label="Enter new Playlist's name"
                onChange={this.handlePlayListName}
              />
            </Grid>
            <Button variant="outlined" onClick={this.handleCreatePlayList}>
              Create a PlayList
            </Button>

            <Grid container>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.submit}
                >
                  Submit
                </Button>
                <Typography color="secondary" variant="h5" component="span">Do not Forget to submit before selecting an other subject</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.submit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}
