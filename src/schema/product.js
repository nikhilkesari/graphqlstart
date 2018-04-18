const graphql = require('graphql');
const {GraphQLObjectType, GrpahQLString} = graphql;

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})