import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages";
import Login from "./pages/login";
import GuidelineStl from "./pages/guideline-stl";
import PriceComparison from "./pages/priceComparison";
import NotFoundPage from "./pages/404";




class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/guideline/sign-the-lease" component={GuidelineStl} />
          <Route exact path="/priceComparison" component={PriceComparison} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
