import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import getFiles from "./../helper/getfiles";
import loadApi from "./../helper/loadApi";

import Navbar from "./components/Navbar";
import Home from "../pages/home/home";
import Communities from "../pages/Communities/Communities";
import Subject from "../pages/subject/Subject";
import Nerds from "./../pages/nerds/Nerds";
import customTheme from "../config/theme";
import communities from "../config/communities";
import videosJson from "./Video/vidData";
import Video from "./Video/Video";
import { configureAnchors } from "react-scrollable-anchor";
import VideosDisplayer from "./../pages/video/VideosDisplayer";

import { Rnd } from "react-rnd";

const theme = createMuiTheme({
  palette: customTheme
});

export default class App extends Component {
  state = {
    communities: communities,
    todo: [],
    content: [],
    collapse: true
  };

  addToTodo = (item, parent) => {
    let [todo] = [this.state.todo];
    let indexOfSubject = false;

    todo.forEach((subj, index) => {
      if (subj.id === parent.id) indexOfSubject = index;
    });

    // if not exist {create one}
    if (indexOfSubject === false) {
      todo.push({ ...parent, value: [{ ...item }] });
    }
    // else {get index then push item to it's value property}
    else {
      let value = todo[indexOfSubject].value;
      let found = value.indexOf(item);

      value.forEach((content, index) => {
        content.id === item.id ? (found = index) : (found = -1);
      });
      if (found === -1) {
        value.push({ ...item });
      }
    }
    this.setState({ todo });
    // store it in local storage
    let tostring = JSON.stringify(todo);
    window.localStorage.setItem("todo", tostring);
  };

  removeFromTodo = (item, parentId) => {
    let [todo] = [this.state.todo];

    let filteredTodo = todo.map(subject => {
      if (subject.id === parentId) {
        let filteredSubject = subject.value.filter(
          content => content.id !== item.id
        );
        subject.value = filteredSubject;
        return subject;
      } else return subject;
    });

    let notEmptyTodo = filteredTodo.filter(
      subject => subject.value.length !== 0
    );

    this.setState({ todo: notEmptyTodo });
    window.localStorage.setItem("todo", JSON.stringify(notEmptyTodo));
  };

  getVideos = subjectId => {
    let value = false;
    videosJson.forEach(v => {
      if (v.id === subjectId) {
        value = v;
        console.log("video is exists", v);
      }
    });
    return value;
  };

  // checks for if the subject has devided content
  loadContent = subjects => {
    let dividedSubjects = [];
    let content = [];
    subjects.map((s, index) => {
      s.video = this.getVideos(s.id);
      if (s.name[0] === "_") {
        // it's divided subject
        s.name = s.name.substr(1);
        s.isDivided = true;

        //this line costed me 4 hourses :(
        s.divided = [];
        content.push(s);
        return dividedSubjects.push({ ...s, index });
      } else {
        return content.push(s);
      }
    });
    this.setState({ content });
    this.loadDividedSubjects(dividedSubjects);
  };

  // for Nested content :
  loadDividedSubjects = dividedSubjects => {
    dividedSubjects.map(folder => {
      return getFiles(folder.id, "folder").then(subjectContent => {
        let [content] = [this.state.content];
        content[folder.index].divided = subjectContent;
        this.setState({ content });
      });
    });
  };

  ////////////////////////////////////////// End Handling Nesting  }>-

  loadSubject = id => {
    loadApi().then(() =>
      getFiles(id, "folder").then(folders => {
        this.loadContent(folders.files);
      })
    );
  };

  ChooseCommumity = community => {
    const id = community.id;
    const name = community.name;
    this.loadSubject(id);
    window.localStorage.setItem("community", `/${name}/${id}`);
  };

  getCommunity = () => {
    const defaultCommunity = window.localStorage.getItem("community");
    let id;
    if (defaultCommunity) {
      id = defaultCommunity.split("/")[2];
      this.loadSubject(id);
    }
  };

  // load todo,community  from local storage

  clearLocalStorage = () => {
    window.localStorage.clear();
  };

  componentDidMount() {
    this.getCommunity();
    let gettodo = window.localStorage.getItem("todo");
    if (gettodo) {
      let todo = JSON.parse(gettodo);
      this.setState({ todo });
    }

    configureAnchors({ scrollDuration: 0 });
  }

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar
              communities={this.state.communities}
              todo={this.state.todo}
              removeFromTodo={this.removeFromTodo}
              getCommunity={this.getCommunity}
              clearLocalStorage={this.clearLocalStorage}
            />

            <div>
              {/* START ROUTING  **********************************************/}
              <Switch>
                >
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Communities
                      {...props}
                      communities={this.state.communities}
                      ChooseCommumity={this.ChooseCommumity}
                    />
                  )}
                />
                <Route
                  exact
                  path="/:subjectName/:subjectId"
                  render={props => (
                    <Home
                      {...props}
                      addToTodo={this.addToTodo}
                      removeFromTodo={this.removeFromTodo}
                      communities={this.state.communities}
                      content={this.state.content}
                    />
                  )}
                />
                <Route
                  exact
                  path="/subject/:subjectName/:subjectId"
                  render={props => (
                    <Subject
                      {...props}
                      addToTodo={this.addToTodo}
                      removeFromTodo={this.removeFromTodo}
                      todo={this.state.todo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/videos/:subjectName/:subjectId"
                  render={props => (
                    <VideosDisplayer
                      {...props}
                      addToTodo={this.addToTodo}
                      removeFromTodo={this.removeFromTodo}
                      todo={this.state.todo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/nerds"
                  render={props => (
                    <Nerds
                      {...props}
                      todo={this.state.todo}
                      addToTodo={this.addToTodo}
                      removeFromTodo={this.removeFromTodo}
                      communities={this.state.communities}
                      content={this.state.content}
                    />
                  )}
                />
              </Switch>
              {/* end routing **********************************************/}

              {/* Will Work When Pin Button Is Pressed  */}

              {/* <Rnd
                default={{
                  x: window.innerWidth-500,
                  y: window.innerHeight-310,
                  width: 444,
                  height: 250
                }}
                minWidth={420}
                minHeight={110}
                bounds="window"
                lockAspectRatio={true}
              >
                <Video
                  url="https://www.youtube.com/watch?v=3_odWVNb_Qw"
                  pinned={true}
                  goto={[
                    ["Problem1", 880],
                    ["Problem2", 2440],
                    ["Problem3", 3257],
                    ["Problem4", 3530]
                  ]}
                />
              </Rnd> */}
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}
