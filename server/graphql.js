import { ApolloServer, gql } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import { getUser } from 'meteor/apollo';

// import typeDefs from '/imports/api/schema.graphql';
// import resolvers from './resolvers'

const typeDefs = gql`
  type Query {
    hello: String,
    test: String
    test1: Test
  },

  type Test {
    testing: String
    test2: String
  }
`;

const resolvers = {
  Query: {
    hello() {
      return 'Hello world!';
    },

    test() {
      return 'Test';
    },

    test1() {
      return '';
    }
  },

  Test: {
    testing() {
      return 'testing';
    },

    test2() {
      return 'test2';
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: async ({ req }) => ({
  //   //user: await getUser(req.headers.authorization)
  //   user: true,
  // })
})

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
})