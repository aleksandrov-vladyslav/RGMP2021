import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux/store';

import '../styles/index.scss';
import './App.scss';

import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer'
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/movies" />
          <Route
            exact path={['/movies', '/movies/search', '/movies/film/:id']}
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
    </Provider>
  );
}

export default App;