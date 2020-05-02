const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const GraphQLHTTP = require('express-graphql');
const GraphQLSchema = require('./schema/index');
const GraphQLResolvers = require('./resolvers/index');
app.use(bodyParser.json());
app.use(cors());
app.use(
  '/api/graphql',
  GraphQLHTTP({
    schema: GraphQLSchema,
    rootValue: GraphQLResolvers,
    graphiql: true,
  })
);
const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`connected on ${port}`));
