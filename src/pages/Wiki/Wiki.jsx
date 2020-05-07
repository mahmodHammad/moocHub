import React, { Component } from "react";
import wtf from "wtf_wikipedia";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./wiki.css";
import axios from "axios";
import Search from "./components/Search";
import WikiContent from "./components/WikiContent";
import { Swipeable } from "react-swipeable";
import { Redirect } from "react-router-dom";

let searchUrl =
  "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=";

export default class Wiki extends Component {
  state = {
    search: "",
    searchResults: [],
    data: false,
    loading: false,
    url: "",
    swiped: 0
  };

  handleChange = e => {
    const value = e.currentTarget.value;
    if (value.trim().length > 1) {
      let searchQuery = searchUrl + value;
      this.search(searchQuery);
    }
  };

  search = url => {
    this.setState({ loading: true });
    axios
      .get(url)
      .then(res => {
        let searchResults = res.data[1].map((e, index) => {
          return { name: e, url: res.data[3][index] };
        });

        this.setState({ searchResults, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadContent = title => {
    this.setState({ data: false, loading: true, url: "", searchResults: [] });
    wtf
      .fetch(title.name)
      .then(data => {
        this.setState({ data: data.json(), url: data.url(), loading: false });
      })
      .catch(err => alert("can not retrieve data!!!"));
  };

  // XXX Needs Refactoring XXX

  render() {
    const { searchResults, loading, data, url, swiped } = this.state;

    if (swiped === 1) {
      return <Redirect to="/nerds" />;
    }

    return (
      <Swipeable
        className="wiki"
        onSwipedRight={() => this.setState({ swiped: 1 })}
      >
        {loading ? <LinearProgress color="secondary" /> : <span></span>}

        <div>
          <Search
            placeholder="search on Wikipedia"
            searchResults={searchResults}
            handleChange={this.handleChange}
            loadContent={this.loadContent}
          />
          <WikiContent
            data={data}
            url={url}
            renderWithStyles={this.renderWithStyles}
            loadContent={this.loadContent}
          />
        </div>
      </Swipeable>
    );
  }
}
