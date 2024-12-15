export const users = [
    {
      id: "1",
      name: "Anuj",
      age: 30,
      friends: ["2", "3"],
      posts: ["101", "102"],
    },
    {
      id: "2",
      name: "Rob",
      age: 25,
      friends: ["1", "3"],
      posts: ["103"],
    },
    {
      id: "3",
      name: "Bob",
      age: 35,
      friends: ["1", "2"],
      posts: [],
    },
  ];
  
export const posts = [
    {
      id: "101",
      content: "Hello, Facebook world!",
      createdAt: "2024-12-01T10:00:00Z",
      author: "1",
      comments: ["201", "202"],
    },
    {
      id: "102",
      content: "GraphQL is amazing!",
      createdAt: "2024-12-02T14:30:00Z",
      author: "1",
      comments: ["203"],
    },
    {
      id: "103",
      content: "Enjoying a sunny day!",
      createdAt: "2024-12-03T12:00:00Z",
      author: "2",
      comments: [],
    },
  ];
  
export const comments = [
    {
      id: "201",
      content: "Nice post!",
      createdAt: "2024-12-01T11:00:00Z",
      author: "2",
    },
    {
      id: "202",
      content: "Thanks for sharing!",
      createdAt: "2024-12-01T11:15:00Z",
      author: "3",
    },
    {
      id: "203",
      content: "I agree, GraphQL is awesome!",
      createdAt: "2024-12-02T15:00:00Z",
      author: "2",
    },
  ];