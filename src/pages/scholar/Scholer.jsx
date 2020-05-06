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
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/interpret?query=${query}&complete=1&count=10`;
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
    //  f: [.FN] field
    // Ti :title
    // y:year
    // s:[.U] links 
      const attr="Id,BT,FP,CitCon,C,DOI,I,S,F.FN,Ty,Ti,Y,CC,AA.AuN,AA.AuId"
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate?expr=${exp}&model=latest&count=3&offset=0&attributes=${attr}`
    axios
      .get(search, config)
      .then(e => {
        // let mod = e.data.interpretations.map(i => {
        //   return i.rules[0].output.value;
        // });
        // console.log(mod);
        console.log(e.data.entities);
      })
      .then(err => console.log(err));
  }

  componentDidMount() {
    let query = " video processing";
    this.inter(query)

  }

  render() {
    return <div>HELLo</div>;
  }
}
