import React, { useState, Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

class App extends Component {
  render() {
    return (
      <HashRouter>
        {" "}
        <div>
          <header className="flex-row px-1">
            <h2>Victor McGuire</h2>
            <nav>
              <ul className="flex-row">
                <li className={`mx-2`}>
                  <NavLink to="/About">About me</NavLink>
                </li>
                <li className={`mx-2`}>
                  {" "}
                  <NavLink to="/Portfolio">Portfolio</NavLink>
                </li>
                <li className={`mx-2`}>
                  {" "}
                  <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li className={`mx-2`}>
                  {" "}
                  <NavLink to="/Resume">Resume</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main className="content">
            <Route exact path="/" component={About} />
            <Route path="/About" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Resume" component={Resume} />
          </main>
          <Links></Links>
        </div>
      </HashRouter>
    );
  }
}

export default App;
