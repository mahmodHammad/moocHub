import React, { Component } from "react";
// key
// 49dd31f486204254b3dc23dde8c5304c

import axios from "axios";
const key = "49dd31f486204254b3dc23dde8c5304c";
// 4e08ba45eee44bfcb1e10af8c86e0e3d
export default class componentName extends Component {
  componentDidMount() {
    const q =
      "https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate?expr=Composite(AA.AuN=='jaime teevan')&model=latest&count=10&offset=0&attributes=Id";
    let config = {
      headers: {
        "Ocp-Apim-Subscription-Key": "49dd31f486204254b3dc23dde8c5304c"
      }
    };
    axios
      .get(q, config)
      .then(e => {
        console.log(e);
      })
      .then(err => console.log(err));
  }

  render() {
    return <div>HELLo</div>;
  }
}
