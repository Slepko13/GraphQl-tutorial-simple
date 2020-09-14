import { gql } from 'apollo-boost';


export const addMovieMutation = gql`
mutation ($name: String!, $genre: String!, $directorId: ID){
    addMovie(name: $name, genre: $genre, directorId: $directorId ){
        name
        id
    }
}
`
