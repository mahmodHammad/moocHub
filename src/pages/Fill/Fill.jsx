import React, { Component } from "react";
import axios from "axios";
import "./Fill.css";

// MUI Components------------------------------
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

// MY Components------------------------------
import Submit from "./components/Submit";
import Selecter from "./components/Selecter";
import CreatePL from "./components/CreatePL";
import PlFields from "./components/PlFields";
export default class Fill extends Component {
  state = {
    subjects: {
      math: "1iAj9UccTpK5S_ogtwdVZGwFFiyr1lyKk",
      signals: "1HQ2kQCTYJ0k6NglF1JtYoZMHQ-TBUYuS",
      co: "1thBkhoZ5lQ_6DQOHTOFkw-O4Nslf-cP8",
      control: "1ifZ2VNqC6YAuy2IoLfEQu31hjNdoebbm",
      conversion: "1a0nyHuVsCwWMVifikEPlHPYYcbXlmxGm",
    },
    videos: {},
    selectedPlayList: "",
    displayedPlayList: [],
    newPlayListName: "",
    subject: "",
    loading: true,
    addNewVideo: true,
  };

  handlePlayListChange = (e) => {
    const selectedPlayList = e.currentTarget.value;
    this.setState({
      selectedPlayList,
      displayedPlayList: this.state.videos[selectedPlayList],
      addNewVideo: true,
    });
  };

  handleSubjectSelect = (e) => {
    const selected = e.currentTarget.value;
    const subject = this.state.subjects[selected];

    // reset
    this.setState({
      subject,
      videos: {},
      loading: true,
      displayedPlayList: [],
      newPlayListName: "",
    });
    this.loadVideos(subject);
  };

  addVideoFields = () => {
    let displayedPlayList = [
      ...this.state.displayedPlayList,
      { name: "", url: "", goto: [] },
    ];
    this.setState({ displayedPlayList, addNewVideo: false });
  };

  loadVideos = (subjectId) => {
    axios
      .get(
        `https://us-central1-electrical2nd-2020.cloudfunctions.net/api/videos/${subjectId}`
      )
      .then((daat) => {
        const videos = daat.data;
        this.setState({ videos, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlePlayListName = (e) => {
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

  addGoto = (order) => {
    let videos = { ...this.state.videos };
    videos[this.state.selectedPlayList][order].goto = [
      ...videos[this.state.selectedPlayList][order].goto,
      { title: "", time: "" },
    ];
    this.setState({ videos });
  };

  handleGoto = (e, order, inputOrder) => {
    // get input value & input name
    // name == time or title

    let value = String(e.currentTarget.value);
    const name = e.currentTarget.name;

    // validate only time filed
    // validation start ****************>>>>>>>>>>>>>>>>>>>>--.

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


    // update (ignore this)
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
          <div>
            <PlFields
              order={order}
              inputOrder={inputOrder}
              handleChange={this.handleGoto}
              fields={[
                ["title", g.title],
                ["time", g.time],
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
            ["url", defaultId],
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
      videosarr.forEach((pl) => {
        let filtered = v[pl]
          .filter((vid) => vid.url && vid.name)
          .map((f) => {
            let ngoto = f.goto.filter((g) => g.title && g.time);
            f.goto = ngoto;
            return f;
          });
        newvid[pl] = filtered;
      });
    }

    // validate name ,and url

    axios
      .post(
        "https://us-central1-electrical2nd-2020.cloudfunctions.net/api/videos",
        {
          subject: this.state.subject,
          playlistname: 10,
          videos: newvid,
        }
      )
      .then((data) => {
        this.setState({ loading: false });
        alert("Submitted !!!");
        console.log(data);
      })
      .catch((err) => {
        alert("Falied to submit >>>try again");
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    let playlists = Object.keys(this.state.videos);
    let subjects = Object.keys(this.state.subjects);
    return (
      <div className="fill">
        <Grid container justify="center">
          <Grid item xs={10}>
            <Selecter
              options={subjects}
              handleSelectChange={this.handleSubjectSelect}
              label="Select a subject"
            />
          </Grid>
          {this.state.loading ? (
            this.state.subject === "" ? (
              <div></div>
            ) : (
              <div>
                <span>..</span>
                <CircularProgress color="secondary" />
              </div>
            )
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
                      <div>
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
                        add new video
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
