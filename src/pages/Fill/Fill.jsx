import React, { Component } from "react";
import axios from "axios";
import "./Fill.css";
import subjects from "../../config/subjects";

// MUI Components------------------------------
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

// MY Components------------------------------
import Submit from "./components/Submit";
import Selecter from "./components/Selecter";
import CreatePL from "./components/CreatePL";
import PlFields from "./components/PlFields";
export default class Fill extends Component {
  state = {
    subjects: {},
    videos: {},
    selectedPlayList: "",
    displayedPlayList: [],
    newPlayListName: "",
    subject: "",
    loading: true,
    addNewVideo: true
  };

  // helpers
  idToUrl = id => {
    return `https://www.youtube.com/watch?v=${id}`;
  };

  exrtactID = url => {
    return url.split("=")[1].split("&")[0];
  };

  timeToSeconds = time => {
    let times = time.split(":");
    let seconds = 0;
    if (times.length === 2) {
      let min = parseInt(times[0]);
      let sec = parseInt(times[1]);
      seconds = min * 60 + sec;
    } else if (times.length === 3) {
      let h = parseInt(times[0]);
      let min = parseInt(times[1]);
      let sec = parseInt(times[2]);
      seconds = h * 60 * 60 + min * 60 + sec;
    }
    return seconds;
  };

  // take seconds(number) ->130
  // return time(string)  ->2:10
  SecondsToTime = seconds => {
    let time = "";
    if (seconds >= 3600) {
      let h = Math.floor(seconds / (60 * 60));
      time += `${h}:`;
      seconds -= h * 60 * 60;
    }
    if (seconds < 3600) {
      let m = Math.floor(seconds / 60);
      seconds -= m * 60;
      if (m < 10) {
        // 06:45 instead of 6:45
        time += `0${m}:`;
      } else {
        time += `${m}:`;
      }
      if (seconds < 10) {
        time += `0${seconds}`;
      } else {
        time += `${seconds}`;
      }
    }
    return time;
  };

  // take user inputs ->extract id from the url , covert time into seconds
  // only work on submit
  BeforeSubmit = playlists => {
    let allpls = Object.keys(playlists);
    let result = {};
    allpls.forEach(plName => {
      // loop over each playlist
      let modifiedPL = playlists[plName].map(video => {
        // loop over each video
        let oldgoto = video.goto;
        let name = video.name;
        let url = this.exrtactID(video.url);
        let goto = oldgoto.map(e => {
          //   loop over goto
          let title = e.title;
          let time = this.timeToSeconds(e.time);

          return { title, time };
        });
        return { name, url, goto };
      });

      result[plName] = modifiedPL;
    });
    return result;
  };

  AfterGet = playlists => {
    let allpls = Object.keys(playlists);
    let result = {};
    allpls.forEach(plName => {
      // loop over each playlist
      let modifiedPL = playlists[plName].map(video => {
        // loop over each video

        let name = video.name;
        let url = this.idToUrl(video.url);
        let oldgoto = video.goto;

        let goto = oldgoto.map(e => {
          //   loop over goto
          let title = e.title;
          let time = this.SecondsToTime(e.time);

          return { title, time };
        });
        return { name, url, goto };
      });

      result[plName] = modifiedPL;
    });
    return result;
  };

  // take the data from db ->covert the id into a url , covert time(second) into "1:53:19"
  // only work on loadVideos

  handlePlayListChange = e => {
    const selectedPlayList = e.currentTarget.value;
    this.setState({
      selectedPlayList,
      displayedPlayList: this.state.videos[selectedPlayList],
      addNewVideo: true
    });
  };

  handleSubjectSelect = e => {
    const selected = e.currentTarget.value;
    const subject = this.state.subjects[selected];

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
      { name: "", url: "", goto: [] }
    ];
    this.setState({ displayedPlayList, addNewVideo: false });
  };

  loadVideos = subjectId => {
    axios
      .get(
        `https://us-central1-electrical2nd-2020.cloudfunctions.net/api/videos/${subjectId}`
      )
      .then(daat => {
        const data = daat.data;
        let videos = this.AfterGet(data);
        this.setState({ videos, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handlePlayListName = e => {
    const newPlayListName = e.currentTarget.value;
    this.setState({ newPlayListName });
  };

  handleCreatePlayList = () => {
    let newPlayListName = this.state.newPlayListName;
    if (newPlayListName.length > 1) {
      let videos = { ...this.state.videos };
      videos[newPlayListName] = [];
      this.setState({ videos });
    } else alert("enter valid name");
  };

  handleVideoData = (e, order) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    let displayedPlayList = [...this.state.displayedPlayList];
    let videos = { ...this.state.videos };

    displayedPlayList[order][name] = value;
    videos[this.state.selectedPlayList] = displayedPlayList;

    this.setState({ displayedPlayList, videos });

    if (
      displayedPlayList[order].url === "" ||
      displayedPlayList[order].name === ""
    ) {
      this.setState({ addNewVideo: false });
    } else {
      this.setState({ addNewVideo: true });
    }
  };

  addGoto = order => {
    let videos = { ...this.state.videos };
    videos[this.state.selectedPlayList][order].goto = [
      ...videos[this.state.selectedPlayList][order].goto,
      { title: "", time: "" }
    ];
    this.setState({ videos });
  };

  handleGoto = (e, order, inputOrder) => {
    let value = String(e.currentTarget.value);
    const name = e.currentTarget.name;
    // name == time or title

    // validate only time filed
    if (name === "time") {
      // not longer than 7 ---> 1:59:59
      if (value.length <= 7) {
        // Only Numbers
        if (!isNaN(parseInt(value[value.length - 1]))) {
          // remove colons from string and set the result as time formatted
          value = this.setAsTime(value.replace(/:/g, ""));
        } else {
          value = value.substr(0, value.length - 2);
        }
      } else {
        value = value.substr(0, 7);
      }
    }

    // update
    let videos = { ...this.state.videos };
    videos[this.state.selectedPlayList][order].goto[inputOrder][name] = value;
    this.setState({ videos });
  };

  setAsTime(inputString) {
    // only seconds
    if (inputString.length <= 2) {
      return inputString;
    }
    // seconds and minutes
    if (inputString.length > 2 && inputString.length < 5) {
      return (
        inputString.slice(0, inputString.length - 2) +
        ":" +
        inputString.slice(inputString.length - 2)
      );
    }

    // seconds, minutes and hours
    if (inputString.length >= 5) {
      return (
        inputString.slice(0, inputString.length - 4) +
        ":" +
        inputString.slice(inputString.length - 4, inputString.length - 2) +
        ":" +
        inputString.slice(inputString.length - 2)
      );
    }
  }

  renderGoToInputs = (order, defaultGoto = []) => {
    let videos = { ...this.state.videos };
    const length = defaultGoto.length;
    let lastGoto;
    let lastLabel;
    let lastvalue;
    if (length > 0) {
      lastGoto = videos[this.state.selectedPlayList][order].goto[length - 1];
      lastLabel = lastGoto.title;
      lastvalue = lastGoto.time;
    }

    return (
      <div className="addGoto">
        {defaultGoto.map((g, inputOrder) => (
          <div key={g[0]}>
            <PlFields
              order={order}
              inputOrder={inputOrder}
              handleChange={this.handleGoto}
              fields={[
                ["title", g.title],
                ["time", g.time]
              ]}
            />
          </div>
        ))}
        {length ? (
          lastLabel && lastvalue ? (
            this.addGoto(order)
          ) : (
            <div></div>
          )
        ) : (
          <Button
            fullWidth
            disabled={
              this.state.displayedPlayList[order].url === "" ||
              this.state.displayedPlayList[order].name === ""
            }
            variant="contained"
            color="primary"
            onClick={() => this.addGoto(order)}
          >
            add goto
          </Button>
        )}
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
        <PlFields
          order={order}
          handleChange={this.handleVideoData}
          fields={[
            ["name", defaultTitle],
            ["url", defaultId]
          ]}
        />
        {this.renderGoToInputs(order, defaultGoto)}
      </div>
    );
  };
  /**
   * subject -> id
   * playListName -> "string"
   * videos ->[{title , value(id) ,goto{}}]
   */
  submit = () => {
    // update the database here
    //  playlistname ===10 ->update the whole playlists
    // else update only this playlist
    this.setState({ loading: true });

    let v = this.state.videos;
    let videosarr = Object.keys(v);
    let newvid = {};

    // some boring validation to filter plylists form any empty fields
    if (videosarr.length === 0) {
      alert("no thing here to submit !!!");
      return;
    } else {
      videosarr.forEach(pl => {
        let filtered = v[pl]
          .filter(vid => vid.url && vid.name)
          .map(f => {
            let ngoto = f.goto.filter(g => g.title && g.time);
            f.goto = ngoto;
            return f;
          });
        newvid[pl] = filtered;
      });
    }

    // validate name ,and url
    let converted = this.BeforeSubmit(newvid);
    axios
      .post(
        "https://us-central1-electrical2nd-2020.cloudfunctions.net/api/videos",
        {
          subject: this.state.subject,
          playlistname: 10,
          videos: converted
        }
      )
      .then(data => {
        this.setState({ loading: false });
        alert("Submitted !!!");
        console.log(data);
      })
      .catch(err => {
        alert("Falied to submit >>>try again");
        console.log(err);
      });
  };

  componentDidMount() {
    let alldivisions = {};
    subjects.forEach(s => {
      if (s.divided === undefined) {
        alldivisions[s.name] = s.id;
      } else {
        s.divided.forEach(d => {
          alldivisions[d.name] = d.id;
        });
      }
    });
    this.setState({ subjects: alldivisions });
  }

  render() {
    let playlists = Object.keys(this.state.videos);
    let subjects = Object.keys(this.state.subjects);
    return (
      <div className="fill">
        {this.state.loading && this.state.subject !== "" && (
          <LinearProgress color="secondary" />
        )}
        <Grid container justify="center">
          <Grid item xs={10}>
            <Selecter
              options={subjects}
              handleSelectChange={this.handleSubjectSelect}
              label="Select a subject"
            />
          </Grid>
          {this.state.loading ? (
            <span></span>
          ) : (
            <div>
              <div className="addPlayList">
                {playlists.length ? (
                  <div className="playlist fieldGroupCard">
                    <Selecter
                      options={playlists}
                      handleSelectChange={this.handlePlayListChange}
                      label="Playlists"
                    />
                    {this.state.displayedPlayList.map((pl, index) => (
                      <div key={pl.url}>
                        {this.renderVideoInputs(
                          index,
                          pl.name,
                          pl.url,
                          pl.goto
                        )}
                      </div>
                    ))}

                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        onClick={this.addVideoFields}
                        size="small"
                        variant="contained"
                        disabled={!this.state.addNewVideo}
                      >
                        add a new video
                      </Button>
                    </Grid>
                  </div>
                ) : (
                  <span>Subject is Empty,Create a new playlist</span>
                )}
              </div>
              <CreatePL
                handlePlayListName={this.handlePlayListName}
                handleCreatePlayList={this.handleCreatePlayList}
              />

              <Grid item xs={12}>
                <Submit submit={this.submit} />
              </Grid>
            </div>
          )}
        </Grid>
      </div>
    );
  }
}
