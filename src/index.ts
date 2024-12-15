import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {resolvers} from "./resolver";
import {typeDefs} from "./schema";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
// What `startStandaloneServer` function do:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware, which means it handles requests to endpoints like /graphql by default.
  // Middleware in Express is a function that processes requests before they reach your routes or GraphQL resolvers.
  //  3. prepares your app to handle incoming requests

  startStandaloneServer(server, {
    listen: { port: 5000 },
  }).then(({ url }) => {
    console.log(`GraphQL Server running at ${url}`);
  });