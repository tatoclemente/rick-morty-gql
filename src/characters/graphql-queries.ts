import { gql } from "@apollo/client";


export const GET_CHARACTERS = gql`
  query GetAllCharacters($page: Int, $filter: FilterCharacter) {

    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }

`