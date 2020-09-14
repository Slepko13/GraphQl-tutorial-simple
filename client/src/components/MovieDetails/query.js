import { gql } from 'apollo-boost';

export const getMovieQuery = gql`
query($id : ID) {
movie(id: $id) {
    name
    genre
    id 
    director {
        id
        name
        age
        movies {
            name
            id
        }
    }
}
}
`;
