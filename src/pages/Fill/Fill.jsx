import React, { Component } from "react";
import axios from "axios";
import "./Fill.css";

// MUI Components------------------------------
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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
      conversion: "1a0nyHuVsCwWMVifikEPlHPYYcbXlmxGm"
    },
    videos: {},
    selectedPlayList: "",
    displayedPlayList: [],
    newPlayListName: "",
    subject: "",
    loading: true
  };

  handlePlayListChange = e => {
    const selectedPlayList = e.currentTarget.value;
    this.setState({
      selectedPlayList,
      displayedPlayList: this.state.videos[selectedPlayList]
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
      { title: "", id: "", goto: [] }
    ];
    this.setState({ displayedPlayList });
  };

  loadVideos = subjectId => {
    axios
      .get(`https://us-central1-electrical2nd-2020.cloudfunctions.net/api/videos/${subjectId}`)
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
      .post("https://us-central1-electrical2nd-2020.cloudfunctions.net/api/videos", {
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
          <PlFields
            order={order}
            inputOrder={inputOrder}
            handleChange={this.handleGoto}
            fields={[
              ["label", g.value],
              ["value", g.value]
            ]}
          />
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
          <PlFields
            order={order}
            handleChange={this.handleVideoData}
            fields={[
              ["title", defaultTitle],
              ["id", defaultId]
            ]}
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
        <Grid container>
          <Grid item xs={12}>
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
              <div>LOADING...</div>
            )
          ) : (
            <div>
              <div className="addPlayList">
                {playlists.length ? (
                  <React.Fragment className="form">
                    <Grid item xs={12}>
                      <Selecter
                        options={playlists}
                        handleSelectChange={this.handlePlayListChange}
                        label="Playlist"
                      />
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
                  </React.Fragment>
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
