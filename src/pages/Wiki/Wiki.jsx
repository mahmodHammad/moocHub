import React, { Component } from "react";
import wtf from "wtf_wikipedia";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./wiki.css";
import axios from "axios";
import Search from "./components/Search";
import WikiContent from "./components/WikiContent";
let searchUrl =
  "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=";

export default class Wiki extends Component {
  state = {
    search: "",
    searchResults: [],
    Amper:
      "{{For|the SI unit of electric current|Ampere}}\n{{short description|River in Germany}}\n{{Expand German|Amper|fa=yes|topic=geo|date=December 2009}}\n{{Infobox river\n| name              = Amper \n| subdivision_type1 = Country\n| subdivision_name1 = [[Germany]] \n| subdivision_type2 = Location\n| subdivision_name2 = [[Bavaria]], [[Germany]] \n| image             = Amper I.jpg \n| image_caption     = The Amper south of [[Fürstenfeldbruck]] \n| source1_location  = [[Northern Limestone Alps]] \n| mouth_location    = [[Isar]] \n| mouth_coordinates = {{coord|48|30|1|N|11|57|24|E|display=inline,title}}\n| progression       = {{RIsar}}\n| length            = {{convert|190|km|abbr=on}} \n| source1_elevation = \n| discharge1_avg    = ±{{convert|45|m3/s|abbr=on}}\n| basin_size        = {{convert|3248|km2|abbr=on}} {{GeoQuelle|DE-BY|GV}}\n}}\n\nThe '''Amper''', called the '''Ammer''' upstream of the [[Ammersee]], through which it runs, is the largest tributary of the [[Isar]] in southern [[Bavaria]], Germany. It flows generally north-eastward, reaching the Isar in [[Moosburg]], about {{convert|190|km}} from its source in the [[Ammergau Alps]], with a flow of 45&nbsp;m³/s. Including its tributary, [[Linder (river)|Linder]], it is {{convert|209.5|km|abbr=on}} long.<ref name=\"DE-BY_GV\" /> Major tributaries are the [[Glonn (Amper)|Glonn]], which springs near [[Augsburg]]; the [[Würm]], which is the outflow of [[Lake Starnberg]]; and the [[Maisach (Amper)|Maisach]].\n\n{{stack|[[File:Flusssystem Ammer Amper.png|thumb|upright|The Ammer/Amper system within the  [[Isar]] basin]]}}\n\nThe Ammer '''starts''' just '''south''' of the village of [[Oberammergau]]. '''Riverside''' cities include [[Fürstenfeldbruck]], [[Dachau]] and Moosburg.\n\n==References==\n{{reflist|30em}}\n\n==External links==\n*{{official website|http://www.wwa-m.bayern.de/fluesse_seen/gewaesserportraits/amper/index.htm}} {{in lang|de}}\n\n[[Category:Amper basin| ]]\n[[Category:Rivers of Bavaria]]\n[[Category:Ammersee]]\n\n{{Bavaria-river-stub}}",
    data: false,
    loading: false,
    url: ""
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
    console.log("getting data form ");
    this.setState({ data: false, loading: true, url: "", searchResults: [] });
    wtf
      .fetch(title)
      .then(data => {
        console.log("XXXXXXXX", data.json());
        this.setState({ data: data.json(), url: data.url(), loading: false });
      })
      .catch(err => alert("can not retrieve data!!!"));
  };

  // XXX Needs Refactoring XXX

  render() {
    const { searchResults, loading, data, url } = this.state;
    return (
      <div className="wiki">
        {loading ? <LinearProgress color="secondary" /> : <span></span>}

        <div>
          <Search
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
      </div>
    );
  }
}
