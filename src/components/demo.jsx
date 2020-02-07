import React, { Component } from "react";
import loadApi from "../helper/loadApi";
import getFiles from "../helper/getfiles";

export default class Demo extends Component {
  state = {
    drive: "170Z-UhcsG4u5cyKdlEtk0OA22eEfjSBH",
    content: []
  };

  loadSubjects = subjects => {
    let content = [];
    subjects.map(s => {
        if(s.name[0]==="_"){
            s.hasNestedFolder=true;
            console.log("nested" , s)
            getFiles(s.id,"folder").then(nestedFolder=>{
                s.nestedFolder=nestedFolder
            })
        }
      content.push(s);
    });
    this.setState({ content });
  };

  start = () => {
    loadApi().then(() => {
      getFiles(this.state.drive, "folder").then(folders => {
        this.loadSubjects(folders.files);
      });
    });
  };
  componentDidMount() {
    this.start();
  }

  render() {
    return <div></div>;
  }
}
