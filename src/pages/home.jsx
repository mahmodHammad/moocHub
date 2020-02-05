////////  ////////
import React, { Component } from "react";
import getFiles from "../helper/getfiles";
import API_KEY from "../config/gapi";
import { Link } from "react-router-dom";
import DisplaySubjects from './../components/DisplaySubjects';
import {
  Grid,
  Typography
} from "@material-ui/core";

class Home extends Component {
  state = {
    gapiReady: false,
    name: "3rd-Computer",
    drive: "0B0OtL1j7jam_bWR3THZhd1RnbEE",
    content: false
  };

  //////// to be able to use Drive Api////////
  loadApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    return new Promise((resolve, reject) => {
      script.addEventListener("load", () => {
        window.gapi.load("client", () => {
          window.gapi.client.setApiKey(API_KEY);
          window.gapi.client.load("drive", "v3", () => {
            resolve();
            this.setState({ gapiReady: true });
          });
        });
      });
      document.body.appendChild(script);
    });
  };

  loadSubjects = subjects => {
    let content = [];
    subjects.map(
      s =>
      content.push(s)
    );
    this.setState({ content });
  };
  componentDidMount() {
    this.loadApi().then(() => {
      getFiles(this.state.drive ,"folder").then(folders =>
        this.loadSubjects(folders.files)
      );
    });
  }

  render() {
    return (
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            {this.state.name}
          </Typography>
        </Grid>
        {/********************subjects ********************/}
        <Grid container item sm={10} spacing={4}>
          {this.state.content !== false &&
            this.state.content.map(folder => (
              <DisplaySubjects folder={folder} key={folder.id}/>
            ))}
          {/********************subjects ********************/}
        </Grid>
      </Grid>
    );
  }
}

export default Home;
