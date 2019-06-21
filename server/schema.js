const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int
      title: String
    }

    type User {
      id: Int
      name: String!
      lastname: String
      email: String!
    }

    type Query {
      posts: [Post]
      users: [User]!
    }
  `,
  resolvers: {
    Query: {
      posts: () => [{
        id: 1,
        title: 'Mi título',
      }],
      users: () => [{
        id: 123,
        name: 'Andi',
        lastname: 'M',
        email: 'andre@ymail.com',
      }],
    },
  },
});

module.exports = schema;
