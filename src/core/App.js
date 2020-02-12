// i stoped at trying to make App.js as a single source of truth 




import React, { Component } from "react";
import { HashRouter as BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./App.css";
import Home from "../pages/home/home";
import Navbar from "./components/Navbar";
/* 
responsibel for having knowlage of all states
make routing
provide theme
*/
import Communities from "../pages/Communities/Communities" 
import Subject from "../pages/subject/Subject";

import Scroll from "./components/Scoll";

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
    communities: [
      { name: "1st Electrical", id: "1PRU8pyKz4lBlEm1HHkcoHOqnZBnH-6_n" },
      { name: "2nd Electrical", id: "1WOLqo0cqKsXaBOu6NiZ2qOqNHnVgJPpe"},
      { name: "2nd Mechanical", id: "1DyV0e0I0bhsMdU2eiAiPhY_MqkB9r1F7" }
    ],
    todo: [],
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
 
  handleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };
 

  render() {
    console.log("LS" , window.localStorage.getItem("community"))
    return (
      <MuiThemeProvider theme={theme}>
        {/* <Demo /> */}
        <div className="App">
          <Scroll />
          <BrowserRouter>
          {/*XXXXXXXXXX Giving the whole communities is not a good idea __ i only need name & ID XXXXXXXXXxX*/}
            <Navbar
              communities={this.state.communities}
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
                    <Communities
                      {...props}
                      content={this.state.content}
                      communities={this.state.communities}
                      getContent={this.getContent}
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



// will be added later

{/* <DisplayContent
 collapse={this.state.collapse}
 todo={this.state.todo}
 addToTodo={this.addToTodo}
 removeFromTodo={this.removeFromTodo}
/> */}