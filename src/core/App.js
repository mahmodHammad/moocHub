import React, { Component } from "react";
import { BrowserRouter, Route, Switch ,Redirect } from "react-router-dom";
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

const theme = createMuiTheme({
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       fontSize: '0.7rem',
  //     color:"red"

  //     }
  //   },
  //   MuiCardContent:{
  //     fontSize: '4.7rem',
  //     color:"red"
  //   },
  //   MuiButttonGroup:{
  //     fontSize: '4.7rem',
  //     color:"red"
  //   }
  // },
  palette: {
    primary: {
      main: "#333"
    },
    secondary: {
      light: "#fff",
      main: "#d72323",
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
      default: "#f0f0f0"
    }
  }
});

export default class App extends Component {
  state = {
    communities: [
      {
        name: "Electrical",
        id:"e",
        value: [
          { name: "1st Electrical", id: "1PRU8pyKz4lBlEm1HHkcoHOqnZBnH-6_n" },
          { name: "2nd Electrical", id: "1WOLqo0cqKsXaBOu6NiZ2qOqNHnVgJPpe" },
          { name: "3rd Computer 1", id: "0B0OtL1j7jam_bWR3THZhd1RnbEE" },
          { name: "3rd Computer 2", id: "0B0OtL1j7jam_WEl2WEQzWlFRalU" }
        ]
      },
      {
        name: "Mechanical",
        id:"m",
        value: [
          { name: "1nd Mechanical", id: "f1DyV0e0I0bhsMdU2eiAiPhY_MqkB9r1F7" },
          { name: "2nd Mechanical", id: "1DyV0e0I0bhsMdU2eiAiPhY_MqkB9r1F7" }
        ]
      },
      {
        name: "Test",
        id:"t",
        value: [
          { name: "1nd Test", id: "a1DyV0e0I0bhsMdU2eiAiPhY_MqkB9r1F7" },
          { name: "2nd Test", id: "s1DyV0e0I0bhsMdU2eiAiPhY_MqkB9r1F7" }
        ]
      }
    ],
    todo: [],
    content: [],
    collapse: true
  };

  addToTodo = item => {
    let [todo] = [this.state.todo];
    let found = todo.indexOf(item);
    if (found === -1) {
      item.existInTodo = true;
      todo.push(item);
      this.setState({ todo });

      let tostring = JSON.stringify(todo);
      window.localStorage.setItem("todo", tostring);
    }
  };

  removeFromTodo = item => {
    item.existInTodo = false;
    let todo = this.state.todo.filter(e => e.id !== item.id);

    window.localStorage.setItem("todo", JSON.stringify(todo));
    this.setState({ todo });
  };

  nestedItems = [];

  loadSubjects = subjects => {
    let content = [];
    subjects.map((s, index) => {
      if (s.name[0] === "_") {
        s.name = s.name.substr(1);
        s.hasNestedFolder = true;

        //this line costed me 4 hourses :(
        s.nestedFolder = [];
        content.push(s);
        return this.nestedItems.push({ ...s, index });
      } else {
        return content.push(s);
      }
    });
    this.setState({ content });
    this.latelood(this.nestedItems);
  };

  // for Nested content :
  latelood = nestedItems => {
    nestedItems.map(folder => {
      return this.subFolderLoader(folder);
    });
  };

  subFolderLoader = subcontent => {
    getFiles(subcontent.id, "folder").then(sContent => {
      let [content] = [this.state.content];
      content[subcontent.index].nestedFolder = sContent;
      this.setState({ content });
    });
  };
  ////////////////////////////////////////// End Handling Nesting  }>-

  load = id => {
    loadApi().then(() =>
      getFiles(id, "folder").then(folders => {
        this.loadSubjects(folders.files);
      })
    );
  };

  ChooseCommumity = community => {
    const id = community.id;
    const name = community.name;
    this.load(id);
    window.localStorage.setItem("community", `/${name}/${id}`);
  };

  getCommunity = () => {
    const defaultCommunity = window.localStorage.getItem("community");
    let id;
    if (defaultCommunity) {
      id = defaultCommunity.split("/")[2];
      this.load(id);
    }
  };

  // load todo,community  from local storage

  componentDidMount() {
    this.getCommunity();
    let gettodo = window.localStorage.getItem("todo");
    if (gettodo) {
      let todo = JSON.parse(gettodo);
      this.setState({ todo });
    }
  }

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Demo /> */}
        <div className="App">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            {/*XXXXXXXXXX Giving the whole communities is not a good idea __ i only need name & ID XXXXXXXXXxX*/}
            <Navbar
              communities={this.state.communities}
              todo={this.state.todo}
              removeFromTodo={this.removeFromTodo}
              getCommunity={this.getCommunity}
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
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}
