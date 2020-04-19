import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import "./wiki.css";
export default class Wiki extends Component {
  state = {
    search: "",
    searchResult:[]
  };

  handleChange = e => {
    const value = e.currentTarget.value;

    // do requiest here
    console.log(value);
  };
  render() {
    return (
      <div className="wiki">
        <Typography variant="h6" align="center">
          WikiPedia
        </Typography>
        <div className="wikisearch">
          <TextField
            name="wiki"
            label="Search on WikiPedia"
            variant="outlined"
            onChange={e => this.handleChange(e)}
          />
        </div>
      </div>
    );
  }
}
