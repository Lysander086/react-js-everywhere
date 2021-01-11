const { gql } = require('apollo-server-express');

// exclamation means that the field is non-nullable.
module.exports = gql`
  scalar DateTime
  type Note {
    id: ID!
    content: String!
    author: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  
  type Query {
    notes: [Note!]!
    note(id: ID): Note!
  }

  type Mutation {
    newNote(content: String!): Note
    deleteNote(id: ID!): Boolean!
    updateNote(id: ID!, content: String!): Note!
     signUp(username: String!, email: String!, password: String!): String!
  signIn(username: String, email: String, password: String!): String!
  }
  
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Note!]!
  }
`;
