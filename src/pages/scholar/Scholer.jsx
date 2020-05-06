import React, { Component } from "react";
// key
// 49dd31f486204254b3dc23dde8c5304c

import axios from "axios";
const key = "49dd31f486204254b3dc23dde8c5304c";
// 4e08ba45eee44bfcb1e10af8c86e0e3d
const config = {
  headers: {
    "Ocp-Apim-Subscription-Key": key
  }
};
export default class componentName extends Component {

  inter = (query) => {
    //   composit queries later
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/interpret?query=DN:${query}&complete=1&count=50`;
    axios
      .get(search, config)
      .then(e => {
        let mod = e.data.interpretations.map(i => {
            let exp=i.rules[0].output.value;
            this.search(exp)
          return exp
        });
        console.log(e);
        console.log(mod);
      })
      .then(err => console.log(err));
  };

  search=exp=>{
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate?expr=${exp}&model=latest&count=10&offset=0&attributes=Ti,Y,CC,AA.AuN,AA.AuId`
    axios
      .get(search, config)
      .then(e => {
        // let mod = e.data.interpretations.map(i => {
        //   return i.rules[0].output.value;
        // });
        // console.log(mod);
        console.log(e);
      })
      .then(err => console.log(err));
  }

  componentDidMount() {
    let query = " atom";
    this.inter(query)

  }

  render() {
    return <div>HELLo</div>;
  }
}
