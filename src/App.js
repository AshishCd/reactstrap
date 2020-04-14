import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/container/Home";
import About from "../src/container/About";
import Team from "../src/container/Team";
import Connect from "../src/container/Connect";
import Services from "../src/container/Services";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/services" component={Services} />
          <Route path="/connect" component={Connect} />
          <Route path="/" exact component={Home} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
