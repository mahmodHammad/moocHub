import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import axios from "axios";
import Textarea from "./components/Textarea";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const key = "49dd31f486204254b3dc23dde8c5304c";
const config = {
  headers: {
    "Ocp-Apim-Subscription-Key": key
  }
};
function toFixed(num, fixed) {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
}

export default class Paligrism extends Component {
  state = {
    s1: "",
    s2: "",
    result: false,
    error: false
  };
  similarityCheck = () => {
    const url =
      " https://api.labs.cognitive.microsoft.com/academic/v1.0/similarity?";

    const s11 = this.state.s1;
    const s22 = this.state.s2;
    axios
      .get(url + "s1=" + s11 + "&s2=" + s22, config)
      .then(r => {
        console.log(r);
        let tofixed = toFixed(r.data*100, 2 );
        let result =tofixed+"%"
        this.setState({ result, error: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
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
        <Typography align="center" variant="h6">
          Similarity Check betweeen 2 texts
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <Textarea
              name="s1"
              label="enter the First text"
              value={this.state.s1}
              handleChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Textarea
              name="s2"
              label="enter the Seconds text"
              value={this.state.s2}
              handleChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Button onClick={this.similarityCheck} variant="outlined">
                Check
              </Button>
            </Grid>
            <Grid item xs={12}>
              {this.state.result !== false ? (
              <Typography align="center">Similarity {this.state.result}</Typography>
              ) : (
                <span></span>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
