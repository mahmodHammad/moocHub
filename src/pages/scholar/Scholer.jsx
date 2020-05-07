import React, { Component } from "react";
// key
// 49dd31f486204254b3dc23dde8c5304c
// i can use url preview to display data on hover !!!!!!!!!!!!!!!!!!!!!!!!!!!
// custumize the query expression later
import axios from "axios";
import Search from "./../Wiki/components/Search";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
      this.setState({ entities: [] });
      this.inter(value);
    }
  };

  inter = query => {
    //   composit queries later
    this.setState({ rearch: [] });
    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/interpret?query=${query}&complete=1&count=14`;
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
    let count = 1;
    //for pagination

    // f: [.FN] field
    // Ti :title
    // y:year
    // s:[.U] links
    if (data === false) {
      // paginatino
      this.setState({ offset: this.state.offset + 1 });
    } else {
      // result form clicking on the search results
      this.setState({ exp: data.exp, entities: [], offset: 0 });
    }
    let offset = this.state.offset;
    let exp = this.state.exp;

    const search = `https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate?expr=${exp}&model=${model}&Y>=2019&count=${count}&offset=${offset}&attributes=${attr}`;
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
          placeholder="search on papers"
          handleChange={this.handleChange}
          loadContent={this.loadContent}
        />

        {this.state.entities.map(e => (
          <div>
            {e.map(f => (
              <div key={f.Ti} className="contentPapers">
                {f.Ti}
                <div>
                  {f.S !== undefined &&
                    f.S.map(l => (
                      <div className="link">
                        {/* XXX this substring wil be only for phone sized (we may need to extract the windo widht later) */}
                        <Link target="_blank" color="secondary" href={l.U}>
                          {l.U.length > 63 ? l.U.substring(0, 59) + "..." : l.U}
                        </Link>
                      </div>
                    ))}
                  <div className="original">
                    <Link
                      href={`https://academic.microsoft.com/paper/${f.Id}`}
                      target="_blank"
                    >
                      More details...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <Button
          endIcon={<ExpandMoreIcon />}
          color="primary"
          variant="contained"
          size="small"
          onClick={this.loadMoreContent}
        >
          Load more details
        </Button>
      </div>
    );
  }
}
