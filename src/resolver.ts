import { comments, posts, users } from "./mockData";

export const resolvers = {
    Query: {
      user: (parent, args) => {
        return users.find((user) => user.id === args.id);
      },
      allPosts: (parent, args) => {
        return posts.filter((post) => post.author === args.userId);
      },
    },
  
    User: {
      friends: (parent) => {
        return parent.friends.map((friendId) => users.find((user) => user.id === friendId));
      },
      posts: (parent) => {
        return posts.filter((post) => post.author === parent.id);
      },
    },
  
    Post: {
      author: (parent) => {
        return users.find((user) => user.id === parent.author);
      },
      comments: (parent) => {
        return parent.comments.map((commentId) => comments.find((comment) => comment.id === commentId));
      },
    },
  
    Comment: {
      author: (parent) => {
        return users.find((user) => user.id === parent.author);
      },
    },
  
    Mutation: {
      addPost: (parent, args) => {
        const newPost = {
          id: (posts.length + 1).toString(),
          content: args.content,
          createdAt: new Date().toISOString(),
          author: args.author,
          comments: [],
        };
        posts.push(newPost);
        return newPost;
      },
    },
  };