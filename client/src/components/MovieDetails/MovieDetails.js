import React from 'react';
import { graphql } from 'react-apollo';
import { getMovieQuery } from './query';

const MovieDetails = (props) => {
    console.log(props);
    const movie = props.data.movie;
    return (
        <div className="MovieDetails">
            {movie ?
                <div>
                    <div>{movie.name}</div>
                    <div>{movie.genre}</div>
                    <div>{movie.director.name}</div>
                    <div>All movies of {movie.director.name}</div>
                    <ul>
                        {movie.director.movies.map(movie =>
                            <li key={movie.id}>{movie.name}</li>)}
                    </ul>
                </div>
                :
                <div>Click on movie</div>}
        </div>
    )

}

export default graphql(getMovieQuery
    , {
        options: (props) => {
            return {
                variables: {
                    id: props.movieId
                }
            }
        }
    }
)(MovieDetails);