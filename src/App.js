import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Academy from "./pages/Academy";
import Community from "./pages/Community";
import Game from "./pages/Game";
import Store from "./pages/Store";
import Heroes from "./pages/Heroes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/heroes" component={Heroes} />
            <Route path="/academy" component={Academy} />
            <Route path="/community" component={Community} />
            <Route path="/store" component={Store} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
