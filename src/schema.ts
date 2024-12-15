export const typeDefs = `
  type Query {
    user(id: ID!): User
    allPosts(userId: ID!): [Post!]!
  }
  type Mutation {
    addPost(content: String!, author: ID!): Post
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
`;