import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Sigunup from "./pages/signup";
import Navbar from "./components/Navbar";
import Subject from "./pages/Subject";
import API_KEY from "./config/gapi";
import getFiles from "./helper/getfiles";

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
  state={
    drive: "0B0OtL1j7jam_bWR3THZhd1RnbEE",
    todo:[],
    content: [],
    name:"3-Computer"
  }

addToTodo=(item)=>{
  let [todo] = [this.state.todo]
  todo.push(item)
  this.setState({todo})
  console.log("addded !!!",item)
  console.log(this.state.todo)
}

loadApi = () => {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/client.js";
  return new Promise((resolve, reject) => {
    script.addEventListener("load", () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("drive", "v3", () => {
          resolve();
          this.setState({ gapiReady: true });
        });
      });
    });
    document.body.appendChild(script);
  });
};

loadSubjects = subjects => {
  let content = [];
  subjects.map(
    s =>
    content.push(s)
  );
  this.setState({ content });
};


  componentDidMount() {
    this.loadApi().then(() => {
      getFiles(this.state.drive ,"folder").then(folders =>
        this.loadSubjects(folders.files)
      );
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar todo={this.state.todo} />
          <div className="container">
            <Switch>
              <Route exact path="/"       render={props=><Home {...props} content={this.state.content} name={this.state.name}/>}  />
              <Route exact path="/login"  component={Login}  />
              <Route exact path="/signup" component={Sigunup}/>
              <Route exact path="/subject/:subjectName/:subjectId" render={props=><Subject {...props} addToTodo={this.addToTodo}/>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
    )
  }
}
