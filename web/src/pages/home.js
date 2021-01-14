import React from 'react';

import Button from '../components/Button';
// import the required libraries
import { useQuery, gql } from '@apollo/client';

const Home = () => {
  // query hook
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! </p>;

  return (
    <div>
      {console.log(data)}
      The data loaded!
    </div>
  );
};

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

export default Home;
