import React, { Component } from "react";
import {HashRouter as BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";


import "./App.css";
import Home from "../pages/home/home";
import Login from "../pages/login";
import Sigunup from "../pages/signup";
import Navbar from "../components/Navbar";
import Subject from "../pages/subject/Subject";
import getFiles from "../helper/getfiles";

import Scroll from "../components/Scoll";
import loadApi from "../helper/loadApi";
import DisplayContent from "../components/DisplayContent";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1769aa"
    },
    secondary: {
      light: "#0066ff",
      main: "#e2f3f5",
      contrastText: "#222244s"
    }
  }
});

export default class App extends Component {
  state = {
    drive: "0B0OtL1j7jam_bWR3THZhd1RnbEE",
    todo: [],
    content: [],
    name: "2nd-Electrical",
    contentToBeRendered: [],
    collapse: true
  };

  addToTodo = item => {
    let [todo] = [this.state.todo];
    let found = todo.indexOf(item);
    if (found === -1) {
      item.existInTodo = true;
      todo.push(item);
      this.setState({ todo });
    }
  };

  removeFromTodo = item => {
    item.existInTodo = false;
    let todo = this.state.todo.filter(e => e.id !== item.id);
    this.setState({ todo });
  };

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^vvvvvvvvvv^v^v^v^
  nestedItems = [];
  start = () => {
    loadApi().then(() => {
      getFiles(this.state.drive, "folder").then(folders => {
        this.loadSubjects(folders.files);
      });
    });
  };

  loadSubjects = subjects => {
    let content = [];
    subjects.map((s, index) => {
      if (s.name[0] === "_") {
        s.name = s.name.substr(1);
        s.hasNestedFolder = true;
        //this line costed me 4 hourses :(
        s.nestedFolder = [];
        content.push(s);
        this.nestedItems.push({ ...s, index });
      } else {
        content.push(s);
      }
    });
    this.setState({ content });
    this.latelood(this.nestedItems);
  };

  // for Nested content :
  latelood = nestedItems => {
    nestedItems.map(folder => {
      this.subFolderLoader(folder);
    });
  };

  subFolderLoader = subcontent => {
    getFiles(subcontent.id, "folder").then(sContent => {
      let [content] = [this.state.content];
      content[subcontent.index].nestedFolder = sContent;
      this.setState({ content });
    });
  };

  handleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  componentDidMount() {
    this.start();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* <Demo /> */}
        <div className="App">
          <Scroll />
          <BrowserRouter>
            <Navbar
              todo={this.state.todo}
              removeFromTodo={this.removeFromTodo}
              handleCollapse={this.handleCollapse}
            />
            <div className="container">
              {/* START ROUTING  **********************************************/}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home
                      {...props}
                      content={this.state.content}
                      name={this.state.name}
                    />
                  )}
                />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Sigunup} />
                <Route
                  exact
                  path="/subject/:subjectName/:subjectId"
                  render={props => (
                    <Subject
                      {...props}
                      addToTodo={this.addToTodo}
                      removeFromTodo={this.removeFromTodo}
                    />
                  )}
                />
              </Switch>
              {/* end routing **********************************************/}
              <DisplayContent
                collapse={this.state.collapse}
                todo={this.state.todo}
                addToTodo={this.addToTodo}
                removeFromTodo={this.removeFromTodo}
              />
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}
