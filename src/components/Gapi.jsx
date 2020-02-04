import React, { Component } from "react";
import transformFolderID from "../helper/initGapi";
var API_KEY = "AIzaSyBaYqW1LaG3Oua5aT40u6AqmaasNVPkwe0";

//   const container = document.getElementById("container");

//   function renderFiles(f) {
//     const files = document.createElement("ul");
//     container.appendChild(files);
//     f.map(e => {
//       let file = document.createElement('li');
//       file.innerText= e.name;
//       files.appendChild(file)
//     });
//   }

export default class Gapi extends Component {
  state = {
    gapiReady: false,
    folderID: ""
  };

  loadApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.addEventListener("load", () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("drive", "v3", () => {
          this.setState({ gapiReady: true });
          this.listFiles("1yxrZOSGLu6kagK0OlgFrjnYpYmRjK3_f");
        });
      });
    });
    document.body.appendChild(script);
  };

  listFiles(fid) {
    let q = transformFolderID(fid);
    window.gapi.client.drive.files.list({ q })
      .then((e) => {
         this.setState({ folderID: e.result.files });
         console.log(this.state)
        return e.result;
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.loadApi();
  }
  render() {
    return (
      <div>
        {this.state.gapiReady && <h1>GAPI is loaded and ready to use.</h1>}
        {this.state.folderID && this.state.folderID.map(e => <h5 key={e.id}>{e.name}</h5>)}
      </div>
    );
  }
}
