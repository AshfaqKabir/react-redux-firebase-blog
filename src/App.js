import React, { Component } from "react";
import "./styles/index.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Home from "./components/Pages/Home";
// import Blog from "./components/Projects/Blog";
import Contact from "./components/Pages/Contact";
import Blog from "./components/Projects/Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route path="/blog" component={Blog} />*/}
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Blog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
