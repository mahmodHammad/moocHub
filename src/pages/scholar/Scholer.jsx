import React, { Component } from "react";
// key
// 49dd31f486204254b3dc23dde8c5304c

import axios from "axios";
import Search from "./../Wiki/components/Search";
import Link from "@material-ui/core/Link";
const key = "49dd31f486204254b3dc23dde8c5304c";
// 4e08ba45eee44bfcb1e10af8c86e0e3d
const config = {
  headers: {
    "Ocp-Apim-Subscription-Key": key
  }
};
export default class componentName extends Component {
  state = {
    interpret: [],
    results: [],
    rearch: [],
    entities: []
  };

  handleChange = e => {
    const value = e.currentTarget.value;
    if (value.trim().length > 1) {
      this.setState({ entities: [] });
      this.inter(value);
    }
  };

  inter = query => {
    //   composit queries later
    this.setState({ rearch: [] });
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/interpret?query=${query}&complete=1&count=12`;
    axios
      .get(search, config)
      .then(e => {
        let mod = e.data.interpretations.map(i => {
          let exp = i.rules[0].output.value;
          let name = exp.split("'")[1];
          let url=''
          return { exp,url, name };
        });
        this.setState({ results: mod });
        console.log(e);
        console.log(mod);
      })
      .then(err => console.log(err));
  };

  search = exp => {
    //  f: [.FN] field
    // Ti :title
    // y:year
    // s:[.U] links
    const attr = "Id,BT,FP,CitCon,C,DOI,I,S,F.FN,Ty,Ti,Y,CC,AA.AuN,AA.AuId";
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate?expr=${exp}&model=latest&count=2&offset=0&attributes=${attr}`;
    axios
      .get(search, config)
      .then(e => {
        const entity = e.data.entities;
        // console.log(e.data.entities);
        let entities = [...this.state.entities, entity];
        this.setState({ entities });
        console.log(e.data);
      })
      .then(err => console.log(err));
  };

  // componentDidMount() {
  // }

  render() {
    return (
      <div className="wiki">
        <Search
          searchResults={this.state.results}
          placeholder="search on Acadimics"
          handleChange={this.handleChange}
          loadContent={this.loadContent}
        />
        <div>
          {this.state.results.map(e => (
            <div>{e.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

// {this.state.entities.map(e => (
//   <div>
//     {e.map(f => (
//       <div>
//         {f.Ti}
//         <div>
//           {f.S !== undefined &&
//             f.S.map(l => (
//               <div className="link">
//                 {/* XXX this substring wil be only for phone sized (we may need to extract the windo widht later) */}
//                 <Link target="_blank" color="secondary" href={l.U}>
//                   {l.U.length > 63 ? l.U.substring(0, 59) + "..." : l.U}
//                 </Link>
//               </div>
//             ))}
//         </div>
//       </div>
//     ))}
//   </div>
// ))}
