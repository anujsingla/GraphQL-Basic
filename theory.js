/*
What is an HTTP Server?

- A server that listens for and responds to HTTP requests. Node.js has a built-in http module that allows developers to
  create an HTTP server. It provides low-level control, developers need to write more code to handle common tasks like routing,
  request parsing, and sending structured responses.
- It helps to communication between a client (browser, mobile app) and a backend application.
- It listens for HTTP requests ("GET" or "POST") and sends back responses.
- Roles:
-- Listen to Requests: A browser asks for a webpage or data from the server. The HTTP server listens to these
   requests on a specific port (3000 or whatever you will give).
-- Processing Requests: It identifies what the client is asking for based on the URL (route) and HTTP method (GET, POST, etc.).
-- Sending Responses: After processing, it sends back data (like HTML, JSON, or files) or a status (like 404 for "not found").

What is Express server?
- It is a web framework for Node.js that simplifies the process of building web applications and APIs.
- It provides higher-level abstractions and built-in utilities to manage routes, handle middleware, process HTTP requests,
  and send responses.
- Built-in routing system with methods like app.get() and app.post().
- Full middleware support for tasks like logging, authentication, and parsing requests.
- Automatically parses JSON and form data using middleware like express.json().
- Built-in middleware support for centralized error handling.
- It is an open-source that is developed and maintained by the Node.js foundation.

- https://expressjs.com/

What is GraphQL server (@apollo/server)
- It is an open-source GraphQL server library that simplifies creating a GraphQL API.
- It helps to define a GraphQL schema, write resolvers, and serve GraphQL queries over HTTP.
- It focuses on handling GraphQL-specific logic, such as query parsing, validation, execution, and schema management.

JavaScript/TypeScript Libraries
- Apollo Server
- Express-GraphQL
- GraphQL Yoga





What is Schema in GraphQL?

- It tells you the structure of your data in a GraphQL API.
- It is like a contract between the client (frontend) and the server (backend) to ensure consistent communication.

It defines:

What data is available.
The relationships between data.
How clients can interact with the data.
It ensures you ask for what you need and get just that—nothing more, nothing less.

For Example:

The schema is like a menu in a restaurant:
It lists what’s available (types of data).
Specifies the details for each dish (fields).
Ensures that customers (clients) know exactly what they can order.

There are 2 things in the Schema:
Query
- A Query is used to fetch data from the server. It’s like asking a question about the data you want.
It is readonly and retrieving data and don’t change anything on the server.
Example: "What is the name of the user with ID 123?"

Mutation
- A Mutation is used to modify data on the server. It’s like sending a command to add, update, or delete something.
It is used for creating, updating, or deleting data.

Example: "Add a new user with the name 'ABCD'."

type Query {
  user(id: ID!): User
  allPosts(userId: ID!): [Post!]!
}

type User {
  id: ID!
  name: String!
  age: Int
  friends: [User!]!
  posts: [Post!]!
}

type Post {
  id: ID!
  content: String!
  createdAt: String!
  author: User!
  comments: [Comment!]!
}

type Comment {
  id: ID!
  content: String!
  createdAt: String!
  author: User!
}


What is a Resolver in GraphQL?
- It is a function that fetches data for a specific field in a GraphQL schema.
- It is used to fetch data from the actual data source (like a database, API, or static file).

How Does a Resolver Work?
- When a client sends a query, the GraphQL server checks the schema to validate the query.
- The server then calls the corresponding resolver for each field in the query to fetch the required data.

Types of Resolvers
- Query Resolvers: Fetch data for queries. Example: Get a list of users.
- Mutation Resolvers: Handle changes to the data (create, update, delete). Example: Add a new user.
- Field Resolvers: Resolve specific fields within a type. Example: Compute a fullName from firstName and lastName.

Example:
- Think of a Resolver as a chef in a restaurant:
- The schema is the menu (defines what’s available).
- The query is your order (what you want).
- The resolver is the chef who prepares the dish by fetching ingredients (data) and presenting it.

type Query {
  user(id: ID!): User
}

type User {
  id: ID!
  name: String!
  email: String!
}

const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      return context.db.getUserById(args.id);
    },
  },
  User: {
    email: (parent) => {
      return parent.email;
    },
  },
};


*/
