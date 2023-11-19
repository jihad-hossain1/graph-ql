export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query {
    games: [Game]
    game(id: ID!): Game
    review(id: ID!): Review
    reviews: [Review]
    author(id: ID!): Author
    authors: [Author]
  }
`;
