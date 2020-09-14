import React from 'react';
import { flowRight as compose } from 'lodash';
import { graphql } from 'react-apollo';
import { removeMovieMutation } from './mutation';
import { getMoviesQuery } from '../MoviesList/query';


const DeleteMovie = (props) => {
    console.log("Delete", (props));
    return (
        <button
            className='DeleteMovie'
            onClick={() => {
                props.removeMovieMutation({
                    variables: {
                        id: props.movieId
                    },
                    refetchQueries: [{ query: getMoviesQuery }]
                })
            }}
        >Delete</button>
    );
}

export default graphql(removeMovieMutation,
    { name: "removeMovieMutation" }
)(DeleteMovie); 