import React, { Component } from "react";

import axios from "axios";
import View from "./components/View";

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
    error: false,
    loading: false
  };
  similarityCheck = () => {
    const url =
      " https://api.labs.cognitive.microsoft.com/academic/v1.0/similarity?";

    const s11 = this.state.s1;
    const s22 = this.state.s2;
    if (s11.trim() === "" || s22.trim() === "") {
      this.setState({ error: "Input fields can not be EMPTY", result: false });
      return;
    }
    this.setState({ loading: true });
    axios
      .get(url + "s1=" + s11 + "&s2=" + s22, config)
      .then(r => {
        console.log(r);
        let result = toFixed(r.data * 100, 2);
        this.setState({ result, error: false, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error:
            "ERROR!, please enter valid input or make the paragraph shorter then try again (maximum length tested was 1780 word {of both paragraphs compined} )",
          loading: false,
          result: false
        });
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
  };

  render() {
    const { s1, s2, result, error, loading } = this.state;
    return (
      <View
        handleChange={this.handleChange}
        s1={s1}
        s2={s2}
        similarityCheck={this.similarityCheck}
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}
