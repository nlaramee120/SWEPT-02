const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Ward {
    ward_section_concatenated: String,
    ward: String,
    section: String,
    month_name: String,
    month_number: String,
    dates: String
  }

  type Zip {
    ward: String,
    zipcode: String
  }

  type Snow {
    on_street: String,
    from_stree: String,
    to_street: String

  }
  
  type Query {
    user: User
    getWard(wardNumber: String): [Ward]
    getZip(zipNumber: String): [Zip]
    getSnow(snowNumber: String): [Snow]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `;

module.exports = typeDefs;