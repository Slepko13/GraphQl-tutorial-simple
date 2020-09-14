import { gql } from 'apollo-boost';


export const removeMovieMutation = gql`
mutation ( $id: ID){
    removeMovie(id : $id ){
  
        id
    }
}
`
