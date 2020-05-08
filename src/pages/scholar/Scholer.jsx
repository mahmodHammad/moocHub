import React, { Component } from "react";
import axios from "axios";
import { goToAnchor } from "react-scrollable-anchor";
import ViewAcadimics from "./components/ViewAcadimics";
// key
// 49dd31f486204254b3dc23dde8c5304c
// custumize the query expression later
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
    loading: false,
    preview: false,
    s1: "",
    s2: ""
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
        let entities = [...this.state.entities, entity];
        this.setState({ entities, loading: false, preview: false });
      })
      .then(err => {
        console.log(err);
      });
  };
  render() {
    const { entities, results, loading, preview } = this.state;
    const { loadMoreContent, handlepreview, handleChange, loadContent } = this;

    return (
      <ViewAcadimics
        handlepreview={handlepreview}
        results={results}
        loadContent={loadContent}
        handleChange={handleChange}
        loadMoreContent={loadMoreContent}
        entities={entities}
        loading={loading}
        preview={preview}
      />
    );
  }
}
