import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "./Fill.css";

export default class Fill extends Component {
  state = {
    videos: {},
    selectedPlayList: "",
    displayedPlayList: []
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

  updateVideos = (subjectId, playlistname, videos) => {
    axios.post("/videos/", {
      title: "test from fronend",
      value: "HEllo Firebase from react "
    });
  };

  render() {
    let playlists = Object.keys(this.state.videos);
    return (
      <div className="fill">
        {/* {this.state.videos && this.state.videos
        {pl.map(video=> <h3>{video.title}</h3>)}
        </div> )} */}
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
              {/* <TextField label="enter text here" /> */}
            </FormControl>
            {this.state.displayedPlayList.map((pl,index) => (
              <div>
                {console.log('pl is ',pl)}
                <h4>Title: {pl.title} ID:<span>{pl.id}</span></h4>
                {/* <p>{pl.videos[index].id}</p>
                <p>{pl.videos[index].id}</p> */}
                {pl.goto.map(g => (
                  <p>
                    <span>{g.label}</span>
                    <span> AT </span>
                    <span>{g.value}</span>
                  </p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <h1>NO videos is available so far...</h1>
        )}
        <Button variant="contained" color="primary" onClick={this.loadVideos}>
          Update
        </Button>
      </div>
    );
  }
}
