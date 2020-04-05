import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

export default class Fill extends Component {
  state = {
    videos: {}
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
        console.log(videos)
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
    return (
      <div>
        {/* {this.state.videos && this.state.videos
        {pl.map(video=> <h3>{video.title}</h3>)}
        </div> )} */}
        {Object.keys(this.state.videos).length && Object.keys(this.state.videos).map(pl=>(<div>
          <h1>{pl}</h1>
          {this.state.videos[pl].map(video=><h4>{video.title}</h4>)}
          
        </div>)        
      )}
        <FormControl>
          <InputLabel htmlFor="age-native-simple">Age</InputLabel>
          <Select
            native
            onChange={e => console.log("changes=d", e)}
            inputProps={{
              name: "age",
              id: "age-native-simple"
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
          </Select>
          <TextField label="enter text here" />
          <Button variant="contained" color="primary" onClick={this.loadVideos}>
            Submit
          </Button>
        </FormControl>
      </div>
    );
  }
}
