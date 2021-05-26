import React from "react";
import { useEffect } from 'react'
import { setMovieData } from '../../actions';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main';

const Index = props => {
  useEffect(() => {
    props.setMovieData(props.data.data);
  }, [])
  
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export async function getServerSideProps({query}) {
  // Fetch data from external API
  const res = await fetch('http://localhost:4000/movies?searchBy=title&search=' + query.searchTerm);
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

const mapDispatchToProps = {
  setMovieData
};

export default connect(
  null,
  mapDispatchToProps
)(Index);
