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


export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      gender
      origin {
        name
      }
      location {
        name
      }
    } 
  }

`