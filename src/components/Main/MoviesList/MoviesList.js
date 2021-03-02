import React from 'react';
import MovieCard from './MovieCard/MovieCard';

import './MoviesList.scss';

const movieData = {
  movies: [
    {
      id: '1bafr4',
      img: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Pulp_Fiction_-_Uma_Thurman_Mia_Wallace_-_Quentin_Tarantino_Hollywood_Movie_Poster_b9d2e54b-a73e-46fc-8435-fcc672c41424.jpg?v=1572088239',
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004'
    },
    {
      id: '1bafr44',
      img: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Pulp_Fiction_-_Uma_Thurman_Mia_Wallace_-_Quentin_Tarantino_Hollywood_Movie_Poster_b9d2e54b-a73e-46fc-8435-fcc672c41424.jpg?v=1572088239',
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004'
    },
    {
      id: '1bafr423',
      img: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Pulp_Fiction_-_Uma_Thurman_Mia_Wallace_-_Quentin_Tarantino_Hollywood_Movie_Poster_b9d2e54b-a73e-46fc-8435-fcc672c41424.jpg?v=1572088239',
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004'
    },
    {
      id: '1bafr443',
      img: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Pulp_Fiction_-_Uma_Thurman_Mia_Wallace_-_Quentin_Tarantino_Hollywood_Movie_Poster_b9d2e54b-a73e-46fc-8435-fcc672c41424.jpg?v=1572088239',
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004'
    },
    {
      id: '1bafr4546',
      img: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Pulp_Fiction_-_Uma_Thurman_Mia_Wallace_-_Quentin_Tarantino_Hollywood_Movie_Poster_b9d2e54b-a73e-46fc-8435-fcc672c41424.jpg?v=1572088239',
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004'
    },
    {
      id: '1bafr4767',
      img: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Pulp_Fiction_-_Uma_Thurman_Mia_Wallace_-_Quentin_Tarantino_Hollywood_Movie_Poster_b9d2e54b-a73e-46fc-8435-fcc672c41424.jpg?v=1572088239',
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004'
    }
  ]  
};

const MoviesList = () => {
  const movieCards = movieData.movies.map(movie => {
    return <MovieCard
      key={movie.id}        
      img={movie.img}
      title={movie.title}
      genre={movie.genre}
      year={movie.year}
      />
  })
  return ( 
    <div className="movies-list">
      {movieCards}
    </div> 
  );
}
 
export default MoviesList;