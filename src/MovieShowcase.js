import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(item=><MovieCard title={item.title} IMDBRating={item.IMDBRating} genres={item.genres} poster={item.poster}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

// title: 'Choux and Maru',
//     IMDBRating: 4,
//     genres: ['cats', 'drama', 'romance'],
//     poster: 'choux-maru-part-1'
