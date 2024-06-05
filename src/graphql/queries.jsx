import { gql } from '@apollo/client';

export const GET_LEADERBOARD = gql`
  query GetLeaderboard {
    leaderboard {
      id
      username
      score
    }
  }
`;


