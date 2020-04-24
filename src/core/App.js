import React, { Component } from "react";
import "./App.css";
// installed components ---------------------
import { configureAnchors } from "react-scrollable-anchor";
import { Rnd } from "react-rnd";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Mui Components -------------------------------
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

// helpers ----------------------------------
import getFiles from "./../helper/getfiles";
import loadApi from "./../helper/loadApi";

//Pages ------------------------------------
import Navbar from "./components/Navbar";
import Home from "../pages/home/home";
import Communities from "../pages/Communities/Communities";
import Subject from "../pages/subject/Subject";
import Nerds from "./../pages/nerds/Nerds";
import VideosDisplayer from "./../pages/video/VideosDisplayer";
import Fill from "./../pages/Fill/Fill";

// Config ----------------------------------
import customTheme from "../config/theme";
import communities from "../config/communities";

// My components ---------------------------
import Video from "./Video/Video";

// id.lenght ===11 is youtube

export default class App extends Component {
  state = {
    pinnedVideo: { isOpenNextTime: false },
    played: 0,
    communities: communities,
    todo: [],
    content: [],
    collapse: true,
    cutumeTheme: {
      primary: {
        main: "#333"
      },
      secondary: {
        light: "#fff",
        main: "#1e88e5",
        contrastText: "#000"
      },
      error: {
        light: "#fff",
        main: "#ff0400",
        contrastText: "#000"
      },
      success: {
        light: "#4ff",
        main: "#00ff60",
        contrastText: "#000"
      },
      background: {
        default:
          "radial-gradient(ellipse at top,#fff,rgb(255, 255, 255),#ddd)"
      }
    }
  };

  theme = createMuiTheme({
    palette: this.state.cutumeTheme
  });

  changeThemeOnce = (main, sec, value) => {
    let oldTheme = { ...this.state.cutumeTheme };
    oldTheme[main][sec] = value;
    this.setState({ cutumeTheme: oldTheme });

    this.theme = createMuiTheme({
      palette: this.state.cutumeTheme
    });
  };

  changeTheme = (
    main = this.state.cutumeTheme.primary.main,
    sec = this.state.cutumeTheme.secondary.main,
    bg = this.state.cutumeTheme.background.default
  ) => {
    let oldTheme = { ...this.state.cutumeTheme };
    oldTheme.primary.main = main;
    oldTheme.secondary.main = sec;
    oldTheme.background.default = bg;
    this.setState({ cutumeTheme: oldTheme });

    this.theme = createMuiTheme({
      palette: this.state.cutumeTheme
    });
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

  loadSubject = id => {
    loadApi().then(() =>
      getFiles(id, "folder").then(folders => {
        this.setState({ content: folders.files });
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

  handleVideoPin = (url, goto, played) => {
    if (this.state.pinnedVideo.isOpenNextTime !== false) {
      this.setState({
        pinnedVideo: {
          isOpenNextTime: false,
          url: url,
          goto: goto,
          played: played
        }
      });
    } else {
      this.setState({
        pinnedVideo: {
          isOpenNextTime: true,
          url: url,
          goto: goto,
          played: played
        }
      });
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
      <MuiThemeProvider theme={this.theme}>
        <CssBaseline />
        <div style={{ background: this.theme.palette.background.default }}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar
              communities={this.state.communities}
              todo={this.state.todo}
              removeFromTodo={this.removeFromTodo}
              getCommunity={this.getCommunity}
              clearLocalStorage={this.clearLocalStorage}
              changeTheme={this.changeTheme}
            />

            {/* START ROUTING  **********************************************/}
            <Switch>
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
                    changeTheme={this.changeTheme}
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
                    handleVideoPin={this.handleVideoPin}
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
              <Route exact path="/fill" component={Fill} />
            </Switch>
            {/* end routing **********************************************/}

            {/* Will Work When Pin Button Is Pressed  */}
            {this.state.pinnedVideo.isOpenNextTime !== false && (
              <Rnd
                default={{
                  x: window.innerWidth - 500,
                  y: window.innerHeight - 310,
                  width: 444,
                  height: 250
                }}
                minWidth={440}
                minHeight={110}
                bounds="window"
                lockAspectRatio={true}
              >
                <Video
                  url={this.state.pinnedVideo.url}
                  isPinned={true}
                  goto={this.state.pinnedVideo.goto}
                  // this Shitty line fixed Every thing
                  played={this.state.pinnedVideo.played}
                  handleVideoPin={this.handleVideoPin}
                />
              </Rnd>
            )}
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}
