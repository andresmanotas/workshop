import React from 'react';
import { gql } from 'apollo-boost';
import Button from '@material-ui/core/Button';
import client from '../apollo/client';
import Posts from '../components/Posts';


const handleClick = () => {
  console.log('Hola click');
};

const Home = () => {
  client
    .query({
      query: gql`
      {
        users {
            id
            name
            email
        }
      }
    `,
    })
    .then(result => console.log(result));

  return (
    <div>
      <h1>Welcome</h1>
      <Button variant="contained" color="primary" onClick={handleClick}>Click!</Button>
      <Posts />
    </div>
  );
};

export default Home;
