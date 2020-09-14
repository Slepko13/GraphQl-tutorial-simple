import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getMoviesQuery } from './query';
import MovieDetails from '../MovieDetails/MovieDetails';
import DeleteMovie from '../DeleteMovie/DeleteMovie';





function MoviesList({ data: { loading, movies } }) {
    const [id, setId] = useState(null);
    return (
        <div className="MoviesList">
            {loading ?
                <div>Data loading</div> :
                <ul>
                    {
                        movies.map(movie =>
                            <li
                                key={movie.id}
                                onClick={(e) => { setId(movie.id) }}
                            >{movie.name}
                                <DeleteMovie
                                    movieId={id}
                                />
                            </li>)
                    }
                </ul>
            }
            {/* <MovieDetails
                movieId={id}
            /> */}
        </div>
    );
}

export default graphql(getMoviesQuery)(MoviesList);
