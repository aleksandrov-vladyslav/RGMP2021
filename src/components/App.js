import React, { useState } from "react";

import '../styles/index.scss';
import './App.scss';

import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer'

const App = () => {
  const [headerMovieId, setHeaderMovieId] = useState(0);

  return (
    <>
      <Header setHeaderMovieId={setHeaderMovieId} headerMovieId={headerMovieId}/>
      <Main setHeaderMovieId={setHeaderMovieId} />
      <Footer />
    </>
  );
}

export default App;