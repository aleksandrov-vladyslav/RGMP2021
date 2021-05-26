import React from "react";
import { connect } from 'react-redux';
import { useEffect } from 'react'

import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main';

import { setId, searchMovieById } from '.././../actions';

const Index = props => {
  useEffect(() => {
    props.setId(props.data.id);
    props.searchMovieById(props.data.id);
  }, [])

  return (
    <>
      <Header details={true}/>
      <Main />
    </>
  )
}

export async function getServerSideProps({query}) {
  // Fetch data from external API
  const res = await fetch('http://localhost:4000/movies/' + query.movieId);
  const data = await res.json()

  setId(data.id);
  searchMovieById(data.id);

  // Pass data to the page via props
  return { props: { data } }
}

const mapDispatchToProps = {
  setId,
  searchMovieById
};

export default connect(
  null,
  mapDispatchToProps
)(Index);
