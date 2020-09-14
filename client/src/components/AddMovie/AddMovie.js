import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getDirectorsQuery } from './query';
import { addMovieMutation } from './mutation';
import { getMoviesQuery } from '../MoviesList/query';
import { flowRight as compose } from 'lodash';


function AddMovie(props) {
    console.log(props);
    const { loading, directors } = props.getDirectorsQuery;
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [directorId, setDirectorId] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("State", name, genre, directorId);
        props.addMovieMutation({
            variables: {
                name,
                genre,
                directorId
            },
            refetchQueries: [{ query: getMoviesQuery }]
        })
    }
    return (
        <div className="AddMovie">
            {loading ?
                <div>Data loading...</div> :
                <form onSubmit={formSubmit}>
                    <label htmlFor="name">Name</label><br />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    /><br />
                    <label htmlFor="genre">Genre</label><br />
                    <input
                        type="text"
                        name="genre"
                        value={genre}
                        onChange={(e) => { setGenre(e.target.value) }}
                    /><br />
                    <select
                        onChange={(e) => { setDirectorId(e.target.value) }}
                        name="directors"
                    >
                        <option value="">Select director</option>
                        {directors.map(director =>
                            <option
                                key={director.id}
                                value={director.id}
                            >{director.name}</option>)
                        }
                    </select><br />
                    <button type="submit">Add Movie </button>
                </form>
            }
        </div>
    );
}

export default compose(
    graphql(getDirectorsQuery, { name: "getDirectorsQuery" }),
    graphql(addMovieMutation, { name: "addMovieMutation" })
)(AddMovie);
