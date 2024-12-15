// example 1
// http ->express -> apollo wrapper
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// Define the schema
const typeDefs = `
  type Query {
    hello: String
    add(x: Int!, y: Int!): Int
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => "Hello, GraphQL!",
    add: (_, { x, y }) => x + y,
  },
};

// Create the server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// What `startStandaloneServer` function do:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware, which means it handles requests to endpoints like /graphql by default.
// Middleware in Express is a function that processes requests before they reach your routes or GraphQL resolvers.
//  3. prepares your app to handle incoming requests
// Start the server
// You don’t need to manually set up Express or integrate ApolloServer as middleware.
// No need for boilerplate code.
// Fast Setup
startStandaloneServer(server, {
  listen: { port: 5000 },
}).then(({ url }) => {
  console.log(`GraphQL Server running at ${url}`);
});
