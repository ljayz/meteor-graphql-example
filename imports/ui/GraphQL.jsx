import React, { useState } from 'react';
import ApolloClient from 'apollo-boost'
import gql from "graphql-tag";

export default () => {
  // the Apollo cache is set up automatically
  const client = new ApolloClient({
    uri: '/graphql',
  });

  client
    .query({
      query: gql`
        {
          hello,
          test
        }
      `
    })
    .then(result => console.log(result));

  return (
    <>
      Test GraphQL
    </>
  );
}