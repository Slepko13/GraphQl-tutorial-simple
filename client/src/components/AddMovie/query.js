import { gql } from 'apollo-boost';


export const getDirectorsQuery = gql`
{
    directors {
        name
        id
    }
}
`