// Import necessary components, modules, functions, etc., and then set up the routes for the four required pages
import './App.css';
import './index.css';
import React from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={About}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/resume" component={Resume}/>
    </Router>
  );
}; 

export default App;