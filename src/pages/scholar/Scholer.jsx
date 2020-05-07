import React, { Component } from "react";
// key
// 49dd31f486204254b3dc23dde8c5304c
// i can use url preview to display data on hover !!!!!!!!!!!!!!!!!!!!!!!!!!!
// custumize the query expression later
import axios from "axios";
import Search from "./../Wiki/components/Search";
import Grid from "@material-ui/core/Grid";
import SearchResults from "../Wiki/components/SearchResults";
import MAcontent from "./components/MAcontent";
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
    entities: [],
    offset: 0,
    exp: ""
  };

  loadMoreContent = () => {
    this.loadContent(false);
  };

  handleChange = e => {
    const value = e.currentTarget.value;
    if (value.trim().length > 1) {
      this.inter(value);
    }
  };

  inter = query => {
    //   composit queries later
    this.setState({ rearch: [] });
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/interpret?query=${query}&complete=1&count=15 `;
    axios
      .get(search, config)
      .then(e => {
        let mod = e.data.interpretations.map(i => {
          let exp = i.rules[0].output.value;
          const getfieldName = exp.split("F.FN");
          let name;
          console.log("getfieldName", getfieldName);
          if (getfieldName.length > 1) {
            name = getfieldName[1].split("'")[1];
          } else {
            name = exp.split("'")[1];
          }
          let url = "";
          return { exp, url, name };
        });
        this.setState({ results: mod });
        console.log(e);
        console.log(mod);
      })
      .then(err => console.log(err));
  };

  loadContent = data => {
    // filters --------------------->
    const attr = "Id,BT,FP,CitCon,C,DOI,I,S,F.FN,Ty,Ti,Y,CC,AA.AuN,AA.AuId";
    let model = "latest";
    let count = 12;
    //for pagination

    // f: [.FN] field
    // Ti :title
    // y:year
    // s:[.U] links
    let exp;
    if (data === false) {
      // paginatino
      exp = this.state.exp;
      this.setState({ offset: this.state.offset + 1 });
    } else {
      exp = data.exp;
      // result form clicking on the search results
      this.setState({ exp, entities: [], offset: 0 });
    }
    let offset = this.state.offset;

    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate?expr=${exp}&model=${model}&count=${count}&offset=${offset}&attributes=${attr}`;
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
    const { entities } = this.state;
    return (
      <div className="wiki">
        <Grid container>
          <Grid item md={3}>
            <div className="searchMA">
              <Search
                placeholder="search on papers"
                handleChange={this.handleChange}
              />
              <SearchResults
                searchResults={this.state.results}
                loadContent={this.loadContent}
              />
            </div>
          </Grid>
          <Grid item md={9}>
            {entities.length ? (
              <div className="MAresults results">
                <MAcontent
                  entities={entities}
                  loadMoreContent={this.loadMoreContent}
                />
              </div>
            ) : (
              <div className="MAresults Noresults"></div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}
