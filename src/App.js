import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Sigunup from "./pages/signup";
import Navbar from "./components/Navbar";
import Subject from "./pages/Subject";


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
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/"       component={Home}   />
              <Route exact path="/login"  component={Login}  />
              <Route exact path="/signup" component={Sigunup}/>
              {/* <Route exact path="/subject" component={Subject}/> */}
              <Route exact path="/subject/:subjectName/:subjectId" component={Subject}/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    </MuiThemeProvider>
  );
}

export default App;
