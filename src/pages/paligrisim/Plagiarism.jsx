import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import axios from "axios";
import Textarea from "./components/Textarea";
import Typography from "@material-ui/core/Typography";

const key = "49dd31f486204254b3dc23dde8c5304c";
const config = {
  headers: {
    "Ocp-Apim-Subscription-Key": key
  }
};
export default class Paligrism extends Component {
  state = {
    s1: "",
    s2: "",
    result: false
  };
  similarityCheck = (s1, s2) => {
    const url =
      " https://api.labs.cognitive.microsoft.com/academic/v1.0/similarity?";
    const s11 =
      "s1=Using complementary priors, we derive a fast greedy algorithm that can learn deep directed belief networks one layer at a time, provided the top two layers form an undirected associative memory";
    const s22 =
      "s2=Using complementary priors, we derive a fast greedy algorithm that can you learn deep directed belief networks one layer at a time, provided the top two layers form an undirected associative memory";
    axios
      .get(url + s11 + "&" + s22, config)
      .then(r => {
        console.log(r);
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChange = e => {
    const result = e.currentTarget;
    const name = result.name;
    const value = result.value;

    if (name === "s1") {
      this.setState({ s1: value });
    } else if (name === "s2") {
      this.setState({ s2: value });
    }
    console.log("name", name);
    console.log("value", value);
  };

  render() {
    return (
      <div>
        <Typography variant="h6">Plagiarism Check betweeen 2 texts</Typography>
        <Textarea
          name="s1"
          label="enter the First text"
          value={this.state.s1}
          handleChange={this.handleChange}
        />
        <Textarea
          name="s2"
          label="enter the Seconds text"
          value={this.state.s2}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
