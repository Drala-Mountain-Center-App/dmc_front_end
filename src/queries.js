import { gql } from "@apollo/client";


export const GET_MEDITATION_QUERY = gql`
mutation($userEmail: String!, $totalSittingTime: Int!) {
  createMeditationByEmail(input: {
    totalSittingTime: $totalSittingTime,
    userEmail: $userEmail
  }) {
    id
    totalSittingTime
    createdAt
    completedBy {
      id
      firstName
    }
  }
}
`;

export const Get_User_Email_Query = gql`
query GetUserByEmail($email: String!) {
  userByEmail(email: $email) {
    id
    firstName
    lastName
    email
    member
    totalMeditations
    totalMeditationTime
    averageMeditationTime
  }
}
`;

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

export const Get_Videos_Query = gql`
  query {
    allVideos {
      id
      title
      description
      speaker
      topic
      length
      dateRecorded
      videoUrl
      thumbnailUrl
      embedCode
      vimeoId
    }
  }
`;

export const Sign_In_User = gql`
  mutation($email: String!, $password: String!) {
    signInUser( input: {
        credentials: {
            email: $email,
            password: $password
        }
    }) {
        token
        user {
            id
            firstName
        }
    }
  }
`;
