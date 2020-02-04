import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Sigunup from "./pages/signup";
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1769aa"
    },
    secondary: {
      light: "#0066ff",
      main: "#ec9e0f",
      contrastText: "#222266"
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
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    </MuiThemeProvider>
  );
}

export default App;
