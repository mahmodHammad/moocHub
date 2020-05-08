import React, { Component } from "react";
// key
// 49dd31f486204254b3dc23dde8c5304c
// i can use url preview to display data on hover !!!!!!!!!!!!!!!!!!!!!!!!!!!
// custumize the query expression later
import axios from "axios";
import Search from "./../Wiki/components/Search";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

import SearchResults from "../Wiki/components/SearchResults";
import MAcontent from "./components/MAcontent";
import { goToAnchor } from "react-scrollable-anchor";
import { Swipeable } from "react-swipeable";
import { Redirect } from "react-router-dom";
import Microlink from "@microlink/react";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";
// 4e08ba45eee44bfcb1e10af8c86e0e3d
const key = "49dd31f486204254b3dc23dde8c5304c";
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
    exp: "",
    swiped: 0,
    loading: false,
    preview: false,
    s1: "",
    s2: ""
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

  loadMoreContent = () => {
    this.loadContent(false);
  };

  handleChange = e => {
    const value = e.currentTarget.value;
    if (value.trim().length > 1) {
      this.inter(value);
    }
  };

  handlepreview = link => {
    this.setState({ preview: link });
    goToAnchor("preview");
  };

  inter = query => {
    //   composit queries later
    this.setState({ rearch: [], loading: true, preview: false });
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/interpret?query=${query}&complete=1&count=10 `;
    axios
      .get(search, config)
      .then(e => {
        let mod = e.data.interpretations.map(i => {
          let exp = i.rules[0].output.value;
          const getfieldName = exp.split("F.FN");
          let name;
          if (getfieldName.length > 1) {
            name = getfieldName[1].split("'")[1];
          } else {
            name = exp.split("'")[1];
          }
          let url = "";
          return { exp, url, name };
        });
        this.setState({ results: mod, loading: false });
        console.log(e);
        console.log(mod);
      })
      .catch(err => console.log(err));
  };

  loadContent = data => {
    // filters --------------------->
    const attr = "Id,S,Ti,Y,CC";
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
      this.setState({ offset: this.state.offset + 1, loading: true });
    } else {
      // result form clicking on the search results
      exp = data.exp;
      this.setState({ exp, entities: [], offset: 0, loading: true });
      goToAnchor("MAcontent");
    }
    let offset = this.state.offset;

    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate?expr=${exp}&model=${model}&count=${count}&offset=${offset}&attributes=${attr}`;
    axios
      .get(search, config)
      .then(e => {
        const entity = e.data.entities;
        // console.log(e.data.entities);
        let entities = [...this.state.entities, entity];
        this.setState({ entities, loading: false, preview: false });
        console.log(e.data);
      })
      .then(err => console.log(err));
  };

  componentDidMount() {
    this.similarityCheck();
  }
  render() {
    const { entities, swiped, loading, preview } = this.state;
    if (swiped === 1) {
      return <Redirect to="/nerds" />;
    } else if (swiped === -1) {
      return <Redirect to="/wiki" />;
    }

    return (
      <Swipeable
        className="wiki"
        onSwipedRight={() => this.setState({ swiped: 1 })}
        onSwipedLeft={() => this.setState({ swiped: -1 })}
      >
        {loading ? <LinearProgress color="secondary" /> : <span></span>}

        <Grid container>
          <Grid container item xs={12} md={3}>
            <div className="searchMA">
              <Grid item container justify="center">
                <Grid item xs={10}>
                  <Search
                    placeholder="search on papers"
                    handleChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton component={Link} to="./pali">
                    <CheckIcon color="secondary" />
                  </IconButton>
                </Grid>
              </Grid>
              <SearchResults
                searchResults={this.state.results}
                loadContent={this.loadContent}
              />
              {preview !== false ? (
                <Microlink
                  id="preview"
                  style={{ width: "100%", margin: "auto" }}
                  url={preview}
                />
              ) : (
                <span></span>
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={9} id="MAcontent">
            {entities.length ? (
              <div className="MAresults results">
                <MAcontent
                  entities={entities}
                  loadMoreContent={this.loadMoreContent}
                  handlepreview={this.handlepreview}
                />
              </div>
            ) : (
              <div className="MAresults Noresults"></div>
            )}
          </Grid>
        </Grid>
      </Swipeable>
    );
  }
}
