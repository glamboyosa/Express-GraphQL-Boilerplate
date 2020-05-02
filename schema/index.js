const { buildSchema } = require('graphql');
const schema = buildSchema(`
type Test {
    name: String!
    lastName: String!
    phoneNumber: String!
}
type RootQuery {
    test: [Test!]!
}
type RootMutation {
    addUserDetails(name: String!, lastName: String!, phoneNumber: String!): Test!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);
module.exports = schema;
