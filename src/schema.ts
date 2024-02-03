import { gql } from 'graphql-tag';

const typeDefs = gql`
  #graphql
  input QueryBooksInput {
    title: String
  }

  input QueryBookInput {
    id: ID!
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
  }

  type Query {
    books(input: QueryBooksInput): [Book!]!
    book(input: QueryBookInput): Book
  }
`;

export default typeDefs;
