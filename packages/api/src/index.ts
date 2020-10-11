import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 7000 }, () =>
  console.log(`🚀 Server ready at http://localhost:7000${server.graphqlPath}`)
);
