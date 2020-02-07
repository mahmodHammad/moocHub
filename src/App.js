import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Sigunup from "./pages/signup";
import Navbar from "./components/Navbar";
import Subject from "./pages/Subject";
import getFiles from "./helper/getfiles";
import Pdf from "./components/PdfIframe";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Scroll from "./components/Scoll";
import loadApi from "./helper/loadApi";
import Demo from "./components/demo";
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
    drive: "170Z-UhcsG4u5cyKdlEtk0OA22eEfjSBH",
    todo: [],
    content: [],
    name: "3rd-Computer",
    contentToBeRendered: []
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
  lood = s => {
    return new Promise((resolve, reject) => {
      getFiles(s.id, "folder").then(nestedFolder => {
        resolve(nestedFolder);
      });
    });
  };
  nestedItems = [];
  loadSubjects = (subjects) => {
    let content = [];
    subjects.map((s,index) => {
      if (s.name[0] === "_") {
        s.name = s.name.substr(1);
        s.hasNestedFolder = true;
        content.push(s);
        this.nestedItems.push({...s,index:index});
      } else {
        content.push(s);
      }
    });
    // console.log("hoooof", content);
    this.setState({ content });
    this.latelood(this.nestedItems);
  };

  subFolderLoader = subcontent => {
    return new Promise((resolve, reject) => {
      getFiles(subcontent.id, "folder").then(folder => {
        subcontent.nestedFolder = folder;
        resolve(subcontent);
      });
    }).then((sContent) => {
      let [content]=[this.state.content]
      content[sContent.index].nestedFolder=sContent
      console.log("after getting ", content);
      this.setState({ content });
    });
  };

  latelood = nestedItems => {
    nestedItems.map(folder => {
      this.subFolderLoader(folder);
    });

    // getFiles(hasNestedContent.id , "folder").then(folder=>{
    //   hasNestedContent.nestedFolder = folder;
    //   console.log("hasNestedContent" , hasNestedContent)
    // })

    // let [content]=[this.state.content]
    // console.log("conten : " , content)
    // console.log("holdy shit content : " , this.state.content)
  };

  start = () => {
    loadApi().then(() => {
      getFiles(this.state.drive, "folder").then(folders => {
        // console.log(`getting files at App.js`, folders);
        this.loadSubjects(folders.files);
      });
    });
  };

  componentDidMount() {
    this.start();
  }

  render() {
    console.log(this.state.content);
    return (
      <MuiThemeProvider theme={theme}>
        {/* <Demo /> */}
        <div className="App">
          <Scroll />
          <BrowserRouter>
            <Navbar
              todo={this.state.todo}
              removeFromTodo={this.removeFromTodo}
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

              {this.state.todo.length !== 0 &&
                this.state.todo.map(e => (
                  <Pdf
                    key={e.id}
                    file={e}
                    removeFromTodo={this.removeFromTodo}
                    addToTodo={this.addToTodo}
                    display={true}
                  />
                ))}
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}
