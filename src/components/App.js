import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import '../styles/index.scss';
import './App.scss';

import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer'
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/movies" />
        <Route
          path='/movies'
          render={(props) => (
            <>
              <Header {...props} />
              <Main {...props} />
            </>
          )}
        />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;