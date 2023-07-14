import { gql } from "@apollo/client";

export const Get_Email_QUERY = gql`
  query {
    userByEmail(email: "email@email.email") {
      id
      firstName
      lastName
      email
      member
      }
  }
`

export const Get_Program_Query = gql`
  query {
    allPrograms {
      name
      startDate
      endDate
      content
      image
      price
      url
      registrationUrl
      categories
      teachers
    }
  }
`;
